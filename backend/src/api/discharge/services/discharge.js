'use strict';

/**
 * discharge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discharge.discharge');
