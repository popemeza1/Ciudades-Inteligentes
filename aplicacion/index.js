'use strict'
/////////////////////////////libreria npm/////////////////////////////////////////////////////////////
const mongoose = require('mongoose')
const app = require('./app')
const config = require ('./config')

////////////////////mongo/////////////////////////////////////////////////////////////////////
mongoose.connect(config.db,(err, res)=>{
  if (err) {
    return console.log(`error al conectar a la base de datos:${err}`)
  }
  console.log('conexiona la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
//////////////////////HECHO POR ALEJANDRO HERNANDEZ CASTAÑEDA
