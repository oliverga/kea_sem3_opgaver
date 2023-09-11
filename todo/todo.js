"use strict";

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let id = JSON.parse(localStorage.getItem('id')) || 0;
let todoInput = document.querySelector(".todo-input");
let quantityInput = document.querySelector(".quantity-input");

class Todo {
    constructor(task, quantity, done) {
        this.task = task;
        this.quantity = quantity;
        this.done = done;
        this.id = id++;
    }
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo(todoInput.value, quantityInput.value);
    }
});

function addTodo(task, quantity) {
    if (!task.trim()) {
        alert('Please enter a task.');
        return;
    }
    const todo = new Todo(task, quantity, false);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('id', JSON.stringify(id));
    todoInput.value = "";
    quantityInput.value = "";
    updateTodoLists();
}

function markAsDone(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.done = !todo.done;
        updateTodoLists();
    }
}

function deleteTodoById(id) {
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    updateTodoLists();
}


function removeDone() {
    todos = todos.filter(todo => !todo.done);
    localStorage.setItem('todos', JSON.stringify(todos));
    updateTodoLists();
}

function updateTodoLists() {
    const todoList = document.querySelector(".todo-list");
    const doneList = document.querySelector(".done-list");
    const removeDoneButton = document.querySelector(".remove-done-button");
    todoList.innerHTML = "";
    doneList.innerHTML = "";
    let doneItemsExist = false;
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = 
        `<div class="todo-item">
            <input class="todo-checkbox" type="checkbox" ${todo.done ? "checked" : ""} data-id="${todo.id}" onchange="markAsDone(${todo.id})">
            <span class="todo-task">${todo.task}</span>
            ${todo.quantity ? `<span class="todo-quantity">${todo.quantity}</span>` : ""}
            <svg data-id="${todo.id}" onClick="deleteTodoById(${todo.id})" class="delete-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </div>`;
        
        if (todo.done) {
            doneList.appendChild(li);
            li.querySelector(".todo-task").style.textDecoration = "line-through";
            
            doneItemsExist = true;
        } else {
            todoList.appendChild(li);
        }
    });
    if (doneItemsExist) {
        removeDoneButton.classList.remove("hide");
    } else {
        removeDoneButton.classList.add("hide");
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}

todoInput.focus();
updateTodoLists();