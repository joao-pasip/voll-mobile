import { VStack, Text, Divider, ScrollView } from "native-base"
import { CardConsultation } from "../components/CardConsultation"
import { Title } from "../components/Title"
import { ButtonComponent } from "../components/Button"

export default function Consultation() {
  return (
    <ScrollView p={5}>
      <Title color="blue.500">Minhas consultas</Title>
      <ButtonComponent mt={5} mb={5}>Agendar nova consulta</ButtonComponent>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Title>
      <CardConsultation 
        nome="Dr. João Pasip"
        foto="https://avatars.githubusercontent.com/u/94376727?v=4"
        especialidade="Cardiologista"
        data="26/05/2023"
        foiAgendado
      />

      <Divider mt={5}/>

      <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Title>
      <CardConsultation 
        nome="Dr. João Pasip"
        foto="https://avatars.githubusercontent.com/u/94376727?v=4"
        especialidade="Cardiologista"
        data="26/05/2023"
        foiAtendido
      />
      <CardConsultation 
        nome="Dr. João Pasip"
        foto="https://avatars.githubusercontent.com/u/94376727?v=4"
        especialidade="Cardiologista"
        data="26/05/2023"
        foiAtendido
      />
      <CardConsultation 
        nome="Dr. João Pasip"
        foto="https://avatars.githubusercontent.com/u/94376727?v=4"
        especialidade="Cardiologista"
        data="26/05/2023"
        foiAtendido
      />
    </ScrollView>
  )
}