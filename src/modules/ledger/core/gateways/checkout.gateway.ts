export interface ICheckoutGateway {
  createCheckout(amount: number, subscriptionType: 'one_time' | 'subscription'): Promise<{
    checkout_url: string;
    session_id: string;
  }>;
}