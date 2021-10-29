function onPageLoaded() {
  const input = document.querySelector("input[type='text']"); // Присвоение INPUT-text элемента в переменную input
  console.log(input);
  const ul = document.querySelector("ul.todos"); // Присвоение UL(todos-класс) элемента в переменную ul
  console.log(ul);

  function createTodo() {
    const li = document.createElement("li"); //создание LI и присвоение в переменную li
  //  const textSpan = document.createElement("span"); //создание SPAN и присвоение в переменную textSPan
  // textSpan.classList.add("todo-text"); // добавление-создание класса у SPANа
    const newTodo = input.value; //Присвоение в переменную newTodo текст из формы инпут


    const deleteBtn = document.createElement("span"); //создание SPANа и присвоение в переменную deleteBtn
    deleteBtn.classList.add("todo-trash"); //добавление-создание класса у SPANа todo-trash
    const icon = document.createElement("i"); //создание <i> и присвоение в переменную "i"
    icon.classList.add("fas", "fa-times"); //добавление-создание класса "fas", "fa-trash-alt"
    deleteBtn.appendChild(icon); // Добавление icon-<i> элемента в дочерний span, <span> <i></i> </spawn>

    ul.appendChild(li).append(deleteBtn , newTodo); //создание 'li', добавление текста и иконки удалить
    input.value = ""; // Очищение-обнуление элемента INPUT-text
    jopa(); //Функция удаления to-do
  }

  //При нажатии на Энтер добовлять ТУДУ
  input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    //which возвращает числовой код клавиши нажатой клавиши
    if (keyPressed.which == keyEnter) {
      createTodo();
      jopa();
    }
  });

  //функция удаления туду дела

  function jopa() {
    let trashBtn = document.querySelectorAll(".todo-trash");
    for (let item of trashBtn) {
      item.addEventListener("click", function () {
        item.parentElement.remove();
        event.stopPropagation(); // stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.
      });
    }
  }
  loadTodos();
  jopa();

  function deleteTodo() {
    for (let span of spans) {
      span.addEventListener("click", function () {
        span.parentElement.remove();
        event.stopPropagation();
      });
    }
  }

  // ul.addEventListener("click" , ()=>alert("hei"));

  //Добавление ТУДУ по кнопки "Добавить"
  addButton.onclick = (event) => {
    createTodo();
  };

  //Чек лист
 // ul.addEventListener("click", (ev) => ev.target.classList.toggle("checked")); //Без проверки на ===LI
  ul.addEventListener("click" , function checkevent(params) {
    if (params.target.tagName === "LI") {
      params.target.classList.toggle("checked")
    }
  }
  )
  
  //        Сохранение на локальном компьютере используя API LocalStorage

  const saveBtn = document.querySelector(".save");
  saveBtn.addEventListener("click", () => {
    localStorage.setItem("todos", ul.innerHTML);
  });

  
  function loadTodos() {
    const data = localStorage.getItem("todos");
    const clearBtn = document.querySelector("button.clear");
    if (data) {
      ul.innerHTML = data;
    }

    clearBtn.addEventListener("click", () => {
      ul.innerHTML = "";
      localStorage.removeItem("todos", ul.innerHTML);
      
    });
    
  }

  // ...
}

document.addEventListener("DOMContentLoaded", onPageLoaded); //ждет загрузки страницы и выполняет функцию onPageLoaded
