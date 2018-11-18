var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    // FormView.$form.on('keydown', FormView.handleSubmitEnter());
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = App.username;
    var message = $("#message").val();
    var room = $("#roomSelector :selected").text();
    var messageObject = {username: user, text: message, roomname: room};
    Parse.create(messageObject);
    MessagesView.renderNewMessage(messageObject);
  },
  
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};