"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loadStripe } from "@stripe/stripe-js";
import toast, { Toaster } from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@root/modules/shared/react/components/ui/card";
import { Button } from "@root/modules/shared/react/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@root/modules/shared/react/components/ui/form";
import { Input } from "@root/modules/shared/react/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@root/modules/shared/react/components/ui/select";
import { useCreateCheckout } from "@root/modules/ledger/react/hooks/use-create-checkout.hook";

const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

const formSchema = z.object({
  amount: z.number().min(1, "Le montant doit être supérieur à 0"),
  subscriptionType: z.enum(["one_time", "subscription"], {
    message: "Sélectionne un type de paiement",
  }),
});

type FormData = z.infer<typeof formSchema>;

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createCheckoutMutation = useCreateCheckout();

  // Check URL parameters for payment status
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get("payment");

    if (paymentStatus === "success") {
      toast.success("Paiement réussi ! Merci pour ta contribution !", {
        duration: 5000,
        position: "top-center",
      });
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (paymentStatus === "failed") {
      toast.error("Paiement annulé. Tu peux réessayer quand tu veux.", {
        duration: 5000,
        position: "top-center",
      });
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 50,
      subscriptionType: "subscription",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);

      const result = await createCheckoutMutation.mutateAsync({
        amount: data.amount * 100, // Convert to cents
        subscriptionType: data.subscriptionType,
      });

      // Initialize Stripe and redirect to checkout
      const stripe = await loadStripe(STRIPE_PUBLIC_KEY);
      if (stripe && result.checkout_url) {
        window.location.href = result.checkout_url;
      }
    } catch (error) {
      console.error("Erreur lors de la création du checkout:", error);
      toast.error(
        "Erreur lors de la création du checkout. Veuillez réessayer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Investir dans le Navire</CardTitle>
          <CardDescription>
            Choisis ton montant et un type de paiement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Montant (€)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10.00"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value) || 0)
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subscriptionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de paiement</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionne un type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="one_time">
                          Paiement unique
                        </SelectItem>
                        <SelectItem value="subscription">
                          Abonnement mensuel
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || createCheckoutMutation.isPending}
              >
                {isLoading || createCheckoutMutation.isPending
                  ? "Redirection..."
                  : "Procéder au paiement"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};
