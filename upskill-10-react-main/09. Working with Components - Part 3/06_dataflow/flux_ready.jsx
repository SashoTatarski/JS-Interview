document.querySelector('#root').innerHTML = `
  <input type="text" />
  <div class="data"></div>
`;

const store = {
  numbers: [],
  update(action) {
    if (isNumber(action)) {
      this.numbers.push(action);
    }
    render(this.numbers.join(','))
  }
}

const dispatcher = {
  dispatch(action) {
    store.update(action);
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
    dispatcher.dispatch(v);
  }
});