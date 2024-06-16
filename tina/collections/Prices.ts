import { Collection } from "tinacms";

const prices: Collection = {
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
					type: "datetime",
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
						label: `${item?.startDate} - ${item?.endDate}`,
					}
				},

			}
		},
	],
	ui: {
		allowedActions: {
			create: false,
			delete: false,
		},
	},
};
export default prices;
