#!/bin/bash
echo "Deploy prime url: ${DEPLOY_PRIME_URL}"
if [ "${CONTEXT}" == "production" ]; then
    if [[ -n "${URL}" ]]; then
        echo "updating url to ${URL}";
        sed -i "s#^url:.*#url: ${URL}#g" _config.yml;
    fi
else
    if [[ -n "${DEPLOY_PRIME_URL}" ]]; then
        echo "updating url to ${DEPLOY_PRIME_URL}";
        sed -i "s#^url:.*#url: ${DEPLOY_PRIME_URL}#g" _config.yml;
    fi
fi

if [[ -n "${BRANCH}" ]]; then
    echo "updating branch to '${BRANCH}'";
    sed -i "s#^branch:.*#branch: ${BRANCH}#g" _config.yml;
fi
bundle exec jekyll build;