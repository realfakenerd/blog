import extract from "@aurios/md-data";
import { closeSync, openSync, writeFileSync } from "fs";
import { resolve } from "path";

interface FM {
  title: string;
  description: string;
  data: Date;
  image: string;
  categories: string[];
  published: boolean;
}

const rootDir = resolve("./");
const srcDir = resolve(rootDir, "posts");
const article = resolve(rootDir, "articles.json");

const jsons = await extract<FM>(rootDir, srcDir, {
  omitContent: true,
});

function writeFile(path: string) {
  const file = openSync(path, "w+");

  writeFileSync(file, JSON.stringify(jsons));

  closeSync(file);
}

writeFile(article);
