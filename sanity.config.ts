import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "Portfolio_Content_Studio",
  basePath: "/studio",
  title: "Portfolio Content Studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
