import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, id, index }) => {
  return (
    <div>
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card style={styles.cardContainer}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    </div>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TrelloCard;
