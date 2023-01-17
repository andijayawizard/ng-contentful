import * as Contentful from "contentful";

export interface BlogFields {
  title?: Contentful.EntryFields.Symbol
  description?: Contentful.EntryFields.Text
}
export type Blog = Contentful.Entry<BlogFields>