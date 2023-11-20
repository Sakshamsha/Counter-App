const text = document.querySelector('#content');

// function increment(){
//     let value = parseInt(text.textContent);
//     value = value + 1;
//     text.textContent = value;
// }

// function decrement(){
//     let value = parseInt(text.textContent);
//     value = value - 1;
//     text.textContent = value;
// }

const increment = document.querySelector('#first');

increment.addEventListener('click',function (){
    let value = parseInt(text.textContent);
    value = value - 1;
    text.textContent = value;

});

const decrement = document.querySelector('#second');
decrement.addEventListener('click',function (){
    let value = parseInt(text.textContent);
    value = value + 1;
    text.textContent = value;

});
