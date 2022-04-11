import { setVideoSource } from "../store/reducers/playerSlice";
import { useSelector, useDispatch } from "react-redux";

const useVideoSource = (videoId) => {
  const dispatch = useDispatch();

  const originals = useSelector((state) => state.originals.data);
  const trends = useSelector((state) => state.trends.data);

  const video = [...trends, ...originals].find(
    ({ id }) => id === Number(videoId)
  );

  dispatch(setVideoSource(video));

  return video;
};

export default useVideoSource;
