var Friends = {
  friendList: [],
  
  toggleStatus: function(friend) {
    this.friendList.push(friend);
    App.fetch();
    $('#numProfileFriends').text(`${Friends.friendList.length}`);
  }


};