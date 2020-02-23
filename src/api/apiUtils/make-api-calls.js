import axios from "axios";
import { serializeQueryParams } from "./api-utils";

const headers = {};
export default {
  makeGetRequest(path, callback, fail, params) {
    headers.Accept = "application/json";
    const url = path + serializeQueryParams(params);
    axios
      .get(url, { withCredentials: false, headers })
      .then(callback)
      .catch(fail);
  },
  makePostRequest(path, callback, fail, payload, params) {
    const url = path + serializeQueryParams(params);
    axios
      .post(url, payload, { withCredentials: false })
      .then(callback)
      .catch(fail);
  }
};
