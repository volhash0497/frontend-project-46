import { readFileSync } from 'node:fs';
import * as path from 'path';
import yaml from 'js-yaml';

const extensions = {
    json: '.json',
    yml: '.yml',
    yaml: '.yaml'
}

const readAndParseFile = (filepath) => {
    const ext = path.extname(filepath);
    const fullPath = path.resolve(process.cwd(), filepath);
    const data = readFileSync(fullPath).toString();
    let parsedData;
    switch (ext) {
        case extensions.json:
            parsedData = JSON.parse(data);
            break;
        case extensions.yml:
            parsedData = yaml.load(data);
            break;
        case extensions.yaml:
            parsedData = yaml.load(data);
            break;
    }
        
        return parsedData;
}

const getFile = (path1, path2) => {
    const data1 = readAndParseFile(path1);
    const data2 = readAndParseFile(path2);
    return [data1, data2];
}

export default getFile;
