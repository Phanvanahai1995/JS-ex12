"use strict";
window.addEventListener("load", () => {
  const inputEl = document.querySelector(".form-input");
  const form = document.querySelector(".form");
  const action = document.querySelector(".actions");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputEl.value.trim() === "") {
      alert("Vui lòng nhập dữ liệu!");
      return;
    }

    const inner = document.createElement("div");
    inner.classList.add("inner");
    action.appendChild(inner);

    const value = document.createElement("span");
    value.innerHTML = inputEl.value;
    value.classList.add("value");
    inner.appendChild(value);

    const innerIcon = document.createElement("div");
    innerIcon.classList.add("inner-icon");
    inner.appendChild(innerIcon);

    const edit = document.createElement("img");
    edit.setAttribute("src", "./assets/img/pen.svg");
    edit.classList.add("edit");
    innerIcon.appendChild(edit);

    const clear = document.createElement("img");
    clear.setAttribute("src", "./assets/img/clear.svg");
    clear.classList.add("delete");
    innerIcon.appendChild(clear);

    inputEl.value = "";

    clear.addEventListener("click", function () {
      action.removeChild(inner);
    });

    edit.addEventListener("click", function (e) {
      const formChild = document.createElement("form");
      formChild.classList.add("form");
      inner.insertAdjacentElement("beforebegin", formChild);

      const inputChild = document.createElement("input");
      inputChild.setAttribute("placeholder", "Use Task");
      inputChild.setAttribute("type", "text");
      inputChild.classList.add("form-input");
      inputChild.value = value.innerText;

      formChild.appendChild(inputChild);

      const btnChild = document.createElement("button");
      btnChild.classList.add("btn");
      btnChild.innerHTML = "Add task";
      formChild.appendChild(btnChild);

      inner.classList.add("hidden");

      formChild.addEventListener("submit", function (e) {
        e.preventDefault();
        value.innerHTML = inputChild.value;
        value.style.textDecoration = "line-through";
        inner.classList.remove("hidden");
        this.remove();
      });
    });
  });
});
