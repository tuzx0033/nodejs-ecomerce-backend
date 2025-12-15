'use strict'


const mongoose = require('mongoose')
const os = require('os')
const process = require('process')


const _SECONDs = 5000
const _SECONDs1 = 2000



const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log('number of connections', numConnection)
}

//check overload connect
const checkOverload  = () =>{
    setInterval( () =>{
    const numConnection = mongoose.connections.length
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //Example maximun of connection based of number osf cores
    const maxConnection = numCores * 5;

    console.log(`active connection: ${numConnection}`)
    console.log(`memory used:: ${memoryUsage / 1024 / 1024} MB`)

    if(numConnection > maxConnection){
        console.log('connection overload detected!')
    }

    }, _SECONDs)//monitor every 5 seconds
}


module.exports = {
    countConnect, checkOverload
}