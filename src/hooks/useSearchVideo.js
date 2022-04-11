import { setSearchVideo } from "../store/reducers/searchSlice";
import { useSelector, useDispatch } from "react-redux";

const useSearchVideo = () => {
  const dispatch = useDispatch();
  const originals = useSelector((state) => state.originals.data);
  const trends = useSelector((state) => state.trends.data);
  const results = useSelector((state) => state.search.results);

  const handleSearch = (term) => {
    const results = [...trends, ...originals].filter(({ title }) =>
      title.toLowerCase().includes(term.toLowerCase())
    );
    dispatch(setSearchVideo({ results, term }));
  };

  return { handleSearch, results };
};

export default useSearchVideo;
