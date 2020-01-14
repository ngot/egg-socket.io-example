'use strict';

module.exports = app => {
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
};
