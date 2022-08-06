'use strict';

/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  async index(ctx, next) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
