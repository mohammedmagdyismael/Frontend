import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'
import Traktlogoimage from './img/ILaaIYY0_400x400.png'



function HeaderBox(){
    
    return(
        <div className='header-box'> 
            <div className='header-box-logo'> 
                <img src={Traktlogoimage} alt= "traktlogo" className="logo" />
            </div>

            <div className='header-box-content'>
                <div className='heading-primary'>
                    <span className='heading-primary-main'>TRAKT</span>
                    <span className='heading-primary-sub'>Automatically track what you're watching.</span>
                </div>

                <a href='#' className='btn btn-white'  > Follow me </a>
                    
            </div>

            
        </div>
    )
}

export default HeaderBox