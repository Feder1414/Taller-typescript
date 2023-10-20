import { series } from './data.js';
var tbody = document.getElementById('tbody-series');
var promedio_temporadas = 0;
function cargar_datos() {
    tbody.innerHTML = '';
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td><a href=\"").concat(serie.vinculo, "\">").concat(serie.nombre, "</a></td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        row.addEventListener('click', function () { return cargar_carta(serie); });
        row.className = "table-secondary";
        tbody.appendChild(row);
        promedio_temporadas += serie.temporadas;
    });
    promedio_temporadas_series();
}
function cargar_carta(serie) {
    var columna_carta = document.getElementById('carta-serie');
    columna_carta.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"...\" referrerpolicy=\"no-referrer\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n                <p class=\"card-text\">").concat(serie.descripcion, "</p>\n                <a href=\"").concat(serie.vinculo, "\" class=\"card-link\">").concat(serie.vinculo, "</a>\n            </div>\n        </div>\n    ");
}
function promedio_temporadas_series() {
    promedio_temporadas = promedio_temporadas / series.length;
    var promedio = document.createElement('tr');
    promedio.className = "table-light";
    promedio.innerHTML = "<td colspan = \"4\">".concat("Seasons average: " + promedio_temporadas.toString(), "</>");
    tbody.appendChild(promedio);
}
cargar_datos();
