const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e3bb94605fmsh7d00206fddd0324p1caffejsn4c7941be5bed",
    "x-rapidapi-host": "moviesdatabase.p.rapidapi.com ?genre=Drama",
  },
};

fetch("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?genre=Action&limit=50", options)
  .then((response) => response.json())
  .then((response) => {
    for (let i of response.results) {
      if (i.primaryImage !== null) {
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

