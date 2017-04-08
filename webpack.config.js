module.exports = {
	watch: true,
    entry: "./src/test-game.js",
    output: {
        path: "js",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {exclude: /node_modules/, loader: "babel-loader"}
      ]
    }
};
