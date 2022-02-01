import React from "react";

export default function Die(props) {
  const styles = { backgroundColor: props.isHeld ? "green" : "#fff" };
  return (
    <div style={styles} className="die" onClick={props.holdDie}>
      {props.value}
    </div>
  );
}
