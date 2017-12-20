'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// 开发模式下的设置，正式环境请去除
process.env.__DEV__ = true;
module.exports = app => {
  const { router, controller } = app;
  const validateSession = app.middleware.validateSession({}, app);
  // 首页目前是登录页面
  router.get('/', controller.user.index);
  // 登录模块的路由
  router.post('/login', controller.user.login);
  router.post('/getMes', controller.user.getMes);
  router.post('/token', controller.user.tokenVerify);
  // 绑定身份证模块的路由
  router.get(
    '/:id/bindMainPage',
    validateSession,
    controller.bindIdentity.bindMainPage
  );
  router.post(
    '/:id/bindMainAct',
    validateSession,
    controller.bindIdentity.bindMainAct
  );
  router.get(
    '/:id/identityOperatePage',
    validateSession,
    controller.identityOperate.index
  );
  router.post(
    '/:id/changeMainIdentity',
    validateSession,
    controller.identityOperate.changeMainIdentity
  );
  router.post(
    '/:id/bindSubIdentities',
    validateSession,
    controller.bindIdentity.bindSubAct
  );
  router.post(
    '/:id/delSubIdentity',
    validateSession,
    controller.bindIdentity.delSubIdentity
  );
  router.get('/:id/reservation', validateSession, controller.reservation.index);
  // 公共部分，清除存储于redis中的session
  router.post(
    '/:id/cleanSession',
    validateSession,
    controller.user.cleanSession
  );
};
