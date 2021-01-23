const HttpCodes = require("http-codes");
const { Topic, Broadcast } = require("../models");

module.exports = {
  broadcast: async (req, res) => {
    const { topic, message } = req.body;

    try {
      const topicInstance = Topic.findOne({
        where: { id: topic },
      });

      if (topicInstance) {
        const record = await Broadcast.create({
          topicId: topic,
          message,
        });

        return res.status(HttpCodes.OK).json(record);
      } else {
        return res
          .status(HttpCodes.BAD_REQUEST)
          .json({ msg: "No topic exists." });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(HttpCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Internal server error" });
    }
  },
};
