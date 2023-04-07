const fs = require("fs");
const br = require("../geojs-brasil-mun.json");

const ma = require("./geojs-21-mun.json");
const pi = require("./geojs-22-mun.json");
const ce = require("./geojs-23-mun.json");
const rn = require("./geojs-24-mun.json");
const pb = require("./geojs-25-mun.json");
const pe = require("./geojs-26-mun.json");
const al = require("./geojs-27-mun.json");
const se = require("./geojs-28-mun.json");
const ba = require("./geojs-29-mun.json");

// Região por cidade
const estados = [ma, pi, ce, rn, pb, pe, al, se, ba];
const nordeste = {
  type: "FeatureCollection",
  features: [],
};

for (estado of estados) {
  for (cidade of estado.features) {
    nordeste.features.push(cidade);
  }
}

const json_cidade = JSON.stringify(nordeste);
fs.writeFile(
  "./geojson/nordeste/geojs-nordeste-cidade-mun.json",
  json_cidade,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);

// Região por estado
const nordeste_estados = {
  type: "FeatureCollection",
  features: [],
};

br.features.filter((x) => {
  if (
    ["ma", "pi", "ce", "rn", "pb", "pe", "al", "se", "ba"].includes(
      x.properties.sigla.toLowerCase()
    )
  ) {
    nordeste_estados.features.push(x);
  }
});

const json_estado = JSON.stringify(nordeste_estados);
fs.writeFile(
  "./geojson/nordeste/geojs-nordeste-estado-mun.json",
  json_estado,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);
