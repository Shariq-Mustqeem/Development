const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collectionTask = document.querySelector(".collection");
const clearTasks = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInputValue = taskInput.value;
  const deleteHTML = `<a class="delete-item secondary-content">
  <i class="fa fa-remove"></i>
  </a>`;

  const liCreate = document.createElement("li");
  liCreate.className = "collection-item";
  console.log(liCreate, "asdas");

  liCreate.innerHTML += `${taskInputValue} ${deleteHTML}`;
  collectionTask.append(liCreate);
  taskInput.value = "";
});

collectionTask.addEventListener("click", function (e) {
  e.preventDefault();
  const currentElement = e.target;
  if (currentElement.className === "fa fa-remove") {
    currentElement.parentElement.parentElement.remove();
  }
});

clearTasks.addEventListener("click", function (e) {
  e.preventDefault();
  collectionTask.innerHTML = "";
});

filter.addEventListener("keyup", function (e) {
  const currentElemet = e.target;
  const filterInputfeild = currentElemet.value.toLowerCase();
  const allCollectionItems = document.querySelectorAll(".collection-item");
  allCollectionItems.forEach(function (singleSearch) {
    if (singleSearch.innerText.toLowerCase().indexOf(filterInputfeild) === -1) {
      singleSearch.style.display = "none";
    } else {
      singleSearch.style.display = "block";
    }
  });
});
