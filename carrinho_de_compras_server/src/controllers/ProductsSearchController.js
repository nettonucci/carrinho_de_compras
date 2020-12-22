var axios = require("axios");

module.exports = {
  async index(req, res) {
    const { category } = req.body;
    var config = {
      method: "get",
      url: "https://fakestoreapi.com/products/",
      headers: {}
    };

    axios(config)
      .then(function(response) {
        const api = response.data;
        let itens = [];
        api.forEach(val => {
          if (Object.keys(val).length >= 1) {
            if (val.category === category) {
              itens.push(val);
            }
          }
        });
        // console.log(itens);
        return res.status(200).json(itens);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
