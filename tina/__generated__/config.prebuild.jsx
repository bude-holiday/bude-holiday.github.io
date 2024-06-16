// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/Prices.ts
var prices = {
  name: "prices",
  path: "content",
  match: {
    include: "prices"
  },
  format: "json",
  fields: [
    {
      name: "price",
      type: "object",
      list: true,
      fields: [
        {
          name: "startDate",
          type: "datetime"
        },
        {
          name: "endDate",
          type: "datetime"
        },
        {
          name: "price",
          type: "number"
        }
      ],
      ui: {
        itemProps: (item) => {
          return {
            label: `${item?.startDate} - ${item?.endDate}`
          };
        }
      }
    }
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  }
};
var Prices_default = prices;

// tina/config.ts
var config = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  branch: process.env.TINA_BRANCH ?? process.env.HEAD,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  schema: {
    collections: [Prices_default]
  }
});
var config_default = config;
export {
  config,
  config_default as default
};
