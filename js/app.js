import React, { Component, PropTypes } from 'react'
// import * as PagesActions from './actions/pages'

import { Header } from './components/header'

// import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import styles from '../css/main.css'


class App extends Component {
    static propTypes = {
    }

    render() {
        return <div>
            <Header/>
            {this.props.children}
        </div>
    }
}


export default App;