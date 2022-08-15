/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import { CustomerioOptions } from './customerio-options.interface';
import { CustomerioOptionsFactory } from './customerio-options-factory.interface';

export interface CustomerioAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[]
    useExisting?: Type<CustomerioOptionsFactory>
    useClass?: Type<CustomerioOptionsFactory>
    useFactory?: (...args: any[]) => Promise<CustomerioOptions> | CustomerioOptions
}
