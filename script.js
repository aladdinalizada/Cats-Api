const catsAPI = "https://api.thecatapi.com/v1/breeds";
let row = document.querySelector(".row");
// Path: script.js
const getCatData = async () => {
  const response = await fetch(catsAPI);
  const data = await response.json();
  return data;
};
getCatData().then((data) => {
  data.forEach((elem) => {
    // elem.description = elem.description.substring(0, 100);
    row.innerHTML += `
    <div class="col-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="${
            elem.image.url
          }" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">
              ${elem.description.substring(0, 200)}
            </p>
            <a href="${
              elem.wikipedia_url
            }" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    `;
  });
});
