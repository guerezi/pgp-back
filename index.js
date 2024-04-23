const express = require("express");
const errors = require("./middleware/errors.js");
const swaggerUi = require("swagger-ui-express"), swaggerDocument = require("./swagger.json");
const database = require("./config/db.config.js");

const app = express();

setUpDatabase().then(
    () => {
        console.log("Database is ready");

        app.use(express.json());

        app.use("/api", require("./routes/app.routes"));

        app.use(errors.errorHandler);

        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.listen(process.env.port || 3000, function () {
            console.log("Ready at localhost:3000/api/*");
        });

    }).catch((error) => {
        console.log("Database is not ready", error);
    });

async function setUpDatabase() {
    try {
        await database.sequelize.authenticate();
        console.log("Database is authenticated");
        const result = await database.sequelize.sync();
        console.log("Database is synced", result.models);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
