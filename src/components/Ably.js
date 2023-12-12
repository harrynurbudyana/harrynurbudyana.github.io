import { Realtime } from "ably";

const Alby = () => {
  return Realtime(process.env.REACT_APP_ABLY_API_KEY);
};

export default Alby();
