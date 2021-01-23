import api from "../services/api";
import qs from "querystring";

export const subscribeEmail = (email, topic, callback) => {
  api
    .post(
      "api/subscribe",
      qs.stringify({
        email,
        topic,
      })
    )
    .then((res) => callback(null, res))
    .catch((error) => {
      callback(error, null);
    });
};
