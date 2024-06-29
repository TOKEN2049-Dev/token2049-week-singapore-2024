import mysql from "mysql2";

export const connectDB = (connection) => {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.log("IN CONNECT DB",err.message, err.name, err);
                reject("WHILE MAKING CONNECTION--> ",err.message);
            }
            else
                resolve();
        });
    })
}

export const queryDB = async (queryStr, insertionData=null) => {
    const connection = mysql.createConnection({
        host     : process.env.DB_HOST,
        port: 25060,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
    });

    await connectDB(connection);

    return new Promise((resolve, reject) => {
        connection.query(queryStr, insertionData, (err, res) => {
            connection.end((endErr) => {
                if (endErr) {
                    console.log("IN END DB",endErr.message, endErr.name, endErr);
                    reject("WHILE CLOSING CONNECTION--> ",endErr.message);
                }
                if (err) {
                    console.log("IN QUERY DB",err.message, err.name, err);
                    reject("WHILE QUERYING DB--> ",err.message);
                }
                resolve(res);
            });
        })
    })
}