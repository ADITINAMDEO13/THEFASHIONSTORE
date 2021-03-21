import React, { Component } from 'react'
// import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from './Title'
export default class Services extends Component {
    state = {
        services: [{

            title: "Designer cloths",
            info: 'lorem dnbcbwiud cwchwcuw cwucqud w ccquc u cquci!!!'
        }, {

            title: "free shipping",
            info: 'lorem dnbcbwiud cwchwcuw cwucqud w ccquc u cquci!!!'
        }, {

            title: "Your designs",
            info: 'lorem dnbcbwiud cwchwcuw cwucqud w ccquc u cquci!!!'
        }, {

            title: "Best Fit",
            info: 'lorem dnbcbwiud cwchwcuw cwucqud w ccquc u cquci!!!'
        }]
    }
    render() {
        return ( <
            div >
            <
            section className = "services" >
            <
            Title title = "services" > < /Title>  <
            div className = "services-center" > {
                this.state.services.map((item, index) => {
                    return <article key = { index }
                    className = "service" >
                        <
                        span > { item.icon } < /span> <
                    h6 > { item.title } < /h6> <
                    p > { item.info } < /p> < /
                    article >
                })
            } <
            /div> < /
            section > < /div >

        )
    }
}