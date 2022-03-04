const core = require('@actions/core');
const path = require('path');
const { promises: fs } = require('fs');

const main = async () => {
  console.log('main');
  // const readPath = core.getInput('read-path');
  // console.log('readPath', readPath);
  // const writePath = core.getInput('write-path');
  // console.log('writePath', writePath);
  // const fullPath = path.join(process.env.GITHUB_WORKSPACE, writePath);
  // console.log('fullPath', fullPath);

  // const merge = {};

  // const files = await fs.readdir(readPath, 'utf8');

  // for (const file of files) {
  //   const jsonFile = await fs.readFile(`${readPath}/${file}`, 'utf8');
  //   const json = JSON.parse(jsonFile.toString());
  //   console.log(file, json);

  //   Object.assign(merge, json);
  // }

  // await fs.writeFile(fullPath, JSON.stringify(merge));
};

main().catch((err) => core.setFailed(err.message));
