const items = document.querySelector('.items');
const itemAdd = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
        <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item_divider"></div>`;
  id++;
  return itemRow;
}

itemAdd.addEventListener('click',()=>{
  console.log('dfdf');
  onAdd();
});

input.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
      onAdd();
  }
});

items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if (id) {     // event.target에 ID가 있다면 실행해라 //`.item_row[data-id="${id}"]`
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
