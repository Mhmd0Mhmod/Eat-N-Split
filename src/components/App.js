import { useState } from "react";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import FriendList from "./FriendList";
import Button from "./Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const App = () => {
  const [selectFriend, setSelectFriend] = useState(null);
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  function handleAddFriendFormButton() {
    setShowAddFriendForm((show) => !show);
  }
  function handleAddFriendForm(friend) {
    setFriends((fs) => [...fs, friend]);
    setShowAddFriendForm(false);
  }
  function handleSelection(friend) {
    setSelectFriend(friend);
    setShowAddFriendForm(false);
  }
  function handleSplitBill(value) {
    setFriends((fri) =>
      fri.map((el) => (el.id === selectFriend.id ? { ...el, balance: el.balance + value } : el))
    );
    setSelectFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelected={handleSelection} selectedFriend={selectFriend} />
        {showAddFriendForm && <FormAddFriend AddFriend={handleAddFriendForm} />}
        <Button onClick={handleAddFriendFormButton}>
          {!showAddFriendForm ? " Add Friend " : "Close"}
        </Button>
      </div>
      {selectFriend && <FormSplitBill friend={selectFriend} onsubmit={handleSplitBill} />}
    </div>
  );
};

export default App;
