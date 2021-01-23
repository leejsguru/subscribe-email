const HttpCodes = require("http-codes");
const { Topic, Broadcast, sequelize } = require("../models");

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

        const topicInstance = await Topic.findOne({
          where: { id: topic },
        });

        if (topicInstance) {
          let messageIds = topicInstance.messageIds
            ? JSON.parse(topicInstance.messageIds)
            : [];
          
          await Topic.update(
            {
              messageIds: JSON.stringify([...messageIds, record.id]),
            },
            { where: { id: topic } }
          );
        }

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

  listAll: async (req, res) => {
    try {
      let query = `
        SELECT broadcasts.id, message, topic, emailList FROM broadcasts JOIN topics ON broadcasts.topicId = topics.id
      `;

      const result = await sequelize.query(query);

      return res.status(HttpCodes.OK).json({ messages: result[0] });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Internal server error" });
    }
  },
};
