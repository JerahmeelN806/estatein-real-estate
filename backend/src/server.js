require("./config/env");

const app = require("./app");
const config = require("./config/env");

app.listen(config.port, "0.0.0.0", () => {
  console.log(`Estatein API listening on port ${config.port}`);
});