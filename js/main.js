let category = "Action";
let yearx = 2023;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e3bb94605fmsh7d00206fddd0324p1caffejsn4c7941be5bed",
    "x-rapidapi-host": "moviesdatabase.p.rapidapi.com ?genre=Drama",
  },
};

function find() {
  document.getElementById("principal").innerHTML = "";
  fetch(
    `https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?year=${yearx}&genre=${category}&limit=50`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      for (let i of response.results) {
        if (
          i.primaryImage !== null &&
          i.releaseYear !== null &&
          i.titleText !== null
        ) {
          let image_url = i.primaryImage.url;
          let year_published = i.releaseYear.year;
          let title = i.titleText.text;

          let card = `<img src="${image_url}" alt="" /><div class="data-peli"><div class="info-section"><p>${title}</p><p class="year">${year_published}</p></div></div>`;

          let div = document.createElement("div");
          div.classList.add("card");
          div.innerHTML = card;

          let principal = document.querySelector("#principal");
          principal.appendChild(div);
        }
      }
    })
    .catch((err) => console.error(err));
}


function categoryChange() {
  category = this.id
  find()
}

function yearChange() {
  yearx = this.id
  find()
}

let categories = document.querySelector("#categories");
for (const category of categories.children) {
  category.addEventListener("click", categoryChange);
}

let years = document.querySelector("#years");
for (const year of years.children) {
  year.addEventListener("click", yearChange);
}

find()