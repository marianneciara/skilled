import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import './Button.scss';

class Button extends React.Component {
    renderButtonText = () => {
        if (this.props.content === 'icon') {
            return <IoMdArrowRoundForward />;
        } else {
            return this.props.content;
        }
    };

    render() {
        return (
            <button className={`btn ${this.props.style}`}>
                {this.renderButtonText()}
            </button>
        );
    }
};

Button.defaultProps = {
    style: 'primary'
};

export default Button;