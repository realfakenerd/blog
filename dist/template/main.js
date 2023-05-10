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
    if (err)
        throw err;
    writeFile(article, (input => {
        const $string = stringify.string;
        const $join = stringify.join;
        const $io1 = input => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return true;
            return true;
        });
        const $so0 = input => `{${undefined === input.content ? "" : `"content":${undefined !== input.content ? $string(input.content) : undefined},`}"fm":${$so1(input.fm)},"relativePath":${$string(input.relativePath)},"relativeDir":${$string(input.relativeDir)},"filename":${$string(input.filename)},"slug":${$string(input.slug)},"id":${$string(input.id)}}`;
        const $so1 = input => `{${Object.entries(input).map(([key, value]) => { if (undefined === value)
            return ""; return `${JSON.stringify(key)}:${undefined !== value ? JSON.stringify(value) : undefined}`; }).filter(str => "" !== str).join(",")}}`;
        return `[${input.map(elem => $so0(elem)).join(",")}]`;
    })(jsons), "utf8", (err) => {
        if (err)
            throw err;
    });
});
