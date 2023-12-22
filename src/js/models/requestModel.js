'use strict';

const customError = require("../customError");
const customModel = require("./customModel");
const Media = require('./mediaModel');

class Request extends customModel {
    constructor() {
        super('Request');
    }

    async getRequestAndMediaById(id) {
        const [requestRows] = await this.getByField('id', id);
        
        if (requestRows.length === 0) {
            throw new customError(`ID, which was requested, does not exist.`);
        }
    
        const mediaId = requestRows[0]['Media_id'];
        return await Media.getByField('id', mediaId);
    }
}

module.exports = new Request();