const path = require("path");

module.exports = {
    resolve: {
        alias: {
            services: path.join(__dirname, "src", "services", "mocks")
        }
    }
};
