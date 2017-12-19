'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// 开发模式下的设置，正式环境请去除
process.env.__DEV__ = true;
module.exports = app => {
  const { router, controller } = app;
  const validateSession = app.middleware.validateSession({}, app);
  router.get('/', controller.user.index);
  router.post('/login', controller.user.login);
  router.post('/getMes', controller.user.getMes);
  router.post('/token', controller.user.tokenVerify);
  router.get('/:id/reservation', validateSession, controller.reservation.index);
  router.post(
    '/:id/cleanSession',
    validateSession,
    controller.user.cleanSession
  );
};
