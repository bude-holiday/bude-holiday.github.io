---
layout: page
title: Prices
permalink: /prices/
---

<table>
    <tr>
        <th>Start</th>
        <th>End</th>
        <th>Price</th>
    </tr>
{% assign prices = site.data.prices.prices%}
{% for price in prices %}
    <tr>
        <td title="start"><time>{{ price.start | date: "%d %b %Y" }}</time></td>
        <td title="end"><time>{{ price.end | date: "%d %b %Y" }}</time></td>
        <td title="price">{{ price.price | times: 100 | money: "GBP" | remove: ".00"}}</td>
    </tr>
{% endfor %}
</table>