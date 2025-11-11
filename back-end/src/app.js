const getDreams = require('./routes/dreamRoutes.js');
const {readFileSync , writeFileSync} = require('fs');

const dreams = readFileSync('./routes/dreamRoutes.js', 'utf8');
const writeDreams = writeFileSync('./routes/dream.js', `${dreams}`);


async function express() {
  const feelings = await getDreams;
  setTimeout(() => {
    console.log('Go last !')
  }, 1000);
  await console.log(feelings);
}

console.log(dreams);
console.log(writeDreams);

express();
