---
layout: page
title: Prices
permalink: /prices
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
        <td><time datetime="{{ price.start | date: "%F" }}">{{ price.start | date: "%d %b %Y" }}</time></td>
        <td><time datetime="{{ price.end | date: "%F" }}">{{ price.end | date: "%d %b %Y" }}</time></td>
        <td>{{ price.price | times: 100 | money: "GBP" | remove: ".00"}}</td>
    </tr>
{% endfor %}
</table>

Long bookings