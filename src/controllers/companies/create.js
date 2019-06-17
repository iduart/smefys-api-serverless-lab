require("dotenv").config();
const { connect } = require("../../helpers/db");
const Company = require("../../models/company");

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connect();
    const body = JSON.parse(event.body);
    const response = await Company.create(body);
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err, msg: "there was an error" })
    };
  }
};
