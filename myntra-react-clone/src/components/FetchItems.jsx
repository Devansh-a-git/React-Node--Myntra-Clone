import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/items";
import { fetchStatusActions } from "../store/fetchStatusSlice";

export default function FetchItems() {
  const fetchObj = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchObj.fetchDone) return;
    else {
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusActions.setCurrentlyFetching());
      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchStatusActions.setFetchDone());
          dispatch(fetchStatusActions.setFetchingFinished());
          dispatch(itemsActions.addInitialItems(data.items[0]));
        });

      return () => {
        controller.abort();
      };
    }
  }, []);

  return <></>;
}
