const Mock = require("mockjs");

module.exports = {
  "GET /api/shop/all": (req, res) => {
    res.status(200).json({
      list: Mock.mock({
        "data|80-100": [
          {
            key: "@id",
            name: "@name",
            "age|11-99": 1,
            address: "@county(true)",
            tags: "@email"
          }
        ]
      })
    });
  }
};
