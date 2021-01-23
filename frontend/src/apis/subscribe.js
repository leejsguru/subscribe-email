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

export const getTopics = (callback) => {
  api
    .get("api/topic")
    .then((res) => callback(null, res.data.topics))
    .catch((error) => {
      callback(error, null);
    });
};
