import { defineConfig } from "tinacms";
import prices from './collections/Prices';

export const config = defineConfig({
	clientId: process.env.TINA_CLIENT_ID,
	branch: process.env.TINA_BRANCH ?? process.env.HEAD,
	token: process.env.TINA_TOKEN,
	media: {
		tina: {
			publicFolder: "public",
			mediaRoot: "uploads",
		},
	},
	build: {
		publicFolder: "public",
		outputFolder: "admin",
	},
	schema: {
		collections: [prices],
	},
});

export default config;
