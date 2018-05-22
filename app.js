'use strict';
$(document).ready(function () {
    $('#sendBtn').on('click', () => {

        let messageArea = $('#chat');
        let myMsg = $('#msg').val();

        if (myMsg) {
            $('<p/>', {
                html: `<span>Me: </span>${myMsg}`
            }).appendTo(messageArea);

            chat(messageArea, myMsg).then(() => console.log(rand(50, 100)));

        }
    });


    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function timeout(message, time = 0) {
        return new Promise(done => {
            setTimeout(() => done(message), time * 1000);
        });
    }

    async function randomMessage() {
        const value = rand(50, 100);

        const message = [
            'Hello',
            'How are you?',
            'Hi',
            'By',
            'Have a good day!',
            'Nice to see you)',
            'Good by'
        ][rand(0, 6)];

        if (value < 70) {
            return timeout(message, rand(1, 10));
        } else {
            return 'I need go out. Good by';
        }

    }

    async function chat(parent, userMessage) {
        let botMessage = await randomMessage();

        (userMessage === 'My watch has ended') && (botMessage = 'See yoo soon. By!');

        $('<p/>', {
            html: `Bot: ${botMessage}`
        }).appendTo(parent);

    }

});


