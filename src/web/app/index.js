/**
 * Created by dannyyassine on 2017-07-14.
 */

import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return(
            <div>
                {this.children}
            </div>
        )
    }
}

App.propTypes = {

};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state) => {

};

const mapDispatchToProps = {

};

export default connect(
    null,
    null
)(App);