'use strict';

const RESOURCES = {
    DASHBOARD: 'dashboard',
    PATIENT_RECORDS: 'patient_records',
    PATIENT_REGISTRATION: 'patient_registration',
    PATIENT_INFO_EDIT: 'patient_info_edit',
    CASE_REGISTRY: 'case_registry',
    INFRASTRUCTURE: 'infrastructure',
    DEPARTMENTS: 'departments',
    TRANSFERS: 'transfers',
    HMO: 'hmo',
    PATIENT_GUARANTORS: 'patient_guarantors',
    USER_MANAGEMENT: 'user_management',
    ROLE_MANAGEMENT: 'role_management',
    DOCTORS_FEE: 'doctors_fee',
    PATIENT_VITALS: 'patient_vitals',
    DOCTOR_ORDERS: 'doctor_orders',
    DIAGNOSIS_PROGNOSIS: 'diagnosis_prognosis',
    INVENTORY: 'inventory',
    REQUISITION: 'requisition',
    REQUISITION_APPROVAL: 'requisition_approval',
    SYSTEM_SETTINGS: 'system_settings',
};

const ACCESS_TYPES = {
    READ: 'R',
    WRITE: 'W',
};

module.exports = {
    RESOURCES,
    ACCESS_TYPES,
};
