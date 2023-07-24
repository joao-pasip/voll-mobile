import { VStack, Image, Text, Box, Link } from 'native-base';
import Logo from '../assets/images/login/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Title } from '../components/Title';
import { InputLabel } from '../components/Input';
import { ButtonComponent } from '../components/Button';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' />
      <Title>
        Faça login em sua conta
      </Title>
      <Box>
        <InputLabel label='Email' placeholder='Insira seu endereço de email' />
        <InputLabel label='Senha' placeholder='Insira sua senha' secureTextEntry={true}/>
      </Box>
      <ButtonComponent children='Entrar' onPress={() => navigation.navigate('Tabs')}/>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text color="blue.500">Faça o seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  )
}