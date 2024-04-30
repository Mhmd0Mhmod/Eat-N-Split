import React, { useState } from "react";
import Button from "./Button.js";
const FormSplitBill = ({ friend, onsubmit }) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const paied = bill ? bill - expense : "";
  const [whoIsPayed, setWhoIsPayied] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !expense) return;
    onsubmit(whoIsPayed === "user" ? paied : -paied);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name} </h2>
      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value) > bill ? expense : e.target.value)}
      />
      <label>👫 {friend.name}'s expense</label>
      <input type="text" disabled value={paied} />
      <label>🤑 Who is paying the bill</label>
      <select value={whoIsPayed} onChange={(e) => setWhoIsPayied(e.target.value)}>
        <option value="user">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button> Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
