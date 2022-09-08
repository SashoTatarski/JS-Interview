document.querySelector('#root').innerHTML = `
  <input type="text" />
  <div class="data"></div>
`;

function render(data) {
  document.querySelector('.data').innerHTML = data;
}
function isNumber(value) {
  return Number.isInteger(value);
}
document.querySelector('input').addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    const v = +e.target.value;
    render(isNumber(v));
  }
});