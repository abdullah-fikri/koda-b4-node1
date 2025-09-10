const fs = require('node:fs');
const path = require('node:path');

const baseFolder = 'musik';

function move(musik) {
  musik.forEach((item) => {
    const [artis] = item.split(' - '); //[0]
    const file = path.join(baseFolder, artis);

    if (!fs.existsSync(file)) {
      fs.mkdirSync(file, { recursive: true});
    }
  });

  musik.forEach((item)=>{
    const artisFinal = item.split(' - ')[0];
      fs.rename(`./musik/${item}`, `./musik/${artisFinal}/${item}`, (err) => {
        if (err) throw err;
      });
  });
}

module.exports = {
    move,
};

