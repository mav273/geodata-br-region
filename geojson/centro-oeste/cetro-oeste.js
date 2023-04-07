const fs = require("fs");
const br = require("../geojs-brasil-mun.json");

const df = require("./geojs-53-mun.json");
const go = require("./geojs-52-mun.json");
const mt = require("./geojs-51-mun.json");
const ms = require("./geojs-50-mun.json");

// Região por cidade
const estados = [df, go, mt, ms];
const centro_oeste = {
  type: "FeatureCollection",
  features: [],
};

for (estado of estados) {
  for (cidade of estado.features) {
    centro_oeste.features.push(cidade);
  }
}

const json = JSON.stringify(centro_oeste);
fs.writeFile(
  "./geojson/centro-oeste/geojs-centrooeste-cidade-mun.json",
  json,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);

// Região por estado
const centro_oeste_estado = {
  type: "FeatureCollection",
  features: [],
};

br.features.filter((x) => {
  if (["df", "go", "mt", "ms"].includes(x.properties.sigla.toLowerCase())) {
    centro_oeste_estado.features.push(x);
  }
});

const json_estado = JSON.stringify(centro_oeste_estado);
fs.writeFile(
  "./geojson/centro-oeste/geojs-centrooeste-estado-mun.json",
  json_estado,
  (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado!");
  }
);
