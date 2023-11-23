// JavaScript Logic:

// Implement the JavaScript logic to add, delete, and mark tasks as completed.
// Write a function to add a new task to the list when the user clicks the "Add Task" button.
// Write a function to delete a task when the user clicks the "Delete" button next to the task.
// Write a function to mark a task as completed when the user checks the checkbox next to the task.
// User Interaction:

// Allow users to input tasks into the input field.
// Display tasks in an organized manner with options to mark them as completed or delete them.
// Provide feedback to users when tasks are added, deleted, or marked as completed.

const  button=document.querySelector('button');
button.addEventListener('click',addTask);
function addTask(){
    const inputBox=document.getElementById('taskInput');
    const taskUl=document.getElementById('taskList');
    if(inputBox.value !== ""){
        const li=document.createElement('li');
        li.innerHTML=`
        
        <span>${inputBox.value}</span>
        <button onclick=deleteTask(this)>Delete</button>
        <input type="checkbox" onchange=completeTask(this) name="" id="">

        `
        taskUl.appendChild(li)
        inputBox.value="";


    }
}


function deleteTask(button){
    const li=button.parentElement;
    li.remove();
}

function completeTask(input){
    const li=input.parentElement;
    const span = li.querySelector('span');
    if(input.checked){
        // span.style.textDecoration="line-through";
        span.innerText=span.innerText + " @completed";
    }else{
        span.style.textDecoration="none";
    }
    
}