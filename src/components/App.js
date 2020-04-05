import React from "react";
import TrelloList from "./TrelloList";
import { useSelector } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import {useDispatch} from 'react-redux';

function App() {
  const { lists } = useSelector((state) => ({ lists: state.lists }));
  const dispatch = useDispatch();

  console.log("DFSFDS", { lists });

  const onDragEnd=(result)=>{
     // reordering logic
     const { destination, source, draggableId } = result;
     if(!destination){
       return;
     }
     dispatch(sort(
       source.droppableId,
       destination.droppableId,
       source.index,
       destination.index,
       draggableId
     ))

  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
      <h2>hello</h2>
      <div style={styles.listContainer}>
        {lists.map((list) => (
          <TrelloList listID = {list.id} key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list/>
      </div>
      </DragDropContext>
    </div>
  );
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default App;
