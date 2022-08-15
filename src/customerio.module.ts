import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { CustomerioService } from './customerio.service';
import { CUSTOMERIO_OPTIONS } from './constants';
import {
    CustomerioOptions,
    CustomerioAsyncOptions,
    CustomerioOptionsFactory,
} from './interfaces';
import { createCustomerioProviders } from './customerio.providers';

@Global()
@Module({
    providers: [CustomerioService],
    exports: [CustomerioService],
})
export class CustomerioModule {
    /**
     * Registers a configured Customerio Module for import into the current module
     */
    public static register(options: CustomerioOptions): DynamicModule {
        return {
            module: CustomerioModule,
            providers: createCustomerioProviders(options),
        };
    }

    /**
     * Registers a configured Customerio Module for import into the current module
     * using dynamic options (factory, etc)
     */
    public static registerAsync(options: CustomerioAsyncOptions): DynamicModule {
        return {
            module: CustomerioModule,
            providers: [...this.createProviders(options)],
        };
    }

    private static createProviders(options: CustomerioAsyncOptions): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createOptionsProvider(options)];
        }

        return [
            this.createOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }

    private static createOptionsProvider(
        options: CustomerioAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: CUSTOMERIO_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }

        // For useExisting...
        return {
            provide: CUSTOMERIO_OPTIONS,
            useFactory: async (optionsFactory: CustomerioOptionsFactory) =>
                await optionsFactory.createCustomerioOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
}
