//function for getting data
const Data = require("../models/database");
exports.getData = async (req, res) => {
  const heading = req.headers.heading;

  const tab = req.headers.tab;

  //finding the appropriate data with respect to the module and tab number
  const response = await Data.find({ Module: heading, Tab: tab });
  //sending the response to client
  res.json(response);
};
//function for searching data
exports.searchData = async (req, res) => {
  const heading = req.headers.heading;
  //finding data with respect to heading
  const response = await Data.find({ heading: heading });
  //sending response to client
  res.json(response);
};
