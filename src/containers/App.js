import React from 'react';
import { connect } from 'react-redux';
import { setCursorPosition } from '../actions';
import Background from '../components/Background/Background';
import CursorAnimation from '../components/CursorAnimation/CursorAnimation';
import Header from '../components/Header/Header';
import ResultsList from '../components/ResultsList/ResultsList';
import Footer from '../components/Footer/Footer';
import 'normalize.css';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.x = null;
        this.y = null;
    }

    handleMouseMove = e => {
        this.x = e.nativeEvent.pageX;
        this.y = e.nativeEvent.pageY;

        this.props.setCursorPosition(this.x, this.y);
    }

    render() {
        return (
            <div className="app" onMouseMove={this.handleMouseMove}>
                <CursorAnimation />
                <Background />
                <div className="container">
                    <Header />
                    <div className="content">
                        <ResultsList />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect(null, { setCursorPosition })(App);