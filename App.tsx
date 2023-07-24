// import Home from "./src/pages/Home";
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEMES } from './src/styles/themes';
import Routes from './src/routes/index.route';

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      <Routes />
    </NativeBaseProvider>
  );
}
