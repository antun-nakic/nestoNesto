import {
  readFileSync,
  readFile,
  promises,
  appendFile,
  open,
  writeFile,
} from "fs";

appendFile("./fileNaKojiNadodajemo.txt", "Nadodajem sadržaj\n", () => {});

open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  /*
  fs.write(
    file, buffer, offset, length, position, 
     (err, bytes, buffer) => {
   })
   */
  console.log("Saved!");
});

writeFile("./fileNaKojiNadodajemo.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//sinkono učitavanje file
const txt = readFileSync("./nasText.txt", "utf8");
console.log(txt);

//asinkrono učitavanje file (ne blokirajuće)
readFile("./nasText.txt", "utf8", (err, result) => {
  console.log(result + "bez promisa");
});

const mojaFunkcija = async () => {
  let a = await promises.readFile("./nasText.txt", "utf8");
  console.log(a + "sa promisom");
};

mojaFunkcija();

/*
const odPromisaAwaitomDobivenRezultat = await promises.readFile(
  "./nasText.txt",
  "utf8"
);
console.log(odPromisaAwaitomDobivenRezultat + "sa promisom");
*/

console.log(
  "trebao bi biti zadnji da je sve sinkrono, ali mislim da baš i nije sve sinkrono"
);
