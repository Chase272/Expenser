import {
  FETCH_TOP_TRANSACTIONS_FAILURE,
  FETCH_TOP_TRANSACTIONS_REQUEST,
  FETCH_TOP_TRANSACTIONS_SUCCESS,
} from "./TransactionTypes";

export const fetchTopTransactionsRequest = () => {
  return {
    type: FETCH_TOP_TRANSACTIONS_REQUEST,
  };
};

export const fetchTopTransactionsSuccess = (data) => {
  return {
    type: FETCH_TOP_TRANSACTIONS_SUCCESS,
    payload: data,
  };
};

export const fetchTopTransactionsFailure = (error) => {
  return {
    type: FETCH_TOP_TRANSACTIONS_FAILURE,
    payload: error,
  };
};

export const fetchTopTransactions = () => {
  return (dispatch) => {
    dispatch(fetchTopTransactionsRequest);
    fetch("http://localhost:3001/top-transactions")
      .then((response) => response.json())
      .then((transactions) => {
        dispatch(fetchTopTransactionsSuccess(transactions));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTopTransactionsFailure(errorMsg));
      });
  };
};
// useEffect(() => {
//   fetch("http://localhost:3001/top-transactions")
//     .then((response) => response.json())
//     .then((data) => setTransactions(data))
//     .catch((error) => console.log(error));
// }, []);
