import { Realtime } from "ably";

const Alby = () => {
  const alby = new Realtime(process.env.REACT_APP_ABLY_API_KEY);
  return alby;
};

export default Alby();
