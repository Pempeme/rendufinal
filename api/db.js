import mysql from 'mysql'

export const db = mysql.createConnection({
    host : "127.0.0.1" ,
    user : "ahmadou" , 
    password :"root1" , 
    database :"guessti"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database.');
    }
});