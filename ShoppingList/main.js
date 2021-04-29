'use strict';

const items = document.querySelector('.items');
const itemDelete = document.querySelector('.item_delete');
const itemAdd = document.querySelector('.footer_button');
const input = document.querySelector('.footer_input');

function onAdd(){
    const text = input.value;
    if(text ===''){
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬(텍스트 + 삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    // 4. 인풋을 초기화 한다.
    input.value='';
    input.focus();
}

function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const name = document.createElement('span');
    name.setAttribute('class','item_name');
    name.innerHTML = text;

    const itemDevider = document.createElement('div');
    itemDevider.setAttribute('class','item_divider');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');
    deleteBtn.innerHTML='<i class="far fa-trash-alt"></i>';
    deleteBtn.addEventListener('click',()=>{
        items.removeChild(itemRow);
    });

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDevider);
    return itemRow;
}

itemAdd.addEventListener('click',()=>{
    console.log('dfdf');
    onAdd();
});