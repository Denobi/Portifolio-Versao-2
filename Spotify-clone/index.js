const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const path = require('path');

const port = 8080;
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

var login ="admin";
var password = "12345";

app.use(session({secret:'y3wqv7weq78t32e8738'}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'Autenticado'));

app.post('/',(req,res)=>{
    
    if (req.body.password == password && req.body.login == login) {
        req.session.login = login;
        res.render('dashboard');
    } else {
        res.render('index');
        
    }
})
app.get('/',(req,res)=>{
    if (req.session.login) {
        res.render('dashboard');
    } else {
        
        res.render('index');
    }
})


app.use('/' ,(req,res) =>{
    res.render('dashboard.html');
});

let messages =[];

io.on('connection', socket =>{
    console.log(`socket conectado:${socket.id}`);
    socket.on('sendMessage', data  =>{
       messages.push(data);
       socket.broadcast.emit('receivedMessage', data)
    })
} );

server.listen(port,()=>{
    console.log('Servidor Rodando');
})