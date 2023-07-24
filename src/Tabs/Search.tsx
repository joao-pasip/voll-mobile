import { VStack, ScrollView, Box } from "native-base"
import { InputLabel } from "../components/Input"
import { ButtonComponent } from "../components/Button"
import { Title } from "../components/Title"
import { CardConsultation } from "../components/CardConsultation"

export default function Search() {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <InputLabel placeholder="Digite a especialidade" />
          <InputLabel placeholder="Digite sua localização" />
          <ButtonComponent mt={3} mb={3}>Buscar</ButtonComponent>
        </Box>

        <Title color="blue.500" alignSelf="center">Resultado da Busca</Title>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsultation 
              especialidade="Cardiologia"
              foto="https://avatars.githubusercontent.com/u/94376727?v=4"
              nome="Dr. Pasip"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}