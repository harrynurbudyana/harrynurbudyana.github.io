import { Realtime } from "ably";

const keyAPI = new Realtime(process.env.REACT_APP_ABLY_API_KEY)

export default keyAPI;