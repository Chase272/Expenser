import { TOP_TRANSCTIONS } from "./Types";

const initialState = {
  Transactions: [],
};

const TranscationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOP_TRANSCTIONS:
        
      return {
        ...state,
        noCakes: state.noCakes - 1,
      };
    default:
      return state;
  }
};

export default TranscationReducer;
