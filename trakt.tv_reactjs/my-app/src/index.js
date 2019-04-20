import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import PopularMovies from './components/PopularMovies'
import HeaderBox from './components/HeaderBox'
 
ReactDOM.render(
    <HeaderBox />,
    document.getElementById('header-box')
)

ReactDOM.render(
    <PopularMovies />,
    document.getElementById('popularmovies-flex-row')
)


 
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
