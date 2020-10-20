// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/canary-tasks$1.0.0/app/views/tasks/arq/arq.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head></head><body><header class=cabecalhoPrincipal><!DOCTYPE html>\r\n<!-- Created By CodingNepal -->\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <!-- Somehow I got an error, so I comment the title, just uncomment to show -->\r\n  <title>Canary Tasks</title>\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\" />\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\" />\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/canary-tasks.css\">\r\n  <link href = \"https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css\"\r\n  rel = \"stylesheet\">\r\n<script src = \"https://code.jquery.com/jquery-1.10.2.js\"></script>\r\n<script src = \"https://code.jquery.com/ui/1.10.4/jquery-ui.js\"></script>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <script src=\"https://kit.fontawesome.com/a076d05399.js\"></script>\r\n</head>\r\n\r\n  <nav>\r\n    <div class=\"menu-icon\">\r\n      <span class=\"fas fa-bars\"></span></div>\r\n    <div class=\"logo\">\r\n      Canary Tasks</div>\r\n    <div class=\"nav-items\">\r\n      <li><a href=\"/\">Home</a></li>\r\n      <li><a href=\"/tasks/form\">Novo</a></li>\r\n      <li><a href=\"/tasks\">Serviços</a></li>\r\n      <li><a href=\"#\">Contact</a></li>\r\n      <li><a href=\"#\">Feedback</a></li>\r\n    </div>\r\n  </nav>\r\n  <script>\r\n    const menuBtn = document.querySelector(\".menu-icon span\");\r\n    const searchBtn = document.querySelector(\".search-icon\");\r\n    const cancelBtn = document.querySelector(\".cancel-icon\");\r\n    const items = document.querySelector(\".nav-items\");\r\n    const form = document.querySelector(\"form\");\r\n    menuBtn.onclick = () => {\r\n      items.classList.add(\"active\");\r\n      menuBtn.classList.add(\"hide\");\r\n      searchBtn.classList.add(\"hide\");\r\n      cancelBtn.classList.add(\"show\");\r\n    }\r\n    cancelBtn.onclick = () => {\r\n      items.classList.remove(\"active\");\r\n      menuBtn.classList.remove(\"hide\");\r\n      searchBtn.classList.remove(\"hide\");\r\n      cancelBtn.classList.remove(\"show\");\r\n      form.classList.remove(\"active\");\r\n      cancelBtn.style.color = \"#ff3d00\";\r\n    }\r\n    searchBtn.onclick = () => {\r\n      form.classList.add(\"active\");\r\n      searchBtn.classList.add(\"hide\");\r\n      cancelBtn.classList.add(\"show\");\r\n    }\r\n  </script>\r\n\r\n\r\n</html></header><main class=conteudoPrincipal><div class=container><h1>" +
    marko_escapeXml(data.task.titulo) +
    "</h1><h2>" +
    marko_escapeXml(data.task.cliente) +
    "</h2><form action=/tasks/arq/ok method=post enctype=multipart/form-data><div class=form-group><label for=file>Arquivo:</label><input type=hidden id=id name=id" +
    marko_attr("value", data.task.id) +
    "><input type=file id=file name=file class=form-control></div><input type=submit value=Salvar class=\"btn btn-primary\"></form></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  _preferred_script_location_tag({}, out);

  out.w("</body></html><s></s>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/canary-tasks$1.0.0/app/views/tasks/arq/arq.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
