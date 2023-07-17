'use strict';

/**
 * inventary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventary.inventary');
