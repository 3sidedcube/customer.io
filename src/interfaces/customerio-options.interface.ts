// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type CustomerioOptions =
    | {
          /**
           * Enable/disable CustomerIO linking
           */
          enabled: false;
      }
    | {
          /**
           * Enable/disable CustomerIO linking
           */
          enabled: true;

          /**
           * Customer.io site
           */
          siteId: string;

          /**
           * Key for API requests
           */
          apiKey: string;
      };
