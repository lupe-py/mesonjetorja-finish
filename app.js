const express=require('express');
const routerapp=require('./routes/router');
const path = require('path');
const nodemailer = require("nodemailer");
const app=express();

const PORT=process.env.PORT||3000;

app.set('view engine','ejs');

app.use(routerapp);

app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/photo',express.static(__dirname + 'public/photos'));


app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.post('/ad',(req,res)=>{
    var output = `
    <p>You have a new Request</p>
    <h2>Contact Details</h2>
    <ul>
      <li>${req.body.Name}</li>
      <li>${req.body.Email}</li>
      <li>${req.body.Text}</li>
    </li>
    `
    const transporter = nodemailer.createTransport({
        service : "gmail",
        tls : {
            rejectUnauthorized : false
        },
        auth : {
            user : "restorantmesonjetorja@gmail.com",
            pass : "lketbecskxhrvkpa"
        }
    })
    transporter.sendMail({
        from : 'restorantmesonjetorja@gmail.com',
        to :"restorantmesonjetorja@gmail.com",
        subject : 'New Message',
        html : output
    },(err,response)=>{
            if(err){
                console.log('err',err)
            }else{
                console.log('server starter',response)
            }
            res.redirect("/")
       })
    })



app.listen(PORT,()=>{
    console.log('port is',PORT);
});