const fs = require('fs');
const pg = require('pg');

function postgresExample(host, password, port, user) {
    const config = {
        database: "defaultdb",
        host: host,
        port: port,
        user: user,
        password: password,
        ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync('./ca.pem').toString(),
        },
    };

    const client = new pg.Client(config);
    client.connect(function (err) {
        if (err)
            throw err;
        client.query("SELECT 'Hello world' AS value", [], function (err, result) {
            if (err)
                throw err;

            console.log(result.rows[0]);
            client.end(function (err) {
                if (err)
                    throw err;
            });
        });
    });
}

module.exports = {
    postgresExample: postgresExample
};