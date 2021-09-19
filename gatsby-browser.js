const React = require("react");

/** @type {import("gatsby").GatsbyBrowser["wrapPageElement"]} */
exports.wrapPageElement = ({ element, props }) => {
  return <>{element}</>;
};
