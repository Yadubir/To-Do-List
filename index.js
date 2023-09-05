const inputBox = document.getElementById("input-box");
const  listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '' ;      /* to clear the input feild after adding the task */
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    },false);
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);             /* whatever content will be there in listContainer will be get stored in the local storage with the name 'data' */
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();