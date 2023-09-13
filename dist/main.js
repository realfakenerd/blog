import extract from "@aurios/md-data";
import { closeSync, openSync, writeFileSync } from "fs";
import { resolve } from "path";
const rootDir = resolve("./");
const srcDir = resolve(rootDir, "posts");
const article = resolve(rootDir, "articles.json");
const jsons = await extract(rootDir, srcDir, {
    omitContent: true,
});
function writeFile(path) {
    const file = openSync(path, "w+");
    writeFileSync(file, JSON.stringify(jsons));
    closeSync(file);
}
writeFile(article);
