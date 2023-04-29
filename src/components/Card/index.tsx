import React from "react";
import { FiThumbsUp } from 'react-icons/fi';
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";
const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src="https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2017/12/machine-learning.jpeg"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
                    <div>
                        <h4>Pablo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4> Projeto para curso de HTML e CSS</h4>
                    <p> Projeto feito o curso de HTML e CSS no bootcamp dio do Global Avanade... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS # JavaScript</h4>
                    <p>
                        <FiThumbsUp />
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card };