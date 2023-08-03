const  debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const container = document.createElement("div");
container.classList.add("container");

const input = document.createElement("input");
input.classList.add("one");

const par = document.createElement("p");
par.textContent = "";
par.classList.add("two");

const debouncedUpdate = debounce(() => {
  par.textContent = input.value;
}, 3000);

input.addEventListener("input", debouncedUpdate);

document.body.appendChild(container);
container.appendChild(input);
container.appendChild(par);
