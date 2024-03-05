import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  let editablePlayer = <span className="player-name">{name}</span>;
  if (isEditing) {
    editablePlayer = (
      <span>
        <input type="text" required value={name} onChange={handleChange} />
      </span>
    );
  }

  function handleClick() {
    setIsEditing(() => !isEditing);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
