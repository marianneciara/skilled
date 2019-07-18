import React from 'react';
import { connect } from 'react-redux';
import './CursorAnimation.scss';

class CursorAnimation extends React.Component {
    render() {
        return (
            <div className="cursor" style={{
                left: `${this.props.cursorPosition.x}px`,
                top: `${this.props.cursorPosition.y}px`
            }}>
                <div className="cursor__element"></div>
            </div>
        );
    }
}

const mapStateToProps = ({ cursorPosition }) => {
    return {
        cursorPosition
    }
};

export default connect(mapStateToProps)(CursorAnimation);