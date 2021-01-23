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

export const broadcastMessage = (topic, message, callback) => {
  api
    .post(
      "api/broadcast",
      qs.stringify({
        topic,
        message,
      })
    )
    .then((res) => callback(null, res))
    .catch((error) => {
      callback(error, null);
    });
};

export const getBroadcastHistory = (callback) => {
  api
    .get("api/broadcast")
    .then((res) => callback(null, res.data.messages))
    .catch((error) => {
      callback(error, null);
    });
};
