const express = require ('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'admin',
    database:'attendancelogger',
    port:3306


});

//check database connection

db.connect(err=>{
    if (err) {console.log (err,'dberr');}
    console.log('database connected');
})


//get data 

app.get('/attendancelogger',(req,res)=>{
    let qr = 'select* from attendancelogger';
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err, 'errs');
        }
        if(result.length>0)
        {
            res.send({
                message:'attendance data',
                data:result
            });
        }

    });
});

//get single data

app.get('/attendancelogger/:id', (req,res)=>{

    let gID =req.params.id;
    let qr = `select* from attendancelogger where id = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err) {
            console.log('err');
        }
        if (result.length>0)
        {
            res.send({
                message: 'get single data',
                data:result
            });
        }
        else{
            res.send({
                message:'data not found'
            });
            
        }

    });

});

//create data
app.post('/attendancelogger', (req,res)=>{
    console.log(req.body, 'createdata');

       let name = req.body.name;
       let status = req.body.status;


       let qr = `insert into attendancelogger(name,status)
                     values('${name}', '${status}')`;
    console.log(qr,'qr')
    db.query(qr,(err,result)=>{

        if(err){
            console.log(err);
        }
        console.log(result,'result')
        res.send({
            message:'data inserted',

        });

        
    })         
    
});

//update single data
app.put('/attendancelogger/:id',(req,res)=>{
    console.log(req.body, 'updatedata');



       let gID = req.params.id; 
         
       let name = req.body.name;
       let status = req.body.status;


       let qr = `update attendancelogger set name = '${name}' , status = '${status}'
               where id = ${gID} `;

        db.query(qr,(err,result)=>{
            if(err) {
                console.log(err);
            }
            res.send({
                message:'data updated'

            });
        }); 
         

});

// delete single data

app.delete ('/attendancelogger/:id', (req,res)=>{

    let qID = req.params.id;
    let qr = `delete from attendancelogger where id = '${qID}'`;
    db.query(qr,(err,result)=>{
        if(err) {
            console.log(err);
        }
        res.send({
            message: 'data deleted'
        })
    });
})

app.listen(3000,()=>{
    console.log('server running');
});



