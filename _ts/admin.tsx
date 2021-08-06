import React from "react";
import CMS from "netlify-cms-app";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

CMS.init();

CMS.registerPreviewStyle("/assets/main.css");

const formatDate = (value: string | number | Date) =>
  new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date(value));

const formatMoney = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
}).format;

CMS.registerPreviewTemplate("prices", (props: PreviewTemplateComponentProps) => {
  const prices = props.widgetsFor("prices");
  return (
    <table>
      <thead>
        <tr>
          <th>Start</th>
          <th>End</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price) => {
          const start: string = price.getIn(["data", "start"]);
          const end: string = price.getIn(["data", "end"]);
          const value: number = price.getIn(["data", "price"]);
          return (
            <tr key={`${start}-${end}`}>
              <td title="start">{formatDate(start)}</td>
              <td title="end">{formatDate(end)}</td>
              <td title="price">{formatMoney(value)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});
