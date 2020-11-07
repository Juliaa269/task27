import '../style.css';
import $ from 'jquery';
import Chat from './chat';

const chat = new Chat({
    onMessage: showNewMessages,
})

const $register = $('#register');
const $senderInput = $('#sender');
const $messageInput = $('#message');

$('#chatForm').on('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

chat.startApp();

function sendMessage() {
    chat.send($senderInput.val(), $messageInput.val());
    $messageInput.val('');
}

function showNewMessages({ payload: {username, message} }) {
    const $message = $(`<div>
                            ${username}: ${message}
                        </div>`);
    $register.append($message);
}