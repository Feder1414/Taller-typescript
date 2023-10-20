import { Serie } from './Serie.js';
import { series } from './data.js';
let tbody = document.getElementById('tbody-series')!;
let promedio_temporadas: number = 0;


function cargar_datos(){
    tbody.innerHTML = '';
    series.forEach((serie) => {
        let row: HTMLElement = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td><a href="${serie.vinculo}">${serie.nombre}</a></td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        row.addEventListener('click', () => cargar_carta(serie));
        row.className = "table-secondary";
        tbody.appendChild(row);
        promedio_temporadas += serie.temporadas;
    });
    promedio_temporadas_series();
}

function cargar_carta(serie: Serie){
    let columna_carta: HTMLElement = document.getElementById('carta-serie')!;
    columna_carta.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.imagen}" class="card-img-top" alt="..." referrerpolicy="no-referrer">
            <div class="card-body">
                <h5 class="card-title">${serie.nombre}</h5>
                <p class="card-text">${serie.descripcion}</p>
                <a href="${serie.vinculo}" class="card-link">${serie.vinculo}</a>
            </div>
        </div>
    `;
}

function promedio_temporadas_series(){
    promedio_temporadas = promedio_temporadas / series.length;
    let promedio: HTMLElement = document.createElement('tr');
    promedio.className = "table-light";
    promedio.innerHTML = `<td colspan = "4">${"Seasons average: " + promedio_temporadas.toString()}</>`;
    tbody.appendChild(promedio);

    
}

cargar_datos();