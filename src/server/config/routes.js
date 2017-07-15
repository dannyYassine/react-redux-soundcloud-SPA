/**
 * Created by dannyyassine on 2017-07-14.
 */

module.exports = app => {

    /**
     * Front-end application
     */
    app.get('*', (request, response) => {
        response.render('index.html');
    });

};