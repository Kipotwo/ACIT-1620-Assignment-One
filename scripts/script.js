var count = 0

notesArray = [
    {
        title: 'note one',
        body: 'some text 1'
    },
    {
        title: 'note two',
        body: 'some text 2'
    }
]

function toggleDarkMode(){
    let element = document.querySelector('nav');
    let secondElement = document.querySelector('section');
    let button = document.querySelector('.dark')
    element.classList.toggle('darkmode');
    secondElement.classList.toggle('darkmode');
    if (count % 2 != 1){
        button.innerHTML = 'Light Theme';
        count = count + 1;
    }
    else{
        button.innerHTML = 'Dark Theme';
        count = count + 1;
    }

}


function cancel(){
    let element = document.querySelector('.save');
    let elementTwo = document.querySelector('.cancel');
    let elementThree = document.querySelector('textarea');
    element.style.display = 'none';
    elementTwo.style.display = 'none';
    elementThree.style.display = 'none';
}


function newNote(){
    let element = document.querySelector('.save');
    let elementTwo = document.querySelector('.cancel');
    let elementThree = document.querySelector('textarea');
    element.style.display = 'initial';
    elementTwo.style.display = 'initial';
    elementThree.style.display = 'initial';
}


function saveNote(){
    let element = document.querySelector('textarea');
    linesOfText = element.value.split('\n');
    title = linesOfText[0]
    linesOfText.splice(0, 1)
    note = {title: title, body: linesOfText}
    notesArray.push(note)
    console.log(notesArray)

    let nav = document.querySelector('nav')
    
    let newTitle = document.createElement('h1')
    let noteTitle = document.createTextNode(title)
    newTitle.append(noteTitle)
    nav.append(newTitle)

    let noteInfo = document.createElement('ul')

    for (let i of linesOfText){
        let newNote = document.createElement('li')
        let noteStuff = document.createTextNode(i)
        newNote.append(noteStuff)
        noteInfo.append(newNote)
    }

    nav.append(noteInfo)
    
    listedItem = document.querySelectorAll('li')
    for (let i = 0; i < listedItem.length; i++){
        listedItem[i].addEventListener('click', getItem(listedItem[i]))
    }
}


function getItem(item){
    content = item.innerHTML
    console.log(content)
}


let darkModeButton = document.querySelector('.dark')

let cancelButton = document.querySelector('.cancel')

let newNoteButton = document.querySelector('.new')

let saveButton = document.querySelector('.save')

let listedItem = document.querySelectorAll('li')

darkModeButton.addEventListener('click', toggleDarkMode)

cancelButton.addEventListener('click', cancel)

newNoteButton.addEventListener('click', newNote)

saveButton.addEventListener('click', saveNote)