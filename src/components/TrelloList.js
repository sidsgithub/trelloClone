import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided, ) => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
          <h3>{title}</h3>
          {cards.map((card,index) => (
            <TrelloCard key={card.id} index={index} text={card.text} id={ card.id} />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder} {/* creates a white placeholdr when we drap a card */}
         
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};
export default TrelloList;
