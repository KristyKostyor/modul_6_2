
const container = document.createElement('div');
container.classList.add("container");

const input = document.createElement('input');
input.classList.add('one');

const par = document.createElement('p');
par.textContent='';
par.classList.add('two');


input.addEventListener('input', ()=> {
    
    input.timer=setTimeout(() => {
        par.textContent=input.value;
    }, 3000);
})




document.body.appendChild(container);
container.appendChild(input);
container.appendChild(par);

