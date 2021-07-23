#!/bin/bash
echo "URL is: ${URL}";
if [[ -z "${URL}" ]]; then
    sed "s/^url:.*/url: ${URL}/g" _config.yml > _config.yml
fi
bundle exec jekyll build