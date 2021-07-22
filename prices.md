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
{% for price_hash in site.data.prices %}
{% assign price = price_hash[1] %}
    <tr>
        <td title="start"><time>{{ price.start | date: "%d %b %Y" }}</time></td>
        <td title="end"><time>{{ price.end | date: "%d %b %Y" }}</time></td>
        <td title="price">{{ price.price | times: 100 | money: "GBP" }}</td>
    </tr>
{% endfor %}
</table>