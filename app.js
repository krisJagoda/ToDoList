let input, error, addBtn, ulList, tools, btn1, btn2, btn3, popup

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    input = document.querySelector('#todo-input')
    error = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todoListUl')
    tools = document.createElement('div')
    btn1 = document.createElement('button')
    btn2 = document.createElement('button')
    btn3 = document.createElement('button')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask)

    window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === 'Return') {
            return addNewTask()
        }
    })

    ulList.addEventListener('click', checkButton)
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

    tools.setAttribute('class', 'tools')
    btn1.setAttribute('class', 'complete')
    btn1.innerHTML = '<i class="fas fa-check"></i>'
    btn2.setAttribute('class', 'edit')
    btn2.textContent = 'EDIT'
    btn3.setAttribute('class', 'delete')
    btn3.innerHTML = '<i class="fas fa-times"></i>'

    tools.append(btn1, btn2, btn3)
    return tools
}

const checkButton = (e) => {

    if (e.target.matches('.complete')) {
        e.target.classList.toggle('completed')
        e.target.closest('li').classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
        editContent(e)
    } else if (e.target.matches('.delete')) {
        e.target.closest('li').remove()
    }
}

const editContent = (e) => {

}


document.addEventListener('DOMContentLoaded', main)
