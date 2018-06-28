import React from 'react';
import { connect } from 'react-redux'

class Fen extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>{this.props.fen}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    fen: state.fen,
});

const mapDispatchToProps = {
};

const FenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Fen);

export default FenContainer;  
