import styled from 'styled-components'

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
export const CartItems= styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
&::-webkit-scrollbar {
  display: none;
}
`
/*
.cartDropdownContainer {
   
    
  
    .emptyMessage {
      font-size: 18px;
      margin: 50px auto;
    }
  
    .cartItems {
      
      &::-webkit-scrollbar {
        display: none;
      }
      
    }
  
    button {
      margin-top: auto;
    }
  }
  */
