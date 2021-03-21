import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
export default function Home() {
    return ( < div >
        <
        Hero >
        <
        Banner title = "Fashion Clothing"
        subtitle = "Everything starting @ $299" >
        <
        Link to = '/rooms'
        className = "btn-primary" >
        Visit Catalogue < /Link> < /
        Banner > <
        /Hero>  <
        Services > < /Services>< /
        div >
    )
}