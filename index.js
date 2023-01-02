const http = require('http');

const app = {};

app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening on port ${app.config.port}`)
    });
}

app.handleReqRes = (req,res) => {
    res.end('Hello Wrold!')
}

app.createServer();