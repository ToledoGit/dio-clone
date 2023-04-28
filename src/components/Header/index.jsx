import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png"
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {

    const navigate = useNavigate();
    const handleClickHome = () => {
    navigate('/');
    }
    const handleClickSignUp = () => {
        navigate('/signup');
    }
    const handleClickSignIn = () => {
        navigate('/login');
    }
    return (<>
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo" onClick={handleClickHome} />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
                        ) : (

                            <>
                        <MenuRight onClick={handleClickHome}>Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" onClick={handleClickSignUp}/>
                        </>
                        )}
                </Row>
            </Container>
        </Wrapper>
    </>)
}

export { Header }