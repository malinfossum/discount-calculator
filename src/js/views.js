const app = document.getElementById("app");

let price = "";
let discount = "";
let output = "";

updateView();
function updateView() {
	app.innerHTML = /*HTML*/ `
    <h1>Discount Calculator</h1>

    <section>
      <label for="setPrice">Price:</label>
      <input onchange="setPrice(this.value)" id="setPrice" type="number" autocomplete="off" value="${price}">

      <br><br>

      <label for="setDiscount">Discount:</label>
      <input onchange="setDiscount(this.value)" id="setDiscount" type="number" autocomplete="off" value="${discount}">

      <br><br>

      <button onclick="calculate()">Calculate</button>

      <br>

      <p>New price: ${output} kr</p>
    </section>
  `;
}
