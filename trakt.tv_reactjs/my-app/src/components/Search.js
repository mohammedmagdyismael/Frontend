import React, {Component} from 'react';  
import styled from 'styled-components'
import DropDownSearch from './DropdownSearch'


const SearchBarContainer = styled.div `
    display: block;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 1px #a79e9e ;
    padding-left: 3%;
    padding-top: 2px;
    padding-bottom: 5px;
`;

const SearchBarTitle = styled.label `
    display : block;
    font-family: "Lato", sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: black;
    margin-top: 5px;
    margin-left: 5px; 
`;

const SearchBarInput = styled.input`
    display: inline;
    background-color:white;
    height:45px;
    width: 70%;
    border: solid;
    border-width:0px 0px 0px 0px;
    box-shadow: 0px 2px 0px 0px #cac0c0;
    padding-left:9px;
    cursor:pointer; 

    :focus{
        outline: none;
    }
`;

const DropDownSearchContainer = styled.div`
    display:inline;
`;


class Search extends React.Component{


    constructor(){
        super();
        this.state = {
            term : ''
        };
    }


    onInputChange = (event)=>{
        this.setState({
            term : event.target.value
        }, () => {
            this.props.onFormSubmit(this.state.term); 
        }); 

    }

    onFormSubmit = (event)=>{
        event.preventDefault();

        
    }

    render(){
        return(
            <SearchBarContainer>
                <form onSubmit={this.onFormSubmit}>
                    
                    <SearchBarTitle>
                        Search Movie:
                    </SearchBarTitle>
                    
                    <SearchBarInput 
                        value={this.state.term} 
                        onChange={this.onInputChange} 
                        placeholder='Enter Movie Name ...' 
                        type='text'>
                    </SearchBarInput>
                </form>
            </SearchBarContainer>
        )
        }
}

export default Search