function toggleDarkMode(){
    let element = document.querySelector('nav');
    let secondElement = document.querySelector('section');
    element.classList.toggle('darkmode');
    secondElement.classList.toggle('darkmode');
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


let darkModeButton = document.querySelector('.dark')

let cancelButton = document.querySelector('.cancel')

let newNoteButton = document.querySelector('.new')

darkModeButton.addEventListener('click', toggleDarkMode)

cancelButton.addEventListener('click', cancel)

newNoteButton.addEventListener('click', newNote)


