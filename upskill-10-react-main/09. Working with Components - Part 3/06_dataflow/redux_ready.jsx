document.querySelector('#root').innerHTML = `
  <input type="text" />
  <div class="data"></div>
`;

function reducer(current, action) {
  if (isNumber(action)) {
    return [...current, action];
  }
  return current;
}

const store = {
  numbers: [],
  dispatch(action) {
    this.numbers = reducer(this.numbers, action);
    render(this.numbers.join(', '));
  }
}

/*************************************************************************/

function render(data) {
  document.querySelector('.data').innerHTML = data;
}
function isNumber(value) {
  return Number.isInteger(value);
}
document.querySelector('input').addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    const v = +e.target.value;
    store.dispatch(v);
  }
});