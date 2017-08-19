/**
 * Created by dannyyassine on 2017-07-14.
 */

import React from 'react';
import { connect } from 'react-redux';
import Player from './../containers/player';

class App extends React.Component {
    render() {
        return(
            <div>
                <Player/>
                <div id="app-content" className="app-content-style">
                    {this.props.children}
                </div>
            </div>
        );
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