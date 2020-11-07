// const socket = new WebSocket('wss://fep-app.herokuapp.com/');

// console.log(socket);

// socket.onopen = () => {
//     console.log('open')
//     socket.send('Hello world');
// }

// socket.onmessage = (message) => {
//     console.log('message', JSON.parse(message.data));
// }

// document.getElementById('sendMsg').addEventListener('click', () => {
//     socket.send(JSON.stringify({
//         // JSON.stringify('clicked')
//         type: 'message',
//         payload: {
//             username: 'Yuliia',
//             message: 'SayHi'
//         }
//     }));
// })

// document.getElementById('sendMsg').addEventListener('click', () => {
//     socket.send(JSON.stringify({
//         // JSON.stringify('clicked')
//         type: 'login',
//         payload: 'Yuliia'
//     }));
// })

const socket = new WebSocket('wss://fep-app.herokuapp.com/');

console.log(socket)


socket.onopen = () => {
    console.log('socket opened');
    // socket.send('Hello world!')
}

socket.onmessage = (message) => {
    console.log('message', JSON.parse(message.data))
}

socket.onclose = () => {
    console.log('close')
}

socket.onerror = () => {
    console.log('error')
}

document.getElementById('sendMsg').addEventListener('click', () => {
    socket.send(JSON.stringify({
        type: 'message',
        payload: {
        username: "Yuliia",
        message: "aga))"
    }
    }));
})