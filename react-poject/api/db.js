import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "pempeme",
    password:"Developpeur01@",
    database: "blog"
})