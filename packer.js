// eslint-disable-next-line no-undef
const AdmZip = require('adm-zip');
// eslint-disable-next-line no-undef
const fs = require('fs');

const dist = './packed';

async function createZipArchive() {
    const zip = new AdmZip();

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist);
    }

    const outputFile = './packed/index.zip';
    zip.addLocalFolder('./dist');
    zip.writeZip(outputFile);
    console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
