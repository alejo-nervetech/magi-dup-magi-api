'use strict';

require('dotenv').config();

const {
    PORT,
    NODE_ENV,
    CORS_ORIGIN,
    JWT_TOKEN,
    SERVICE_SECRET,
    USERS_API_URL,
    PATIENT_API_URL,
    FACILITY_API_URL,
} = process.env;

module.exports = {
    port: PORT || 3000,
    nodeEnv: NODE_ENV || 'development',
    cors: CORS_ORIGIN ? CORS_ORIGIN.split(',') : ['http://localhost:3000'],
    encryption: {
        jwt: {
            jwtToken: JWT_TOKEN,
        },
    },
    serviceSecret: SERVICE_SECRET,
    services: {
        usersApi: USERS_API_URL || 'http://localhost:3001',
        facilityApi: FACILITY_API_URL || 'http://localhost:3002',
        patientApi: PATIENT_API_URL || 'http://localhost:3003',
    },
};
