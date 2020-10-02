/* globals fetch, moment */

const url = 'http://localhost:3000/notes'

document.addEventListener('submit', function(event) {
    event.preventDefault()
    createEntry()
    renderEntry()

    // todoList.addEventListener('click', function(e) {
    //     if (e.target.matches('.delete')) {
    //         deleteTodo(e.target.parentElement.dataset.id)
    //     }
    // })

})

function createEntry() {
    const diaryInput = document.querySelector('#diary-input')
    console.log(diaryInput)

    const requestData = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            diaryItem: diaryInput.value,
            created_at: moment().format('LLLL')
        })
    }
    fetch(url, requestData)
        .then(res => res.json())
        .then(data => {
            diaryInput.value = ''
            renderEntry(data)

        })
}

// function renderEntry(note) {
//     const entryList = document.querySelector('#entry-list')
//     const enrtyItemEl = document.createElement('div')
//     const deleteOption = document.createElement('div')
//         // enrtyItemEl.dataset.id = notes.id
//         // enrtyItemEl.id = 'item-${note.id}'
//     enrtyItemEl.innerText = note.diaryItem
//         // enrtyItemEl.classList.add('note')
//     deleteOption.classList.add('delete')
//     deleteOption.innerText = ('Delete')
//     entryList.appendChild(enrtyItemEl)
//     entryList.appendChild(deleteOption)
// }


// function deleteEntry(diaryItemId) {
//     fetch(url + '/' + diaryItemId, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => {
//             const itemToRemove = document.querySelector(`#item-${noteId}`)
//             itemToRemove.remove()
//         })


function renderEntry() {
    fetch(url)
        .then(res => res.json())
        .then(noteData => {
            const entryList = document.querySelector('#entry-list')
            for (const note of noteData) {
                console.log(note)
                const enrtyItemEl = document.createElement('div')
                enrtyItemEl.id = note.id
                enrtyItemEl.classList.add('note')
                const deleteOption = document.createElement('div')
                deleteOption.classList.add('delete')
                deleteOption.innerText = ('Delete')
                enrtyItemEl.innerText = note.diaryItem
                entryList.appendChild(enrtyItemEl)
                entryList.appendChild(deleteOption)
            }
        })
}
// let div = document.createElement('div')
// div.textContent = moment(note.datetime).format('MMM D h:mm A')
// el.appendChild(div)

// div = document.createElement('div')
// const deleteButton = document.createElement('button')
// deleteButton.classList.add('f5', 'bg-red', 'white', 'br3', 'ph3', 'pv2', 'mb2', 'white', 'pointer')
// deleteButton.textContent = 'Delete'

// deleteButton.addEventListener('click', function() {
//     deleteMoodEntry(notes.id)
// })

// div.appendChild(deleteButton)
// el.appendChild(div)

// return el
// }


// OLD


// fetch(url)
//     .then(res => res.json())
//     .then(todoData => {
//         const todoList = document.querySelector('#todo-list')
//         for (const item of todoData) {
//             console.log(item)
//             const todoItemEl = document.createElement('div')
//             todoItemEl.classList.add('note')
//             todoItemEl.innerText = item.todoItem
//             todoList.appendChild(todoItemEl)





// fetch(url)
// .then(res => res.json())
// .then(todoData => {
//     const todoList = document.querySelector('#todo-list')
//     for (const item of todoData) {
//         console.log(item)
//         const todoItemEl = document.createElement('li')
//         todoItemEl.innerText = item.todoItem
//         todoList.appendChild(todoItemEl)