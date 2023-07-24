import Consultation from "../Tabs/Consultation"
import Home from "../Tabs/Home"
import Person from "../Tabs/Person"
import Search from "../Tabs/Search"

export const sections = [
  {
    id: 1,
    title: 'Insira seus dados básicos',
    inputs: [
      {
        id: 1,
        label: 'Nome',
        placeholder: 'Digite seu nome completo'
      },
      {
        id: 2,
        label: 'Email',
        placeholder: 'Digite seu email'
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Digite sua senha',
        secureTextEntry: true
      },
      {
        id: 4,
        label: 'Repita a senha',
        placeholder: 'Digite sua senha',
        secureTextEntry: true
      }
    ],
    checkbox: [],
  },
  {
    id: 2,
    title: 'Agora, mais alguns dados sobre você: ',
    inputs: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Insira seu CEP'
      },
      {
        id: 2,
        label: 'Endereço',
        placeholder: 'Insira seu endereço'
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Insira seu número'
      },
      {
        id: 4,
        label: 'Complemento',
        placeholder: 'Insira seu complemento'
      },
      {
        id: 5,
        label: 'Telefone',
        placeholder: '(00) 00000-0000'
      }
    ],
    checkbox: [],
  },
  {
    id: 3,
    title: 'Para finalizar, quais são os seus planos?',
    input: [],
    checkbox: [
      {
        id: 1,
        value: 'Sulamerica'
      },
      {
        id: 2,
        value: 'Unimed'
      },
      {
        id: 3,
        value: 'Bradesco'
      },
      {
        id: 4,
        value: 'Amil'
      },
      {
        id: 5,
        value: 'Biosaúde'
      },
      {
        id: 6,
        value: 'Biovida'
      },
      {
        id: 7,
        value: 'Outros'
      },
      {
        id: 8,
        value: 'Não tenho plano'
      }
    ]
  }
]

export const tabs = [
  {
    name: "Home",
    component: Home,
    icon: "home"
  },
  {
    name: "Consultation",
    component: Consultation,
    icon: "calendar"
  },
  {
    name: "Search",
    component: Search,
    icon: "search"
  },
  {
    name: "Person",
    component: Person,
    icon: "person"
  }
]