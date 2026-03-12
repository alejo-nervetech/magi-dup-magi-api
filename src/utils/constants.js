'use strict';

const RESOURCES = {
    DASHBOARD: 'dashboard',
    PATIENT_RECORDS: 'patient_records',
    CASE_REGISTRY: 'case_registry',
    INFRASTRUCTURE: 'infrastructure',
    DEPARTMENTS: 'departments',
    TRANSFERS: 'transfers',
    HMO_PROVIDERS: 'hmo_providers',
    HMO_GUARANTORS: 'hmo_guarantors',
    PATIENT_GUARANTORS: 'patient_guarantors',
    USER_MANAGEMENT: 'user_management',
    ROLE_MANAGEMENT: 'role_management',
    DOCTORS_FEE: 'doctors_fee',
    PATIENT_VITALS: 'patient_vitals',
    PATIENT_DIET: 'patient_diet',
    DOCTOR_ORDERS: 'doctor_orders',
    DIAGNOSIS_PROGNOSIS: 'diagnosis_prognosis',
    INVENTORY: 'inventory',
    REQUISITION: 'requisition',
    REQUISITION_APPROVAL: 'requisition_approval',
    SYSTEM_SETTINGS: 'system_settings',
    PATIENT_CHARGES: 'patient_charges',
    PATIENT_INVOICE: 'patient_invoice',
};

const ACCESS_TYPES = {
    READ: 'R',
    WRITE: 'W',
};

module.exports = {
    RESOURCES,
    ACCESS_TYPES,
};
