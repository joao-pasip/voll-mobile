import { VStack, Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base';
import Logo from '../assets/images/login/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Title } from '../components/Title';
import { InputLabel } from '../components/Input';
import { ButtonComponent } from '../components/Button';
import React from 'react';
import { sections } from '../utils/sections';

export default function SignUp() {

  const [numSection, setNumSection] = React.useState(0);

  function nextSection() {
    if(numSection < sections.length - 1) {
      setNumSection(numSection + 1)
    }
  }

  function returnSection() {
    if(numSection > 0) {
      setNumSection(numSection - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo Voll' alignSelf="center"/>
      <Title>
        {sections[numSection].title}
      </Title>
      <Box>
        {sections[numSection]?.inputs?.map((input) => {
          return <InputLabel label={input.label} placeholder={input.placeholder} key={input.id} secureTextEntry={input.secureTextEntry}/>
        })}
      </Box>
      <Box>
       { numSection == 2 && <Text color="blue.800" fontWeight="bold" fontSize="md" mt={2} mb={2}>
          Selecione o plano:
        </Text>}
        {sections[numSection].checkbox.map((checkbox) => {
          return <Checkbox key={checkbox.id} value={checkbox.value}>{checkbox.value}</Checkbox>
        })}
      </Box>
      {numSection > 0 && <ButtonComponent bgColor="gray.400" onPress={() => returnSection()} children='Voltar' />}
      {
        numSection == 0 ? 
        <ButtonComponent mb={20} onPress={() => nextSection()} children='Avançar' /> 
        : <ButtonComponent mt={4} mb={20} onPress={() => nextSection()} children='Avançar' />
      }
    </ScrollView>
  )
}