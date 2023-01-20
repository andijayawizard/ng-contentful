import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeJobListingFields {
  role?: Contentful.EntryFields.Symbol
  description?: Contentful.EntryFields.Text
  howToApply?: CFRichTextTypes.Block | CFRichTextTypes.Inline
  organization?: Contentful.EntryFields.Symbol
  date?: Contentful.EntryFields.Date
  skills?: Contentful.EntryFields.Symbol
}
export type TypeJobListing = Contentful.Entry<TypeJobListingFields>
