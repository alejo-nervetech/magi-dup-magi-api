'use strict';

const axios = require('axios');
const config = require('../../config');
const FormData = require('form-data');

function createProxy(serviceName) {
    return async (req, res) => {
        try {
            const serviceUrl = config.services[serviceName];
            const targetUrl = `${serviceUrl}${req.originalUrl}`;
            const userPermissions = req.user?.role?.permissions || [];

            const isMultipart = req.headers['content-type']?.includes(
                'multipart/form-data'
            );

            let requestData;
            let requestHeaders = {
                'X-User-Id': req.user?.id || '',
                'X-User-Name': req.user?.name || '',
                'X-User-Email': req.user?.email || '',
                'X-Organization-Id': req.user?.organizationId || '',
                'X-Facility-Id': req.user?.facilityId || '',
                'X-Department-Id': req.user?.departmentId || '',
                'X-User-Role-Id': req.user?.roleId || '',
                'X-User-Role-Name': req.user?.role?.name || '',
                'X-User-Permissions': JSON.stringify(userPermissions),
                'X-User-Department-Assignments': JSON.stringify(req.user?.departmentAssignments || []),
                'X-Service-Token': config.serviceSecret,
            };

            if (isMultipart) {
                requestData = req;
                requestHeaders['Content-Type'] = req.headers['content-type'];
            } else {
                requestData = req.body;
                requestHeaders['Content-Type'] = 'application/json';
            }

            const response = await axios({
                method: req.method,
                url: targetUrl,
                data: requestData,
                headers: requestHeaders,
                timeout: 10000,
                maxBodyLength: Infinity,
                maxContentLength: Infinity,
            });

            res.status(response.status).json(response.data);
        } catch (error) {
            if (error.response) {
                res.status(error.response.status).json(error.response.data);
            } else {
                console.error(`Proxy error to ${serviceName}:`, error.message);
                res.status(500).json({
                    message: 'Internal server error',
                    statusCode: 500,
                    details: {
                        code: 'internal_server_error',
                    },
                });
            }
        }
    };
}

module.exports = createProxy;
