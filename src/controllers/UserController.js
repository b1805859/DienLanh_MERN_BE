const UserService = require("../services/UserService");

class UserController {
  createUser = async (req, res) => {
    try {
      console.log(req.body);
      const res = await UserService.createUser();
      return res.status.json(res);
    } catch (e) {
      return res.status(404).json({ message: e });
    }
  };
}

module.exports = new UserController();
