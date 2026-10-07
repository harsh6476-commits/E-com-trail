const app = require("./src/app");

require('dotenv').config()
const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("welcome man");
})


app.listen(port , ()=>{
    console.log(`server started at Port ${port}` );
})