
//Iconografia
import Icon from 'react-native-vector-icons/Ionicons'

//Navegacion
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Componentes de pantalla

import { Settings } from './Pantallas/Settings';
import { Screen1 } from './Pantallas/Screen1'
import { Screen2 } from './Pantallas/Screen2'
const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{ marginTop: 40 }} >
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Datos" component={Screen2} />
        <Tab.Screen name="Settings" component={Settings} />

    </Tab.Navigator>
}
