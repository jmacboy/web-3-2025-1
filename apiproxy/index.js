const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
const bodyParser = require('body-parser');



app.use(cors({
    origin: ['http://localhost:5173',
        'http://127.0.0.1:5173'],
    credentials: true,

    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'X-Requested-With',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Methods',
        'Access-Control-Allow-Credentials',
    ]
}))


const onProxyReq = async function (proxyReq, req, res) {
    const token = req.cookies.access;
    if (token) {
        proxyReq.setHeader('Authorization', 'Bearer ' + token);
    }
}

const apiProxy = createProxyMiddleware({
    target: 'http://127.0.0.1:8000/universidad/',
    changeOrigin: true,
    pathRewrite: (path, req) => {
        return path.replace('/webproxy', '');
    },
    on: {
        proxyReq: onProxyReq
    }
});
const port = 3000;

app.use('/webproxy', apiProxy);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
require('./routes/auth.routes')(app);

app.listen(port, () => {
    console.log(`Proxy server is running at http://localhost:${port}`);
});