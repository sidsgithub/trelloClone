import { CONSTANTS } from "../actions";
let ListId = 2;
let cardID = 5;
const initialState = [
  {
    title: "NEW",
    id: `list-${0}`,
    cards: [
    ],
  },
  {
    title: "DONE",
    id: `list-${1}`,
    cards: [
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${ListId}`,
      };
      ListId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:{
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;}

      case CONSTANTS.DRAG_HAPPENED:
          const {droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd} = action.payload;
          const newState = [...state];
          // in the same list
          if(droppableIdStart === droppableIdEnd ){
              const list = state.find(list=>droppableIdStart===list.id)
              const card = list.cards.splice(droppableIndexStart, 1)
              list.cards.splice(droppableIndexEnd,0,...card )
          }
          // in other list.
          if(droppableIdStart !== droppableIdEnd ){
              //find the list where the drag happened.
              const listStart = state.find(list => droppableIdStart === list.id);
              //pull out the card from this list.
              const card = listStart.cards.splice(droppableIndexStart,1);
              //find the list where the drag ended.
              const listEnd = state.find(list=>droppableIdEnd === list.id);
              //put the card in the new list.
              listEnd.cards.splice(droppableIndexEnd,0,...card);

          }

          return newState;

    default:
      return state;
  }
  

};

export default listReducer;
