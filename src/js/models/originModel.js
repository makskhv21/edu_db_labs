'use strict';

const db = require('../db');
const customModel = require('./customModel');

class Origin extends customModel {
    constructor() {
        super('Origin');
    }
}

module.exports = new Origin();