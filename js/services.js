var mainApp=angular.module('starter.services', [])

mainApp.factory('pictures', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pictures = [{
    id: 0,
    name: 'Gog A',
    lastText: 'You on your way?',
    img: 'img/a.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    img: 'img/b.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    img: 'img/c.png'
  }];

  return {
    all: function() {
      return pictures;
    },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    // get: function(chatId) {
    //   for (var i = 0; i < chats.length; i++) {
    //     if (chats[i].id === parseInt(chatId)) {
    //       return chats[i];
    //     }
    //   }
    //   return null;
    // }
  };
});

mainApp.factory('recommends', function() {
  var recommends = [{
    id: 0,
    name: 'Gog A',
    lastText: 'You on your way?',
    img: 'img/tuijian.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    img: 'img/b.png'
  }];
    return {
      all: function() {
        return recommends;
      },
  };
});
