class Message {
    name;
    time;
    text;
    constructor(name, text, time = this.gettime()) {
        this.name = name;
        this.time = time;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.name}: ${this.text}`
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toHtml() {
        return `<p>${this.time} ${this.name} ${this.text}</p>`
    }

}

class Messenger {
    messages = [];

    show_history() {
        let msg_hist = [];
        this.messages.forEach(msg => msg_hist.push(msg.toHtml()));
        return msg_hist;
    }

    send(author, text) {
        this.messages.push(new Message(author, text))
    }
}

let messenger = new Messenger();

const author = document.querySelector('#name');
const message = document.querySelector('#message');
const sendBtn = document.querySelector('.btn-send');
const showHistory = document.querySelector('.btn-show');
sendBtn.addEventListener('click', () => {
    let name = author.value;
    let text = message.value;
    message.value = '';
    messenger.send(name, text);
});
const history = document.querySelector('.history');
showHistory.addEventListener('click', () => {
    history.innerHTML = messenger.show_history();
});

// messenger.send('артем', 'первое сообщение')
// messenger.send('мария', 'второе сообщение')
// messenger.show_history()