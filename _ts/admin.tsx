import React from "react";
import CMS from "netlify-cms-app";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

CMS.init();

CMS.registerPreviewStyle("/assets/main.css");

const PricePreview = (props: PreviewTemplateComponentProps) => {
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
          const start = price.getIn(["data", "start"]);
          const end = price.getIn(["data", "end"]);
          const value = price.getIn(["data", "price"]);
          return (
            <tr key={`${start}-${end}`}>
              <td title="start">
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "medium",
                }).format(new Date(start))}
              </td>
              <td title="end">
                {new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "medium",
                }).format(new Date(end))}
              </td>
              <td title="price">
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                  maximumFractionDigits: 0,
                }).format(value)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
CMS.registerPreviewTemplate("prices", PricePreview);
