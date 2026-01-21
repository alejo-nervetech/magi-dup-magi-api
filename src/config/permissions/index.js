'use strict';

const userPermissions = require('./user.permissions');
const patientPermissions = require('./patient.permissions');
const facilityPermissions = require('./facility.permissions');
const guarantorPermissions = require('./guarantor.permissions');
const inventoryPermissions = require('./inventory.permissions');

const ROUTE_PERMISSIONS = {
    ...userPermissions,
    ...patientPermissions,
    ...facilityPermissions,
    ...guarantorPermissions,
    ...inventoryPermissions,
};

module.exports = ROUTE_PERMISSIONS;
