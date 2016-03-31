import React, { Component, PropTypes } from 'react'
// import * as PagesActions from './actions/pages'

import { Header } from './components/header'

import styles from '../css/main.css'


export class App extends Component {
    static propTypes = {
    }

    render() {
        return <div>
            <Header/>
            {this.props.children}
        </div>
    }
}