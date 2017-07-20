/**
 * Created by dannyyassine on 2017-07-20.
 */

const NetworkService = (function () {

    let instance;
    
    function createInstance() {

    }

    return {
        shared: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }

})();

module.exports = NetworkService;