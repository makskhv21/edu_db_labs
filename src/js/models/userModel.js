'use strict';

const db = require('../db');
const customModel = require('./customModel');

class User extends customModel {
    constructor() {
        super('User');
    }
    
    async updateRoleById(userId, roleId) {
        const updateQuery = `UPDATE ${this.name} SET Role_id = ? WHERE id = ?`;
        return await db.execute(updateQuery, [roleId, userId]);
    }
}

module.exports = new User();