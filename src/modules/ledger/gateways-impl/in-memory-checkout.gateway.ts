import { ICheckoutGateway } from "../core/gateways/checkout.gateway";

export class InMemoryCheckoutGateway implements ICheckoutGateway {
  async createCheckout(): Promise<{
    checkout_url: string;
    session_id: string;
  }> {
    // Mock implementation for testing
    return {
      checkout_url: `https://checkout.stripe.com/c/pay/test_session_${Math.random()}`,
      session_id: `cs_test_${Math.random()}`,
    };
  }
}