const fs = require("fs");
const br = require("../geojs-brasil-mun.json");

const pr = require("./geojs-41-mun.json");
const rs = require("./geojs-43-mun.json");
const sc = require("./geojs-42-mun.json");

// Região por cidade
const estados = [pr, rs, sc];
const sul = {
  type: "FeatureCollection",
  features: [],
};

for (estado of estados) {
  for (cidade of estado.features) {
    sul.features.push(cidade);
  }
}

const json_cidade = JSON.stringify(sul);
fs.writeFile("./geojson/sul/geojs-sul-cidade-mun.json", json_cidade, (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});

// Região por estado
const sul_estados = {
  type: "FeatureCollection",
  features: [],
};

br.features.filter((x) => {
  if (["pr", "rs", "sc"].includes(x.properties.sigla.toLowerCase())) {
    sul_estados.features.push(x);
  }
});

const json_estado = JSON.stringify(sul_estados);
fs.writeFile("./geojson/sul/geojs-sul-estado-mun.json", json_estado, (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});
