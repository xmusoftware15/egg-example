'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.user.index);
  router.post('/getMes', controller.user.getMes);
  router.get('/', controller.home.index);
  router.post('/addEvent', controller.home.addEvent);
  router.get('/deleteEvent/:id', controller.home.deleteEvent);
  router.get('/ejs/:id', controller.home.list);
};
