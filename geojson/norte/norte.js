const fs = require("fs");
const br = require("../geojs-brasil-mun.json");

const ac = require("./geojs-12-mun.json");
const am = require("./geojs-13-mun.json");
const ap = require("./geojs-16-mun.json");
const pa = require("./geojs-15-mun.json");
const ro = require("./geojs-11-mun.json");
const rr = require("./geojs-14-mun.json");
const to = require("./geojs-17-mun.json");

// Região por cidade
const estados = [ac, am, ap, pa, ro, rr, to];
const norte = {
  type: "FeatureCollection",
  features: [],
};

for (estado of estados) {
  for (cidade of estado.features) {
    norte.features.push(cidade);
  }
}

const json = JSON.stringify(norte);
fs.writeFile("./geojson/norte/geojs-norte-cidade-mun.json", json, (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});

// Região por estado
const norte_estados = {
  type: "FeatureCollection",
  features: [],
};

br.features.filter((x) => {
  if (
    ["ac", "am", "ap", "pa", "ro", "rr", "to"].includes(
      x.properties.sigla.toLowerCase()
    )
  ) {
    norte_estados.features.push(x);
  }
});

const json_estado = JSON.stringify(norte_estados);
fs.writeFile(
  "./geojson/norte/geojs-norte-estado-mun.json",
  json_estado,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);
