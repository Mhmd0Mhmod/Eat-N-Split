import Button from "./Button";

const Friend = ({ friend, onSelected, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes You {friend.balance}$
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelected(isSelected ? null : friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};
export default Friend;
