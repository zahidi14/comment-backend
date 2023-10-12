const user = require("../model/userModel");
exports.getUser = async (req, res, next) => {
  try {
    await user
      .find()
      .then((result) => {
        res.status(200).json({
          message: "data fetched",
          data: result,
        });
      })
      .catch((err) => {
        console.log("error gettting data", err);
        res.status(400).json({
          message: "error getting data",
          error: err,
        });
      });
  } catch (error) {
    console.log("user contoler", error);
  }
};
