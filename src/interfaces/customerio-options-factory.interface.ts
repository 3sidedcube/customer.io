import { CustomerioOptions } from './customerio-options.interface';

export interface CustomerioOptionsFactory {
    createCustomerioOptions(): Promise<CustomerioOptions> | CustomerioOptions
}
