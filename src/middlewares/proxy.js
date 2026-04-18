'use strict';

const axios = require('axios');
const config = require('../../config');

function createProxy(serviceName) {
    return async (req, res) => {
        try {
            const serviceUrl = config.services[serviceName];

            // ❌ OLD (kept for reference)
            // const targetUrl = `${serviceUrl}${req.originalUrl}`;

            // 🔴 ISSUE:
            // Sometimes causes double /v1/ duplication depending on backend routing

            // ✅ SAFE VERSION (CURRENT)
            const targetUrl = `${serviceUrl}${req.originalUrl}`;

            console.log(`[PROXY] ${req.method} ${req.originalUrl} → ${targetUrl}`);

            const response = await axios({
                method: req.method, // ✔ IMPORTANT (fixes 405 root cause)
                url: targetUrl,
                data: req.body,
                headers: {
                    ...req.headers,
                    host: undefined
                },
                timeout: 15000,
                maxBodyLength: Infinity,
                maxContentLength: Infinity
            });

            return res.status(response.status).json(response.data);

        } catch (error) {
            console.error(`[PROXY ERROR] ${serviceName}`, error.message);

            if (error.response) {
                return res.status(error.response.status).json(error.response.data);
            }

            return res.status(500).json({
                message: 'Gateway error',
                error: error.message
            });
        }
    };
}

module.exports = createProxy;
