// Compiled using marko@4.23.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/canary-tasks$1.0.0/app/views/tasks/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head></head><body><header class=cabecalhoPrincipal><!DOCTYPE html>\r\n<!-- Created By CodingNepal -->\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <!-- Somehow I got an error, so I comment the title, just uncomment to show -->\r\n  <title>Canary Tasks</title>\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/bootstrap.min.css\" />\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/fontawesome.min.css\" />\r\n  <link rel=\"stylesheet\" href=\"/estatico/css/canary-tasks.css\">\r\n  <link href = \"https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css\"\r\n  rel = \"stylesheet\">\r\n<script src = \"https://code.jquery.com/jquery-1.10.2.js\"></script>\r\n<script src = \"https://code.jquery.com/ui/1.10.4/jquery-ui.js\"></script>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <script src=\"https://kit.fontawesome.com/a076d05399.js\"></script>\r\n</head>\r\n\r\n  <nav>\r\n    <div class=\"menu-icon\">\r\n      <span class=\"fas fa-bars\"></span></div>\r\n    <div class=\"logo\">\r\n      Canary Tasks</div>\r\n    <div class=\"nav-items\">\r\n      <li><a href=\"/\">Home</a></li>\r\n      <li><a href=\"/tasks/form\">Novo</a></li>\r\n      <li><a href=\"/tasks\">Serviços</a></li>\r\n      <li><a href=\"#\">Contact</a></li>\r\n      <li><a href=\"#\">Feedback</a></li>\r\n    </div>\r\n  </nav>\r\n  <script>\r\n    const menuBtn = document.querySelector(\".menu-icon span\");\r\n    const searchBtn = document.querySelector(\".search-icon\");\r\n    const cancelBtn = document.querySelector(\".cancel-icon\");\r\n    const items = document.querySelector(\".nav-items\");\r\n    const form = document.querySelector(\"form\");\r\n    menuBtn.onclick = () => {\r\n      items.classList.add(\"active\");\r\n      menuBtn.classList.add(\"hide\");\r\n      searchBtn.classList.add(\"hide\");\r\n      cancelBtn.classList.add(\"show\");\r\n    }\r\n    cancelBtn.onclick = () => {\r\n      items.classList.remove(\"active\");\r\n      menuBtn.classList.remove(\"hide\");\r\n      searchBtn.classList.remove(\"hide\");\r\n      cancelBtn.classList.remove(\"show\");\r\n      form.classList.remove(\"active\");\r\n      cancelBtn.style.color = \"#ff3d00\";\r\n    }\r\n    searchBtn.onclick = () => {\r\n      form.classList.add(\"active\");\r\n      searchBtn.classList.add(\"hide\");\r\n      cancelBtn.classList.add(\"show\");\r\n    }\r\n  </script>\r\n\r\n\r\n</html></header><main class=conteudoPrincipal><div class=container><h1>Novo serviço</h1>");

  if (data.errosValidacao) {
    out.w("<div>");

    var $for$0 = 0;

    marko_forOf(data.errosValidacao, function(erro) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(erro.param) +
        " - " +
        marko_escapeXml(erro.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=/tasks/form method=post>");

  if (data.task.id) {
    out.w("<div><input type=hidden name=_method value=PUT><input type=hidden name=id" +
      marko_attr("value", data.task.id) +
      "></div>");
  }

  out.w("<div class=form-group><label for=titulo>Titulo:</label><input type=text id=titulo name=titulo" +
    marko_attr("value", data.task.titulo) +
    " placeholder=\"coloque o titulo\" class=form-control></div><div class=form-group><label for=titulo>Cliente:</label><input type=text id=cliente name=cliente" +
    marko_attr("value", data.task.cliente) +
    " placeholder=\"coloque o cliente\" class=form-control></div><div class=row><div class=\"form-group col\"><label for=tipo>Tipo:</label><input type=text id=tipo name=tipo" +
    marko_attr("value", data.task.tipo) +
    " placeholder=\"coloque o tipo\" class=form-control></div><div class=\"form-group col\"><label for=altura>Medidas:</label><div class=row><div class=col><input type=number class=form-control id=altura name=altura placeholder=Altura..." +
    marko_attr("value", data.task.altura) +
    "></div><label class=form-group>x</label><div class=col><input type=number class=form-control id=largura name=largura placeholder=Largura..." +
    marko_attr("value", data.task.largura) +
    "></div><div class=col><select class=form-control id=unid name=unid placeholder=\"Selecione a unidade de medida\">");

  if (data.task.unid == "MM") {
    out.w("<option selected>MM</option>");
  } else {
    out.w("<option>MM</option>");
  }

  if (data.task.unid == "CM") {
    out.w("<option selected>CM</option>");
  } else {
    out.w("<option>CM</option>");
  }

  if (data.task.unid == "M") {
    out.w("<option selected>M</option>");
  } else {
    out.w("<option>M</option>");
  }

  out.w("</select></div></div></div></div><div class=form-group><label for=descricao>Descrição:</label><textarea cols=20 rows=10 id=descricao name=descricao placeholder=\"fale sobre o serviço\" class=form-control>" +
    marko_escapeXml(data.task.descricao) +
    "</textarea></div><input type=submit value=Salvar class=\"btn btn-primary\"></form></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "43");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/canary-tasks$1.0.0/app/views/tasks/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
