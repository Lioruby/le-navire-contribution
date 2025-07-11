import { AxiosInstance } from "axios";
import { ICheckoutGateway } from "../core/gateways/checkout.gateway";

export class HttpCheckoutGateway implements ICheckoutGateway {
  constructor(private httpClient: AxiosInstance) {}

  async createCheckout(amount: number, subscriptionType: 'one_time' | 'subscription'): Promise<{
    checkout_url: string;
    session_id: string;
  }> {
    const response = await this.httpClient.post('/ledger/checkout/create', {
      amount,
      subscription_type: subscriptionType
    });
    
    return response.data;
  }
}