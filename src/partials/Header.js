import {Row, Col, Navbar, Container, Nav, DropdownButton, Dropdown} from 'react-bootstrap';
import Logo from 'assets/images/logo.png';
import Language from 'assets/images/language.svg';
import styled from 'styled-components'

const HeaderMain = styled.div`
    padding: 8px 0;
    border: 1px solid #e0e1e4;
    @media(max-width:479px){
        padding: 13px 0;
    }
`;
const Flex = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center
`;
const LogoMain = styled.a`
    margin-right:35px;
    @media(max-width:991px){
        margin-right:25px;
    }
    @media(max-width:767px){
        margin-right:10px;
    }
`;

const NavLang = styled(Flex)`
    justify-content: flex-end;
    .main-nav{
        .navbar-nav{
            align-items: center;
            a{
                font-size:12px;
                color: #666666;
                margin: 0 10px;
                &:hover{
                    color: #0052cc;
                }
                &.signUp-btn{
                    height: 35px;
                    border-radius: 10px;
                    background-image: linear-gradient(90deg, #0051cb 0%, #0066ff 100%);
                    // background: #0056d5; 
                    // background: -moz-linear-gradient(left,  #0056d5 0%, #0064f8 100%); 
                    // background: -webkit-linear-gradient(left,  #0056d5 0%,#0064f8 100%); 
                    // background: linear-gradient(to right,  #0056d5 0%,#0064f8 100%); 
                    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0056d5', endColorstr='#0064f8',GradientType=1 ); 
                    // border-radius: 4px;
                    color: #fff;
                    padding: 7px 16px;
                    border: 1px solid #0052cc;
                    &:hover{
                        background: transparent;
                        color: #0052cc
                    }
                }
            }
        }
    }
    .nav-language{
        margin-left: 45px;
        @media(max-width:991px){
            margin-left: 30px;
        }
        @media(max-width:767px){
            margin-left: 15px;
        }
        button{
            background: transparent;
            border: 0;
            font-size: 14px;
            font-weight: 600;
            img{
                margin-right: 6px
            }
            &:hover{
                color: #0052cc
            }
        }
    }
`;

const CategoryBtn = styled.div`
    button{
        background: transparent !important;
        border: 0;
        color: #666666 !important;
        box-shadow:none !important;
        font-size: 15px;
        @media(max-width:767px){
            font-size: 13px;
        }
        &::after{
            content: "\f078";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            border: 0;
            font-size: 13px;
            margin:3px 0 0px 10px;
            vertical-align: top;
            color: #858585;
        }
        @media(max-width:767px){
            font-size: 12px;
    margin: 2px 0 0px 5px;
        }
        &:hover, &:focus{
            color: #0052cc;
            &::after{
                color: #0052cc
            }
        }
    }
`;

export default function Header(){


    return(
        <HeaderMain className="header-cont">
            <Container>
                <Row className='align-items-center'>
                    <Col md="auto" className='main-logo'>
                        <Flex>
                            <LogoMain href="/">
                                    <img src={Logo} />
                            </LogoMain>
                            <CategoryBtn>
                                <DropdownButton id="dropdown-item-button" title="Categories">
                                    <Dropdown.Item as="button">Categories 1</Dropdown.Item>
                                    <Dropdown.Item as="button">Categories 2</Dropdown.Item>
                                    <Dropdown.Item as="button">Categories 3</Dropdown.Item>
                                </DropdownButton>
                            </CategoryBtn>
                        </Flex>
                    </Col>
                    <Col className='head-menu'>
                        <NavLang>
                            <div className='main-nav'>
                                <Navbar expand="lg">
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Nav.Link href="#">Home</Nav.Link>
                                            <Nav.Link href="#">Support</Nav.Link>
                                            <Nav.Link href="#">Login</Nav.Link>
                                            <Nav.Link href="#" className="signUp-btn">Signup</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                            <div className='nav-language'>
                                <button>
                                    <img src={Language} />
                                    <span>En</span>
                                </button>
                            </div>
                        </NavLang>
                    </Col>
                </Row>
            </Container>
        </HeaderMain>
    )
}
