import express from "express";
import swaggerDefinition from "swagger.json";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

module.exports = function swaggerFactory() {
    let router = express.Router();

    let swaggerSpec = swaggerJSDoc({
        swaggerDefinition,
        apis: [
            "src/controller/*.js",
            "src/common/models/request/*.js",
            "src/common/models/response/*.js"
        ]
    });
    router.get("/", (req, res) => res.redirect("/swagger"));

    return router
        .get("/swagger.json", function(req, res) {
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerSpec);
        })
        .use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
