import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <img className='footerImg' src="/images/footerImg.png" alt="" />
            <p>@2019 MoneyManager. All Rights Reserved &copy;</p>
        </footer>
    )

}

export default Footer;