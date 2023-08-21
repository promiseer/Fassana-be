const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Project Mananger',
        description: 'Description',
    },
    host: process.env.APP_ORIGIN,
    schemes: ['http', "https"],
    securityDefinitions: {
        "bearerAuth": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "Bearer token for authentication"
        }
    },
};

const outputFile = './../docs/swagger-output.json';
const endpointsFiles = ['../app.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);