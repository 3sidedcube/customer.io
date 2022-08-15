// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { TrackClient } from 'customerio-node';
import { CUSTOMERIO_OPTIONS } from './constants';
import { CustomerioOptions, IMessage } from './interfaces';
import { IUser } from './interfaces/user.interface';

interface ICustomerioService {
    identify(user: IUser): Promise<void>;
    destroy(user: string | IUser): Promise<void>;
    registerDevice(
        user: string | IUser,
        details: {
            /**
             * Device identifier
             */
            id: string;
            /**
             * Platform
             */
            platform: 'ios' | 'android';
        },
    ): Promise<void>;
}

@Injectable()
export class CustomerioService implements ICustomerioService {
    private readonly logger: Logger;

    private client: TrackClient;

    constructor(@Inject(CUSTOMERIO_OPTIONS) private _CustomerioOptions: CustomerioOptions) {
        this.logger = new Logger('CustomerioService');
        this.logger.log(`Options: ${JSON.stringify(this._CustomerioOptions)}`);

        this.client = new TrackClient(_CustomerioOptions.siteId, _CustomerioOptions.apiKey);
    }

    /**
     * Create a record for a user
     * @param user User details
     * @param update Update a user rather than creating a new user
     */
    async identify({ created, ...user }: IUser, update = false) {
        await this.client.identify(`${update ? 'cio_' : ''}${user.id}`, {
            ...user,
            created_at: created.getTime(),
        });
    }

    /**
     * Remove records for a user
     * @param user User or their ID
     */
    async destroy(user: string | IUser) {
        await this.client.destroy(this.userID(user));
    }

    /**
     * Add or update a device for a user
     * @param user User
     * @param details Device details
     */
    async registerDevice(user: string | IUser, details: { id: string; platform: 'ios' | 'android' }) {
        await this.client.addDevice(this.userID(user), details.id, details.platform);
    }

    private userID(user: string | IUser) {
        return typeof user === 'string' ? user : user.id;
    }
}
