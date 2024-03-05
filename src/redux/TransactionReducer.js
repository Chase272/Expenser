import {
  FETCH_TOP_TRANSACTIONS_FAILURE,
  FETCH_TOP_TRANSACTIONS_REQUEST,
  FETCH_TOP_TRANSACTIONS_SUCCESS,
} from "./TransactionTypes";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const TranscationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TOP_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_TOP_TRANSACTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TranscationReducer;
