class UserService {
  createUser = async (req, res) => {
    return new Promise((resolve, reject) => {
      try {
        resolve({});
      } catch (e) {
        reject(e);
      }
    });
  };
}
module.exports = new UserService();
