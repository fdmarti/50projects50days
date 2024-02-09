import './style.css'

const btnNotificaction = document.querySelector('.btn-notification');
const notificationsContainer = document.querySelector('.notifications');

const messages = [
    'First message!',
    'This is the second message',
    'This could be an error messaged',
    'Hello World!'
]

const colors = [
    'red',
    'blue',
    'yellow',
    'green'
]

btnNotificaction.addEventListener('click', () => {

    const div = document.createElement('div');
    const colorSelected = Math.floor(Math.random() * colors.length);

    div.classList.add('notification', `${colors[colorSelected]}`);

    const span = document.createElement('span');
    span.classList.add(`close-toast`);
    span.innerHTML = 'X';
    loadCloseBtnFunction(span);

    const messageSelected = Math.floor(Math.random() * messages.length);
    div.innerHTML = messages[messageSelected];

    div.appendChild(span);
    notificationsContainer.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 2000);
});


const loadCloseBtnFunction = (tag) => {
    tag.addEventListener('click', () => {
        tag.parentElement.remove()
    });

}