'use strict';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const { Glob } = require('glob');
const mongoose = require('mongoose');

const config = require('./../config');

class Server {
    constructor() {
        this.app = express();
    }

    setupMiddleware() {
        this.app.use(cookieParser());
        this.app.use(bodyParser.json());
        this.app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        this.app.use(
            cors({
                origin: (origin, cb) => {
                    if (!origin || config.cors.includes(origin)) {
                        cb(null, true);
                    } else {
                        cb(new ForbiddenError().message);
                    }
                },
            })
        );
        this.app.use(helmet());
    }

    setupEndpoints() {
        const routes = new Glob('src/routes/*.route.js', {});

        for (const route of routes) {
            const basePath = path.basename(route);
            const Route = require(`./routes/${basePath}`);

            new Route(this.app).load();
        }
    }

    async setupDatabase() {
        try {
            await mongoose.connect(config.database.connectionString);
            console.info('Database connected');
        } catch (error) {
            console.error(error);
            this.exit();
        }
    }

    async start() {
        const port = config.port;

        await this.setupDatabase();
        this.setupMiddleware();
        this.setupEndpoints();

        this.app.get('/healthcheck', (_req, res) => {
            res.send('ok');
        });

        this.app.use((error, _req, res, _next) => {
            res.status(error.statusCode);
            res.send(error);
        });

        this.instance = await this.app.listen(port);
        console.info(`Server started at port ${port}`);
    }

    exit() {
        if (this.instance) {
            this.instance.close();
            console.info('Instance terminated');
        }
    }
}

module.exports = Server;
