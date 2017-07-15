/**
 * Created by dannyyassine on 2017-07-14.
 */

const express       = require('express');
let app             = express();
let bodyParser      = require('body-parser');
let path            = require('path');
let nunjucks        = require('nunjucks');
/**
 * App Configuration
 */
app.use(express.static(path.join(__dirname, '../..', '/dist')));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

/**
 * Nunjucks for serving html pages
 */
nunjucks.configure(path.join(__dirname, '..', '/core/views'), {
    autoescape: true,
    express: app
});

module.exports = app;
