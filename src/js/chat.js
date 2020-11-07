import {SERVER_URL} from './config';

export default class Chat {
    constructor(config) {
        console.log('chat opened;')
        this.config = config;
    //  this.socket.onmessage = (message) => {
    //     console.log('message', JSON.parse(message.data))
    //     }
    }

    startApp(){
        this.socket = new WebSocket(SERVER_URL);
        this.socket.onmessage = this.onWebMessage.bind(this);
        // this.socket.onmessage = (message) => {
        //     console.log('message', this.config.onMessage.JSON.parse(message.data))
        // }
    }

    onWebMessage(message) {
        this.config.onMessage(JSON.parse(message.data));
    }

    send(name, message){
        this.socket.send(JSON.stringify({
            type: 'message',
            payload: {
                username: name,
                message: message,
            }
        }));
    }
}