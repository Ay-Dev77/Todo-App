const createButton = document.querySelector(".create-button");
const app = document.querySelector(".app");

// Ajouter un gestionnaire d'événements au bouton de création une seule fois
createButton.addEventListener("click", () => {
  createTask();
});

function getInputValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  let taskName = document.querySelector("#name").value;
  if (taskName === "") {
    alert("Veillez entrez un nom pour votre tâche !!");
    cardTask.remove();
  }
  return taskName;
}

function createTask() {
  // Créer un nouvel élément cardTask à chaque appel de la fonction
  let cardTask = document.createElement("div");
  cardTask.className = "card-task";

  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  let delButtonContent = document.createElement("h4");
  delButtonContent.innerText = "Delete";
  delButtonContent.style.margin = "0px";
  deleteButton.appendChild(delButtonContent);
  cardTask.appendChild(deleteButton);

  let cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.innerText = getInputValue();
  cardTask.appendChild(cardTitle);

  let cardChecker = document.createElement("input");
  cardChecker.type = "checkbox";
  cardTask.appendChild(cardChecker);

  app.appendChild(cardTask);
  document.querySelector("#name").value = "";

  // Ajouter un gestionnaire d'événement pour barrer le titre quand la case est cochée
  cardChecker.addEventListener("click", () => {
    if (cardChecker.checked) {
      cardTitle.style.textDecoration = "line-through";
    } else {
      cardTitle.style.textDecoration = "none";
    }
  });

  deleteButton.addEventListener("click", () => {
    cardTask.remove();
  });
}
