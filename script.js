const output = document.getElementById("output");
window.addEventListener("load", () => {
  getData();
});
const api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
  let response = await fetch(api);
  let data = await response.json();
  data.map((data) => {
    const htmlpage = 
    `
    <img src="${data.img}" class="img">
    <div class="info-display">
    <h5>Name: ${data.portrayed}</h5>
    <hr>
    <h6>Actor Name: ${data.name}</h6>
    </div>
    `;
    let results = document.createElement("div");
    results.classList.add("col-md-3", "mb-3", "img-info");
    results.innerHTML = htmlpage;
    output.appendChild(results);
  });
}