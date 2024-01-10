const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose") 
const vaccineRoute = require("./src/modules/vaccine/vaccine.route")
const app = express();

//environment variables
require('dotenv').config();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


//database connection
const uri = process.env.ATLAS_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
console.log('Connected Database Successfully');
});

// Api 
app.use("/vaccine",vaccineRoute)
app.get("/",(req,res) => {
    res.send("Vaccine-Store service is running")
}) 

const PORT = process.env.PORT || 3030
app.listen(PORT , ()=>{
    console.log(`Vaccine-Store service is running on port [${PORT}] ...`);
})

module.exports = app