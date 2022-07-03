import styled from "styled-components";


export const BaseButton=styled.button`
min-width: 120px;
width: auto;
height: 50px;
letter-spacing: 0.1px;
line-height: 50px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center; 
transition: 0.15s;
border:1px solid white;

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
`


export const GoogleSignInButton=styled(BaseButton)`
background-color: #4285f4;
color: white;

&:hover {
  background-color: #357ae8;
  border: none;
}
`

export const InvertedButton=styled(BaseButton)`
background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
`
/*.buttonContainer {
   
  
    &.googleSignIn {
     
    }
  
    &.inverted {
      
    }
  }
  */