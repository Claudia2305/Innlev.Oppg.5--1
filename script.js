const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("The submit button is clicked");

  const submitMessage = document.createElement("p");
  submitMessage.textContent = "Thanks for submitting!";
  submitMessage.classList.add("submitMessage");
  console.log(submitMessage);

  const formElement = document.querySelector("#form");
  console.log(formElement);
  formElement.appendChild(submitMessage);
});

document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Forhindre standard skjema oppførsel
  const taskInput = document.getElementById('task-input');
  const taskValue = taskInput.value;
  addTask(taskValue);
  taskInput.value = ''; // Tøm input-feltet etter å ha lagt til oppgaven
});

function addTask(task) {
  const taskList = document.getElementById('task-list');
  const listItem = document.createElement('li');
  listItem.textContent = task;

  // Legg til slett-knapp
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Slett';
  deleteButton.onclick = function() {
      if (confirm("Er du sikker på at du vil slette dette gjøremålet?")) {
          if (listItem.classList.contains('completed')) {
              listItem.remove(); // Slett oppgaven hvis den er fullført
          } else {
              alert("Gjøremålet må være markert som fullført før det kan slettes.");
          }
      }
  };

  // Legg til fullført-knapp
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Fullført';
  completeButton.onclick = function() {
      listItem.classList.toggle('completed'); // Toggle fullført status
  };

  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}
