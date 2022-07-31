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
        const div = createToolsArea()
        todo.textContent = input.value
        ulList.append(todo)
        todo.append(div)
        input.value = ''
    } else {
        error.textContent = 'No tasks added: add a new task'
    }
}

const createToolsArea = () => {
    const div = document.createElement('div')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    const btn3 = document.createElement('button')

    div.setAttribute('class', 'tools')
    btn1.setAttribute('class', 'complete')
    btn1.innerHTML = '<i class="fas fa-check"></i>'
    btn2.setAttribute('class', 'edit')
    btn2.textContent = 'EDIT'
    btn3.setAttribute('class', 'delete')
    btn3.innerHTML = '<i class="fas fa-times"></i>'

    div.append(btn1, btn2, btn3)
    return div
}

document.addEventListener('DOMContentLoaded', main)
