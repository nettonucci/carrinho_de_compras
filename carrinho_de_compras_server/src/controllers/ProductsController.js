var axios = require("axios");

module.exports = {
  async index(req, res) {
    const { cep } = req.body;
    console.log(cep);
    var config = {
      method: "get",
      url: "https://fakestoreapi.com/products/",
      headers: {}
    };

    axios(config)
      .then(function(response) {
        // console.log(response.data);
        return res.status(200).json(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
