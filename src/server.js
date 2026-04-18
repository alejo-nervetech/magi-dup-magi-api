'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./middlewares/authenticate');
const authorize = require('./middlewares/authorize');
const createProxy = require('./middlewares/proxy');

const routes = require('./routes/routes');

class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }

    setupMiddleware() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.json());

        // 🔍 LOG ALL REQUESTS (DEBUGGING)
        this.app.use((req, res, next) => {
            console.log(`[REQ] ${req.method} ${req.originalUrl}`);
            next();
        });
    }

    setupAuth() {

        // ❌ OLD (PROBLEMATIC)
        /*
        const skipAuth = (req, res, next) => {
            if (
                req.path === '/health' ||
                req.path === '/healthcheck' ||
                (req.method === 'POST' && req.path === '/v1/user/login')
            ) {
                return next();
            }
            return authenticate(req, res, next);
        };
        */

        // 🔴 ISSUE:
        // req.path is unreliable behind ALB + proxy
        // may change to /user/login or stripped path → causes auth + 405 issues

        // ✅ FIXED VERSION
        const skipAuth = (req, res, next) => {
            const publicRoutes = [
                '/health',
                '/healthcheck',
                '/v1/user/login'
            ];

            if (publicRoutes.includes(req.originalUrl)) {
                return next();
            }

            return authenticate(req, res, next);
        };

        this.app.use(skipAuth);
        this.app.use(authorize);
    }

    setupEndpoints() {

        // ================= USERS =================
        this.app.use('/v1/user*', createProxy('usersApi'));
        this.app.use('/v1/users*', createProxy('usersApi'));
        this.app.use('/v1/role*', createProxy('usersApi'));
        this.app.use('/v1/permission*', createProxy('usersApi'));
        this.app.use('/v1/doctor-fee*', createProxy('usersApi'));

        // ================= PATIENT =================
        this.app.use('/v1/patient*', createProxy('patientApi'));
        this.app.use('/v1/vital*', createProxy('patientApi'));
        this.app.use('/v1/case*', createProxy('patientApi'));
        this.app.use('/v1/informant*', createProxy('patientApi'));

        // ================= FACILITY =================
        this.app.use('/v1/facility*', createProxy('facilityApi'));
        this.app.use('/v1/ward*', createProxy('facilityApi'));
        this.app.use('/v1/bed*', createProxy('facilityApi'));
        this.app.use('/v1/department*', createProxy('facilityApi'));
        this.app.use('/v1/room*', createProxy('facilityApi'));
        this.app.use('/v1/transfer-order*', createProxy('facilityApi'));

        // ================= GUARDIAN =================
        this.app.use('/v1/guarantor*', createProxy('guarantorApi'));
        this.app.use('/v1/hmo*', createProxy('guarantorApi'));

        // ================= INVENTORY =================
        this.app.use('/v1/items*', createProxy('inventoryApi'));
        this.app.use('/v1/orders*', createProxy('inventoryApi'));
        this.app.use('/v1/inventory*', createProxy('inventoryApi'));

        // ================= REPORTS =================
        this.app.use('/v1/payment*', createProxy('reportsApi'));
        this.app.use('/v1/invoice*', createProxy('reportsApi'));

        // 🔴 NOTE:
        // This approach works but can cause overlap issues like:
        // /v1/user* vs /v1/users*
        // Always ensure order is correct (more specific first if needed)
    }

    start() {
        this.setupMiddleware();
        this.setupAuth();
        this.setupEndpoints();

        this.app.get('/health', (_req, res) => {
            res.status(200).json({ status: 'ok' });
        });

        this.app.get('/healthcheck', (_req, res) => {
            res.status(200).json({ status: 'ok' });
        });

        this.app.listen(this.config.port, () => {
            console.log(`🚀 Gateway running on port ${this.config.port}`);
        });
    }
}

module.exports = Server;
