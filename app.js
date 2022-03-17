"use script"
const box = document.querySelector('.box'),
btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(box.getBoundingClientRect().width);


btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
    if(box.scrollTop > 20){
        console.log('Hi');
    }
})
