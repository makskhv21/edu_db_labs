'use strict';

const db = require('../db');
const CustomError = require("../customError");

class customModel {
    constructor(name) {
        this.name = name;
    }

    async getAll() {
        return await db.execute(`SELECT * FROM ${this.name}`);
    }

    async getByField(field, value) {
        return await db.execute(`SELECT * FROM ${this.name} WHERE ${field} = ?`, [value]);
    }

    async  add(values, uniqueField) {
        const [existingRows] = await this.getByField(uniqueField, values[uniqueField]);
        if (existingRows.length > 0) {
            throw new CustomError(`Duplicate entry found for ${this.name} with ${uniqueField}: ${values[uniqueField]}`);
        }
    
        const fields = Object.keys(values).join(',');
        const placeholders = Object.keys(values).map(() => '?').join(',');
        const query = `INSERT INTO ${this.name} (${fields}) VALUES (${placeholders})`;
        
        return await db.execute(query, Object.values(values));
    }    

    async deleteById(id) {
        const [existingRows] = await this.getByField('id', id);
        if (existingRows.length === 0) {
            throw new CustomError(`No ${this.name} found with this id`);
        }
        await db.execute(`DELETE FROM ${this.name} WHERE id = ?`, [id]);
        return { message: `${this.name} deleted successfully` };
    }        
}

module.exports = customModel;

