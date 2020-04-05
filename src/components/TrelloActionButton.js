import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import { addList, addCard } from '../actions'
import { useDispatch } from 'react-redux';

function TrelloActionButton({ list,listID }) {
  const [formOpen, setformOpen] = useState(false);
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const buttonText = list ? "Add another list " : "Add another card ";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "lightBlue" : "inherit";

  const renderForm = () => {
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for the card.";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card style={{overflow:"visible",minHeight:80,minWidth:272,padding:"6px 8px 2px"}}>
          <TextareaAutosize
            placeholder={placeholder}
            onBlur={closeForm}
            autoFocus
            value={text}
            onChange={handleInputChange}
            style={{
                resize:"none",
                width:"100%",
                outline:"none",
                border:"none"
            }

            }
          />
        </Card>
        <div style={styles.formButtonGroup}>
            <Button onMouseDown={list ? handleAddList : handleAddCard } varient="contined" style={{color:"white",backgroundColor:"#5aac44"}}>
            {buttonTitle}{" "}
            </Button>
            <Icon style={{marginLeft:8,curson:"pointer"}}>close</Icon>
        </div>
      </div>
    );
  };

  const openForm = () => {
    setformOpen(true);
  };

  const closeForm = () => {
    setformOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value)
  };

  const handleAddList=()=>{
       if(text){
           setText("");
           dispatch(addList(text))
       }
       return;
  }
  const handleAddCard=()=>{
    if(text){
        setText("");
        dispatch(addCard(listID,text))
    }
    return;
}

  const renderaddButton = () => {
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  return <div>{formOpen ? renderForm() : renderaddButton()}</div>;
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup:{
       marginTop : 8,
       display : "flex",
       alignItems : "center"
  }
};

export default TrelloActionButton;
