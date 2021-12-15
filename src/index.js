import "./styles.css";

// 追加ボタン押下イベント
const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  const returnButton = document.createElement("button");
  returnButton.innerHTML = "戻す";

  completeButton.addEventListener("click", () => {
    deleteFromList("incomplete_list", deleteButton.parentNode.parentNode);
    addToCompletedList(inputText, returnButton);
  });

  deleteButton.addEventListener("click", () => {
    deleteFromList("incomplete_list", deleteButton.parentNode.parentNode);
  });

  returnButton.addEventListener("click", () => {
    deleteFromList("completed_list", returnButton.parentNode.parentNode);
    addToIncompleteList(inputText, completeButton, deleteButton);
  });

  addToIncompleteList(inputText, completeButton, deleteButton);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());

const deleteFromList = (listName, deleteTarget) => {
  document.getElementById(listName).removeChild(deleteTarget);
};

const addToIncompleteList = (inputText, completeButton, deleteButton) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const li = document.createElement("li");
  p.className = "list_item";

  p.innerHTML = inputText;
  div.className = "list_row";
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete_list").appendChild(li);
};

const addToCompletedList = (inputText, returnButton) => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const li = document.createElement("li");
  p.className = "list_item";

  p.innerHTML = inputText;
  div.className = "list_row";
  div.appendChild(p);
  div.appendChild(returnButton);
  li.appendChild(div);

  document.getElementById("completed_list").appendChild(li);
};
