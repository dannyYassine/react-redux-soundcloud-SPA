/**
 * Created by dannyyassine on 2017-07-14.
 */
const path = require('path');

module.exports = app => {

    /**
     * Front-end application
     */
    app.get('/*', (request, response) => {
        response.render('index.html');
    });

    app.use((request, response, err) => {
        response.render('notFound.html');
    });

};