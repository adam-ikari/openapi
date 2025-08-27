import converter from "widdershins";
import yaml from "js-yaml";
import fs from "fs";
import path from "path";
import * as prettier from "prettier";

const OPENAPI_PATH = "output/schema/openapi.yaml";
const OUTPUT_PATH = "output/doc/md/openapi.md";

const apiObj = yaml.load(fs.readFileSync(OPENAPI_PATH, "utf8"));

let options = {}; // defaults shown
options.codeSamples = true;
options.httpsnippet = false;
options.language_tabs = [
  { http: "HTTP" },
  { javascript: "JavaScript" },
  { python: "Python" },
];
// options.language_clients = [];
// options.loadedFrom = sourceUrl; // only needed if input document is relative
options.user_templates = "./templates/openapi3";
// options.templateCallback = function (templateName, stage, data) {
//   return data;
// };
options.theme = "darkula";
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = [];
options.shallowSchemas = false;
options.tocSummary = true;
options.headings = 2;
options.yaml = true;
//options.resolve = false;
//options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document
converter
  .convert(apiObj, options)
  .then(async (str) => {
    // str contains the converted markdown
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(
      OUTPUT_PATH,
      await prettier.format(str, { semi: false, parser: "markdown" })
    );
  })
  .catch((err) => {
    console.error(err);
  });
