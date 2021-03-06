const HttpCodes = require("http-codes");
const { Topic } = require("../models");

module.exports = {
  create: async (req, res) => {
    const { email, topic } = req.body;

    try {
      // find or create
      const [topicInstance, created] = await Topic.findOrCreate({
        where: { smallTopic: topic.toLowerCase() },
      });

      let emailList = topicInstance.emailList
        ? JSON.parse(topicInstance.emailList)
        : [];
      if (created || !topicInstance.emailList) {
        emailList = [email];
      } else if (emailList.includes(email)) {
        return res.status(HttpCodes.BAD_REQUEST).json({
          msg: "Email subscribed to the topic.",
        });
      } else {
        emailList = [...emailList, email];
      }
      await Topic.update(
        {
          emailList: JSON.stringify(emailList),
          topic,
        },
        {
          where: {
            id: topicInstance.id,
          },
        }
      );

      const result = await Topic.findOne({ id: topicInstance.id });

      return res.status(HttpCodes.OK).json({
        topic: result,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Internal server error" });
    }
  },
  listAll: async (req, res) => {
    try {
      const result = await Topic.findAll();
      return res.status(HttpCodes.OK).json({
        topics: result,
      });
    } catch (error) {
      console.log(error);
      return res
        .status(HttpCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "Internal server error" });
    }
  },
};
