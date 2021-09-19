import CMS from "netlify-cms-app";

const dev = process.env.NODE_ENV === "development";

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: process.env.BRANCH || "master",
    },
    load_config_file: false,
    local_backend: dev,
    site_url: process.env.URL || dev ? "/" : "https://bude.holiday",
    media_folder: "src/images",
    media_folder_relative: true,
    collections: [
      {
        label: "Pages",
        name: "pages",
        folder: "src/pages",
        extension: "md",
        create: true,
        slug: "{{title}}",
        preview_path: "{{fields.permalink}}",
        fields: [
          {
            label: "Title",
            name: "title",
            widget: "string",
          },
          {
            label: "Link",
            name: "slug",
            widget: "string",
          },
          {
            label: "Body",
            name: "body",
            widget: "markdown",
          },
        ],
      },
    ],
  },
});
