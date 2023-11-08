const UserRouter = require("./UserRouter");

const routes = (app) => {
  app.get("api/user", UserRouter);
};

module.exports = routes;
