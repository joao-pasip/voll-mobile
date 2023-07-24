import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { tabs } from '../utils/sections';

import Home from './Home';
import Consultation from './Consultation';
import Person from './Person';
import Search from './Search';

const Tab = createBottomTabNavigator();

export default function Tabs() {

  const screenOption = {
    tabBarStyle: {
      backgroundColor: "#002851"
    },
    tabBarActiveTintColor: "#339cff",
    tabBarInactiveTintColor: "#FFF"
  }
  
  return (
    <Tab.Navigator
      screenOptions={screenOption}
    >
      {
        tabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size}) => (
                <Ionicons name={tab.icon} color={color} size={size}/>
              )
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}