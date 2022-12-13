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
    // console.log(elem.image.url);
    // console.log(elem.name);
    // console.log(elem.description);
    // console.log(elem.wikipedia_url);
    row.innerHTML += `
    <div class="col-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" src="${elem.image.url}" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">
              ${elem.description}
            </p>
            <a href="${elem.wikipedia_url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    `;
  });
});
