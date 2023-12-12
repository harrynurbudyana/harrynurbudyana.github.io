import { Realtime } from "ably";

const Alby = new Realtime(process.env.REACT_APP_ABLY_API_KEY);

export default Alby;
