#!/bin/bash
if [[ -n "${URL}" ]]; then
    echo "updating url to ${URL}"
    sed -i "s#^url:.*#url: ${URL}#g" _config.yml
fi
bundle exec jekyll build