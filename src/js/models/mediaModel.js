'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Media extends customModel {
  constructor() {
      super('Media');
  }

  async search(keyword) {
      const searchQuery = `
          SELECT * FROM ${this.name} 
          WHERE type LIKE ? OR 
                url LIKE ? OR 
                name LIKE ? OR 
                metadate LIKE ? OR
                Origin_id IN (SELECT id FROM Origin WHERE name LIKE ?)
      `;

      const searchParams = new Array(5).fill(`%${keyword}%`);
      return await db.execute(searchQuery, searchParams);
  }
}

module.exports = new Media();
