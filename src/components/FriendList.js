import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, onSelected, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend selectedFriend={selectedFriend} key={friend.id} friend={friend} onSelected={onSelected} />
      ))}
    </ul>
  );
};

export default FriendList;
