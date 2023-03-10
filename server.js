const express=require("express")
const app=express()
const port=5001
const path=require("path")
app.use(express.json())
const hour=new Date().getHours()
const day=new Date().getDay()

const x = (req, res, next) => {
    if ((hour<=15 && hour<17) && (day>0 && day<6)) {
      next();
    } else {
        res.sendFile(path.join(__dirname,"public","close.html"))
    }
  };
  app.use(x);

app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"public","home.html"))
    
})

app.get('/services',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","services.html"))
})
app.get('/contact',(req,res)=>{
  res.sendFile(path.join(__dirname,"public","contact.html"))
})


console.log(day)
app.listen(port,console.log(`app is running at port: ${port}`))

