'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authenticate = require('./middlewares/authenticate');
const authorize = require('./middlewares/authorize');
const createProxy = require('./middlewares/proxy');

class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }

    setupMiddleware() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());
    }

    setupAuth() {
        const skipAuth = (req, res, next) => {
            if (
                req.path === '/healthcheck' ||
                (req.method === 'POST' && req.path === '/v1/user/login')
            ) {
                return next();
            }
            return authenticate(req, res, next);
        };

        this.app.use(skipAuth);
        this.app.use(authorize);
    }

    setupEndpoints() {
        this.app.use('/v1/user*', createProxy('usersApi'));
        this.app.use('/v1/users*', createProxy('usersApi'));
        this.app.use('/v1/role*', createProxy('usersApi'));
        this.app.use('/v1/permission*', createProxy('usersApi'));
        this.app.use('/v1/doctor-fee*', createProxy('usersApi'));

        this.app.use('/v1/dashboard/beds*', createProxy('facilityApi'));
        this.app.use('/v1/dashboard/wards*', createProxy('facilityApi'));
        this.app.use('/v1/dashboard/visits*', createProxy('patientApi'));
        this.app.use('/v1/dashboard/admissions*', createProxy('patientApi'));
        this.app.use('/v1/dashboard/distribution*', createProxy('facilityApi'));

        this.app.use('/v1/patient*', createProxy('patientApi'));
        this.app.use('/v1/case*', createProxy('patientApi'));
        this.app.use('/v1/informant*', createProxy('patientApi'));
        this.app.use('/v1/vital*', createProxy('patientApi'));
        this.app.use('/v1/service-type*', createProxy('patientApi'));
        this.app.use('/v1/patient-guarantor*', createProxy('patientApi'));

        this.app.use('/v1/facility*', createProxy('facilityApi'));
        this.app.use('/v1/facilities*', createProxy('facilityApi'));
        this.app.use('/v1/department*', createProxy('facilityApi'));
        this.app.use('/v1/ward*', createProxy('facilityApi'));
        this.app.use('/v1/room*', createProxy('facilityApi'));
        this.app.use('/v1/bed*', createProxy('facilityApi'));
        this.app.use('/v1/transfer-order*', createProxy('facilityApi'));

        this.app.use('/v1/guarantor*', createProxy('guarantorApi'));
        this.app.use('/v1/guarantors*', createProxy('guarantorApi'));
    }

    async start() {
        const port = this.config.port;

        this.setupMiddleware();

        this.app.get('/healthcheck', (_req, res) => {
            res.send('ok');
        });

        this.setupAuth();
        this.setupEndpoints();

        this.instance = await this.app.listen(port);
        console.info(`MAGI API Gateway running on port ${port}`);
    }

    exit() {
        if (this.instance) {
            this.instance.close();
            console.info('Gateway instance terminated');
        }
    }
}

module.exports = Server;
