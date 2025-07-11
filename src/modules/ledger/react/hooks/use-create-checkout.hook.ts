import { useMutation } from "@tanstack/react-query";
import { app } from "@root/modules/app/main";

type CreateCheckoutRequest = {
  amount: number;
  subscriptionType: 'one_time' | 'subscription';
};

export const useCreateCheckout = () => {
  return useMutation({
    mutationFn: async ({ amount, subscriptionType }: CreateCheckoutRequest) => {
      return app.dependencies.checkoutGateway.createCheckout(amount, subscriptionType);
    },
  });
};