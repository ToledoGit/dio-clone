import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import {
  Container,
  Title,
  Row,
  Column,
  Wrapper,
  TitleLogin,
  FazerLogin,
  JaTenho,
  SubtitleLogin,
  Description,
} from "./styles";

const schema = yup.object({
  email: yup.string().email('Email não é válido').required('Campo obrigatório'),
  password: yup.string().min(4, 'A senha deveconter no mínimo 4 caracteres').required('Campo obrigatório'),
  nome: yup.string().min(5,'Digite o seu nome completo').required(),
}).required();

const SignUp = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login');
}
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode:'onSubmit',
  });

  const onSubmit = async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1) {
        navigate('/feed');
      } else {
        alert ('Email ou senha inválido')
      }
    }catch{
      alert('Houve um erro, tente novamente')
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              
            <Input
                name="nome"
                errorMessage={errors?.nome?.message}
                control={ control }
                placeholder="Nome completo"
                leftIcon={<MdPerson/>}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={ control }
                placeholder="E-mail"
                leftIcon={<MdEmail/>}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={ control }
                placeholder="Password"
                type="password"
                leftIcon= {<MdLock/>} 
              />

              <Button title="Criar minha conta" variant="secondary" type="submit" />
            </form>
            <Description>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
            </Description>
              
            <Row>
              <JaTenho>Já tenho conta. </JaTenho>
                <FazerLogin onClick={handleClickSignIn}>Fazer login</FazerLogin>
              
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
