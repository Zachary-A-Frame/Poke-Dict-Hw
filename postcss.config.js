const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer"), tailwindcss("./tailwind.config.js")],
};
