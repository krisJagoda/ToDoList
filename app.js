let input, error, addBtn, ulList

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    input = document.querySelector('#todo-input')
    error = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoListUl')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
    const inputVal = input.value

    if (inputVal.trim().length !== 0) {
        error.textContent = 'New task added'
        const todo = document.createElement('li')
        todo.textContent = input.value
        ulList.append(todo)
        input.value = ''
    } else {
        error.textContent = 'No tasks added: add a new task'
    }
}

document.addEventListener('DOMContentLoaded', main)
