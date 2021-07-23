#!/bin/bash
if [[ -n "${URL}" ]]; then
    echo "updating url to ${URL}";
    sed -i "s#^url:.*#url: ${URL}#g" _config.yml;
fi
if [[ -n "${BRANCH}" ]]; then
    echo "updated branch to ${BRANCH}";
    sed -i "s#^branch:.*#branch: ${BRANCH}#g" _config.yml;
fi
bundle exec jekyll build;