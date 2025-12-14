'use strict'

const mongoose = require('mongoose')

const connectString = 'mongodb://localhost:27017/shopDEV1'

const {countConnect} = require('../helpers/check.connect')

class Database {
    constructor() {
        this.connect()
    }

    //connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }


        mongoose.connect(connectString,{
                maxPoolSize: 50
        } 
        ).then(_ => console.log('connected mongodb success PRO'))
        .catch(err => console.log('error connect'))
    }


    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }

}

const instanceMongodb = Database.getInstance()


module.exports = instanceMongodb




// App start
//  ↓
// require('init.mongodb.js')
//  ↓
// Database.getInstance()
//  ↓
// Database.instance chưa tồn tại
//  ↓
// new Database()
//  ↓
// constructor()
//  ↓
// this.connect()
//  ↓
// mongoose.connect(...)


//mongoose là singleton module
// Khi connect xong:
// mongoose.connection
// là toàn cục trong process Node.js

//Tóm tắt ngắn gọn (nên nhớ)
// ✔ Node.js require() cache module
// ✔ init.mongodb.js chỉ chạy 1 lần
// ✔ Singleton đảm bảo 1 instance Database
// ✔ mongoose giữ connection toàn cục
// ✔ Toàn app dùng chung MongoDB