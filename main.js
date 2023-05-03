import extract from "extract-md-data";
import { resolve } from "path";
import { writeFile, readFile } from "fs";

const rootDir = resolve("./");
const srcDir = resolve(rootDir, "posts");
const article = resolve(rootDir, "articles.json");

const jsons = extract(rootDir, srcDir, {
  omitContent: true,
});

readFile(article, "utf8", (err) => {
  if (err) throw err;
  writeFile(article, JSON.stringify(jsons, null, 2), "utf8", (err) => {
    if (err) throw err;
  });
});
