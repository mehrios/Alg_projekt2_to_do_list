const filter_icon=document.querySelector('.filter_icon');
const text_block=document.querySelector('.text_block');
const add_bt=document.querySelector('.add_bt');
let text_add = document.querySelector(".texts");
let input = document.querySelector('.text_input');   
let del_bt = document.querySelector('.delete_button');
let k=0;

function sort_inputs(a,b,d,u){
    let to_sort_el = [...text_block.children]; 
    text_block.innerHTML = "";
    to_sort_el=to_sort_el.sort((c,d) => c.querySelector("input").value > d.querySelector("input").value ? a : b);
    text_block.append(...to_sort_el);
    filter_icon.classList.replace(d,u);
}

add_bt.addEventListener("click", () => {
    text_add = document.createElement("div");
    text_add.setAttribute('class', 'texts');
    input = document.createElement('input');
    input.type = "text";
    input.setAttribute('class', 'text_input');
    del_bt = document.createElement('div');
    del_bt.setAttribute('class', 'delete_button');
    del_bt.addEventListener("click", (event) => {
        event.target.closest(".texts").remove();
    });
    text_add.append(input, del_bt);
    text_block.append(text_add);
});

del_bt.addEventListener("click", (event) => {
    event.target.closest(".texts").remove();
});

filter_icon.addEventListener("click", () => {
    let u="up";
    let d="down";
    k=k+1;
    if(k%2==1){
        sort_inputs(1,-1,d,u);
    }
    else{
        sort_inputs(-1,1,u,d);
    }
});