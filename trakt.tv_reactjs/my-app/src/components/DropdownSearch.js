import React, {Component} from 'react';
import styled from 'styled-components'

const DropBtn = styled.button `
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  `;
  
 const DropDown = styled.div `
    position: relative;
    display: inline-block;
    :hover{display: block;}
  `;
  
  const DropDownContent = styled.div `
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  `;
  
  const LItem = styled.a `
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    :hover {
        background-color: #ddd;
    }
  `;
  

class DropDownSearch extends React.Component{

    render(){
        return(
            <DropDown>
            <DropBtn>Dropdown</DropBtn>
            <DropDownContent>
                <LItem href="#">Link 1</LItem>
                <LItem href="#">Link 2</LItem>
                <LItem href="#">Link 3</LItem>
            </DropDownContent>
            </DropDown>
        )
    }
}


export default DropDownSearch