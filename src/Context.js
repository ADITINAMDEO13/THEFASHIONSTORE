import React, { Component } from 'react'


const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {

    }
    render() {
        return ( <div><RoomContext.Provider value = "hello" > { this.props.children } </RoomContext.Provider></div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };