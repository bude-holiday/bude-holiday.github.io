---
title: Gallery
permalink: "/gallery/"
layout: page
---

<ul>
{% for post in site.categories.gallery %}
    <div>
        <a href="{{ post.url }}" title="{{ post.title }}">
            <h2>{{ post.title }}</h2>
            <img alt="{{ post.title }}" src="{{ post.image }}"/>
        </a>
        {{ post.excerpt }}
    </div>
{% endfor %}
</ul>
