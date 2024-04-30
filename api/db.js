import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user: "ahmadou",
    password:"#",
    database: "guessti"
})