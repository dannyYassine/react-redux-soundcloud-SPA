/**
 * Created by dannyyassine on 2017-07-14.
 */

import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello world</h1>
            </div>
        )
    }
}

HomePage.propTypes = {

};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state) => {

};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);