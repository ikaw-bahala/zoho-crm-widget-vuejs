// eslint-disable-next-line no-undef
const AdmZip = require("adm-zip");
// eslint-disable-next-line no-undef
const fs = require("fs");

async function createZipArchive() {
  const zip = new AdmZip();

  if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
  }

  const outputFile = "./dist/app.zip";
  zip.addLocalFolder("./build");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
