import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Title } from "../components/Title";


export default function Person() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>
        <Avatar size="xl" source={{ uri: 'https://avatars.githubusercontent.com/u/94376727?v=4'}} mt={5}/>

        <Title color="blue.500">Informações pessoais</Title>
        <Title fontSize="lg" mb={1}>João Pasip</Title>
        <Text>26/05/2000</Text>
        <Text>Bom Jesus da Lapa/BA</Text>

        <Divider mt={5}/>

        <Title color="blue.500" mb={1}>Histórico médico</Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}