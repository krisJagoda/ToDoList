let input, error, addBtn, ulList

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
    addNewTask()
}

const prepareDOMElements = () => {
    input = document.querySelector('#todo-input')
    error = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoListUl')
}

const prepareDOMEvents = () => {

}

const addNewTask = () => {
    const li = document.createElement('li')
    const inputVal = input.value
    console.log(inputVal)
    if (typeof inputVal === 'string' && inputVal.trim().length === 0) {
        // create new error message and new paragraph for user error.innerText = 'Enter a task'
    } else {
        console.log(typeof inputVal, 'works')
    }

}

document.addEventListener('DOMContentLoaded', main)
