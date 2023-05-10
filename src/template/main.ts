import extract from "extract-md-data";
import { resolve } from "path";
import { writeFile, readFile } from "fs";
import { stringify } from "typia";

// interface FM {
//   title: string;
//   description: string;
//   data: Date;
//   image: string;
//   categories: string[];
//   published: boolean;
// }

const rootDir = resolve("./");
const srcDir = resolve(rootDir, "posts");
const article = resolve(rootDir, "articles.json");


const jsons = extract(rootDir, srcDir, {
  omitContent: true,
});

readFile(article, "utf8", (err) => {
  if (err) throw err;
  writeFile(article, stringify(jsons), "utf8", (err) => {
    if (err) throw err;
  });
})
