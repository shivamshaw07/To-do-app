const inputbox = document.querySelector("#inputBox");
const listContainer = document.querySelector("#listContainer");

function addTask(){
    if(inputbox.value === ''){
        alert("You must fill something");
    }
    else{
        let listitem = document.createElement("li");
        listitem.innerHTML = inputbox.value;
        listContainer.appendChild(listitem);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        listitem.appendChild(cross);
    }
    inputbox.value = '';
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        console.log("hii");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ 
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();