import axios from "axios";

const BASE_URL = "https://devnet.underdogprotocol.com";

export default axios.create({
  baseURL: BASE_URL,
});
