'use strict';

/**
 * Place.js controller
 *
 * @description: A set of functions called "actions" for managing `Place`.
 */

module.exports = {

  /**
   * Retrieve place records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.place.search(ctx.query);
    } else {
      return strapi.services.place.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a place record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.place.fetch(ctx.params);
  },

  /**
   * Count place records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.place.count(ctx.query);
  },

  /**
   * Create a/an place record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.place.add(ctx.request.body);
  },

  /**
   * Update a/an place record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.place.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an place record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.place.remove(ctx.params);
  },

  /**
   * Add relation to a/an place record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.place.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an place record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.place.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an place record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.place.removeRelation(ctx.params, ctx.request.body);
  }
};
