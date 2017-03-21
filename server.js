var express= require('express');
var path= require('path');
var bodyParser= require('body-parser');

var webpack= require('webpack');
var webpackMiddleware= require('webpack-dev-middleware');
var webpackHotMiddleware= require('webpack-hot-middleware');
var webpackConfig= require('./webpack.config.dev');

// var users= require('./routes/users');
// var auth= require('./routes/auth');
// var events= require('./routes/events');

let app = express();

app.use(bodyParser.json());

// app.use('/api/users', users);
// app.use('/api/auth', auth);
// app.use('/api/events', events);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './react/index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
