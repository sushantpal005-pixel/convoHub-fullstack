//const express = require("express")      //method-1
import express from "express"            //method-2
import dotenv from "dotenv"

dotenv.config({})
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listen at port ${PORT}`)
})
