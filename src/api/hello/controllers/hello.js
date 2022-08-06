'use strict';

/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  async test_create_permission(ctx, next) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
