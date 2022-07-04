import styled from "styled-components";

export const CartDropdownContainer = styled.div`
position: absolute;
width: 261px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 90px;
right: 40px;
z-index: 5;
align-items: center;
justify-content: center;
`

export const CartItems =styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 8px;
      border-radius:30px;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(0,0,0,0);
      border-radius: 10px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
    
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
