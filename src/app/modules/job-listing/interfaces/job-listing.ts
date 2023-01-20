import * as Contentful from "contentful";
import * as CFRichTextTypes from "@contentful/rich-text-types";
// import * as rich from "@contentful/rich-text-html-renderer";

export interface JobListing {
  role?: Contentful.EntryFields.Symbol,
  description?: Contentful.EntryFields.Text,
  howToApply?: CFRichTextTypes.Block | CFRichTextTypes.Inline,
  organization?: Contentful.EntryFields.Symbol,
  date?: Contentful.EntryFields.Date,
  skills?: Contentful.EntryFields.Symbol
}
// export type JobListing = Contentful.Entry<JobListingFields>