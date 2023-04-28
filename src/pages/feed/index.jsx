import { Link } from 'react-router-dom';
import Banner from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header'

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
            <UserInfo percentual={80} nome="Daniel Toledo" image="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
            <UserInfo percentual={67} nome="Daniel Toledo" image="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
            <UserInfo percentual={58} nome="Daniel Toledo" image="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
            <UserInfo percentual={50} nome="Daniel Toledo" image="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
            <UserInfo percentual={35} nome="Daniel Toledo" image="https://media.licdn.com/dms/image/C4E03AQF0E3bM2QMY8A/profile-displayphoto-shrink_800_800/0/1517469696898?e=1687996800&v=beta&t=sAwUroktzNyLR0aOYjxVkoSgus_wcjn4SAbOGA797JU"/>
        </Column>
    </Container>
</>)
}

export { Feed };