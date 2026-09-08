require("./config/env");

const app = require("./app");
const config = require("./config/env");

app.listen(config.port, () => {
  console.log(`Estatein API listening on port ${config.port}`);
});
