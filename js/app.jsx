import React, { Component, PropTypes } from 'react';

import Header from './components/header.jsx';
import styles from '../css/main.css';

class App extends Component {
    render() {
        return <div>
            <Header/>
            {this.props.children}
        </div>
    }
}

export default App
