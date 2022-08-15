import { CustomerioOptions } from './interfaces';
import { CUSTOMERIO_OPTIONS } from './constants';
import { Provider } from '@nestjs/common';

export function createCustomerioProviders(options: CustomerioOptions): Provider[] {
    return [
        {
            provide: CUSTOMERIO_OPTIONS,
            useValue: options,
        },
    ];
}
