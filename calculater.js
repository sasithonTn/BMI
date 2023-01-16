const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
   //console.log(__dirname);
   res.sendFile(__dirname + "/index.html");
} );

app.post("/bmiCalculor", (req,res)=>{
   console.log(req.body.n1)
   console.log(req.body.n2)
   //res.send("Thank you for posting something")

   var num1 = Number(req.body.n1);
   var num2 = Number(req.body.n2);
   result = num1/Math.pow(num2,2);

   if(result <18.5){res.send("คุณมีค่า BMI : " + result+" คุณอยู่ในเกณฑ์ : Underweight");}
   else if (result>=18.5 && result<23){res.send(" คุณมีค่า BMI : " + result+" คุณอยู่ในเกณฑ์ : healthy weight");}
   else if (result>=23 && result<30){res.send(" คุณมีค่า BMI : " + result+" คุณอยู่ในเกณฑ์ : Overweight");}
   else {res.send("คุณมีค่า BMI : " + result+" คุณอยู่ในเกณฑ์ :Obase");}
});


app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
