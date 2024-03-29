const project = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "titlePfProject",
      title: "Title of Project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "Link to Build",
      type: "url",
    },
  ],
};

export default project;
