import React, { Component } from "react"

class Pro extends Component {
    // method()
    render () {
        // this.method
        // place to add things that will determine what will be
    // displayed
        return <h1>Class Component</h1>
        // when using props we should have "this.props..."
    }
}

export default Pro;

function app () {
    return (
        <div></div>
    )
}
 

class app extends Component {
    render () {
        return <div></div>
    }
}

class App extends Component {

    constructor () {
        super ()
        this.state = {isLoggedIn: true}
    }

    render () {

        return <div>{this.state.isLoggedIn ? 'ya' : 'na'}</div>

    }

}

class App extends React.Component {

    constructor () {
        super ()
        this.state = {taskDone:false}
    }

    render () {

       return( <div></div> )
    }
}