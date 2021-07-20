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
        <td title="start"><time>{{ price.start }}</time></td>
        <td title="end"><time>{{ price.end }}</time></td>
        <td title="price">£{{ price.price }}</td>
    </tr>
{% endfor %}
</table>