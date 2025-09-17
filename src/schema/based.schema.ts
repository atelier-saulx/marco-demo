import type { Schema } from "@based/schema";
import { user } from "./user.js";

const schema: Schema = {
  locales: { en: {} },
  props: {
    filter: "string",
  },
  types: {
    user,
  },
};

export default schema;
