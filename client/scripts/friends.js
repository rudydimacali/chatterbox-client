var Friends = {
  friendList: [],
  
  toggleStatus: function(friend) {
    this.friendList.push(friend);
    $("#chats").load(location.href + " #chats>*", "");
    $('#numProfileFriends').text(`${Friends.friendList.length}`);
  }


};