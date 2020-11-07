const SERVER_URL = ('wss://fep-app.herokuapp.com/');

export default class Chat {
    constructor() {
        this.socket = new WebSocket(SERVER_URL);
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