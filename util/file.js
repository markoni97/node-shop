const fs = require('fs');

const checkFileExists = (file) => {
  return fs.promises
    .access(file, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

const getDataFromFile = async (file) => {
  let data = []
  const fileExists = await checkFileExists(file);
  if (fileExists) {
    try {
      const fileContent = await fs.promises.readFile(file);
      data = JSON.parse(fileContent);
    } catch (err) {
      console.log(err);
    }
  }
  return data;
};

exports.checkFileExists = checkFileExists;
exports.getDataFromFile = getDataFromFile;
