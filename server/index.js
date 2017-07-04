module.exports = function (app, options) {
    console.log(options.httpServer);
    var globSync   = require('glob').sync,
        mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require),
        proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require),
        morgan  = require('morgan'),
        bodyParser = require('body-parser'),
        io = require('socket.io')(options.httpServer, {path: '/nodejs/wb-push-notification',
            transports: ['websocket', 'polling']});

    io.on('connection', function (socket) {
        console.log('a user connected');
    });

    function sendNextMessage() {
        setTimeout(function () {
            var currentDate = new Date(), futureDate = new Date();
            futureDate.setDate(currentDate.getDate() - 10);
            io.emit('pushMessage', {
                header: {
                    type: 'task',
                    createdDate: currentDate.getTime(),
                    dueDate: futureDate.getTime()
                },
                body: {
                    description: 'My Test'
                }
            });
            sendNextMessage();
        }, Math.floor(Math.random() * (6000 - 1000 + 1) + 1000));
    }

    sendNextMessage();

    app.use(morgan('dev'));
    app.use(bodyParser.json({limit:'5mb'}));       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    mocks.forEach(function (route) {
        route(app);
    });
    proxies.forEach(function (route) {
        route(app);
    });
};
