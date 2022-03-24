export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "623c818ed24d3d7d26ccae07",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-khvia7ft",
                  apiId: "62abe003-a50b-49f5-ac1c-11c5810d192d",
                },
                {
                  buildHookId: "623c818f19b2c304e6b03152",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8187d4eu",
                  apiId: "61bb4cb5-2896-4316-adce-dcb59270e75e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/AshleighRefresh/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8187d4eu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
