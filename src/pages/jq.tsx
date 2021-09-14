import * as glide from "../glide.next";

import jq from "jq-web";

export default glide.column(async (json, query) => {
  if (json.value === undefined) {
    return undefined;
  }
  if (query.value === undefined) {
    return json.value;
  }
  const val = jq.json(JSON.parse(json.value), query.value);
  return typeof val === "object" || Array.isArray(val)
    ? JSON.stringify(val)
    : val;
});
