import { ADD_POSITIONS } from "./positions_action";

export const positionsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
