let countTotal = 0;
let count = 0;
function updateView() {
    let html = '';
    html += /*HTML*/ `
<h1>Teller</h1>

<div class="ctButtons">
  <button onclick="calculate(-1)">-</button>
  <div>${countTotal}</div>
  <button onclick="calculate(1)">+</button>
</div>
`;
    document.getElementById('app').innerHTML = html;
}

function calculate(calc) {
    countTotal += calc;
    updateView();
}

updateView();