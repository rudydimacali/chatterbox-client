var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
  },

  renderMessage: function(message) {
    if (message.username && message.roomname === $('#roomSelector').val()) {
      var formatMessage = _.template(`<div class = 'messageBox'><div class = 'username'>@<%- username %></div><br><div class = 'message'><%- text %></div></div>`);
      if (Friends.friendList.includes(`@${message.username}`)) {
        formatMessage = _.template(`<div class = 'messageBox'><div class = 'username friend'>@<%- username %></div><br><div class = 'message'><%- text %></div></div>`);
      }
      var formattedMessage = formatMessage(message);
      this.$chats.append(formattedMessage);
      $('.username').off('click').on('click', function(event) {
        var user = $(event.target).text();
        if (!Friends.friendList.includes(user)) {
          Friends.toggleStatus(user);
        }
      });
    }
  },

  renderNewMessage: function(message) {
    if (message.username && message.roomname === $('#roomSelector').val()) {
      var formatMessage = _.template(`<div class = 'messageBox'><div class = 'username'>@<%- username %></div><br><div class = 'message'><%- text %></div></div>`);
      var formattedMessage = formatMessage(message);
      this.$chats.prepend(formattedMessage);
    }
  }

};