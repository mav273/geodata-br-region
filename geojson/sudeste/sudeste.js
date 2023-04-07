const fs = require("fs");
const br = require("../geojs-brasil-mun.json");

const es = require("./geojs-32-mun.json");
const mg = require("./geojs-31-mun.json");
const rj = require("./geojs-33-mun.json");
const sp = require("./geojs-35-mun.json");

// Região por cidade
const estados = [es, mg, rj, sp];
const sudeste = {
  type: "FeatureCollection",
  features: [],
};

for (estado of estados) {
  for (cidade of estado.features) {
    sudeste.features.push(cidade);
  }
}

const json = JSON.stringify(sudeste);
fs.writeFile("./geojson/sudeste/geojs-sudeste-cidade-mun.json", json, (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});

// Região por estado
const sudeste_estados = {
  type: "FeatureCollection",
  features: [],
};

br.features.filter((x) => {
  if (["es", "mg", "rj", "sp"].includes(x.properties.sigla.toLowerCase())) {
    sudeste_estados.features.push(x);
  }
});

const json_estado = JSON.stringify(sudeste_estados);
fs.writeFile(
  "./geojson/sudeste/geojs-sul-estado-mun.json",
  json_estado,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);
