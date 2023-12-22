'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Role extends customModel {
    constructor() {
        super('Role');
    }

    async addGrant(roleId, grantId) {
        const [existingRow] = await db.execute(`SELECT * FROM ${this.name} WHERE id = ? AND FIND_IN_SET(?, TRIM(grants))`, [roleId, grantId]);
        
        if (existingRow.length > 0) {
            throw new Error(`The grant ID ${grantId} already exists in the role with ID ${roleId}`);
        }
    
        const updatedRow = await db.execute(`UPDATE ${this.name} SET grants = CONCAT(grants, ?) WHERE id = ?`, [grantId + ',', roleId]);
        return updatedRow;
    }
}

module.exports = new Role();