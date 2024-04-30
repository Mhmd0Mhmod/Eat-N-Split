import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ AddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u");
  const id = crypto.randomUUID();
  function handleSubmtion(e) {
    e.preventDefault();
    if (!name || !image) return;
    const friend = {
      id,
      name,
      image: `${image}=${id}`,
      balance: 0,
    };
    AddFriend(friend);
    console.log(friend);
    setName("");
    setImage("https://i.pravatar.cc/48?u");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmtion}>
      <label>👫 Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>🌄 Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
