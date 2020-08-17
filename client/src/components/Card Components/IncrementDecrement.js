import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const IncrementDecrement = (props) => {
  const handleIncrement = () => {
    props.setItemCounter(props.itemCounter + 1);
  };

  const handleDecrement = () => {
    if (props.itemCounter - 1 > 0) props.setItemCounter(props.itemCounter - 1);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleDecrement}>-</Button>
      <Button disabled>
        <span style={{ color: "red" }}>{props.itemCounter}</span>
      </Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default IncrementDecrement;
