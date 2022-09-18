import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Navbar } from 'react-bootstrap';


export const NavigationContainer = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 320px;
    background-color: #fff;
  /* ${(props) => (props.extendNavBar ? '80vh' : '80px')
};  */
  background-color: #0EBFE9;
  display: flex; 
  flex-direction: column;
  @media (min-width: 800px) {
    height: 80px;}
`

export const NavLinksContainer = styled.div`
width: 50%; 
height: 100%; 
display: flex; 
align-items: center; 
justify-content: flex-end;
.nav-link {
  padding: 10px 15px; 
  cursor: pointer;
}`


export const HeaderLogo = styled.img` 
height: auto;
max-width: 68px;
border: .2em solid #021a40;
margin-top:5px;
margin-left:5px;`

export const LeftContainer = styled.div`
flex: 95%;
display: flex;
align-items: center;
justify-content: flex-end;
padding-left: 2em;
background-color: #0EBFE9;
`;
export const RightContainer = styled.div`
flex: 5%;
display: flex;
justify-content: flex-end;
background-color: #0EBFE9;
`

export const NavBarInnerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 80px;
`
export const NavBarLinkContainer = styled.div`
display: flex;
`
export const OpenLinksButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 70px;
height: 50px;
border-radius: 10%;
background-color: #0EBFF9;
color: white;
font-size: 1.5em;
cursor: pointer;
@media (min-width: 800px) {      
  display: none;
  }

`
export const NavBarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media ( min-width: 800px )
{
  display: none;
}
`
export const NavBarLink = styled(Link)`
  /* padding: 10px 15px; */
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin: 10px;
  &:hover {
    color: #021a40;
  }
  @media (max-width: 800px) {      
  display: none;
  }
`
export const NavBarLinkExtended = styled(Link)`
  /* padding: 10px 15px; */
  font-size: 2em;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin: 10px;
`
export const SignOutDiv = styled.div`
  /* padding: 10px 15px; */
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin: 10px;
  &:hover {
    color: #021a40;
  }
`
