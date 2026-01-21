'use strict';

const { RESOURCES, ACCESS_TYPES } = require('../../utils/constants');

const inventoryPermissions = {
    'GET /v1/items': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/item/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'POST /v1/item': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'PATCH /v1/item/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'POST /v1/item-category': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/item-categories': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/orders': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'GET /v1/order/:id': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.READ,
    },
    'POST /v1/order': {
        resource: RESOURCES.INFRASTRUCTURE,
        access: ACCESS_TYPES.WRITE,
    },
    'POST /v1/requisition': {
        resource: RESOURCES.REQUISITION,
        access: ACCESS_TYPES.WRITE,
    },
    'GET /v1/requisition': {
        resource: RESOURCES.REQUISITION,
        access: ACCESS_TYPES.READ,
    },
    'PATCH /v1/requisition/approval/:id': {
        resource: RESOURCES.REQUISITION_APPROVAL,
        access: ACCESS_TYPES.WRITE,
    },
};

module.exports = inventoryPermissions;
