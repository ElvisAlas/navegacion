
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import { StyleSheet } from 'react-native';


import { TopTabs } from './componentes/TopTaps';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 12,
    marginRight: 12
  }
})

//JSX
export default function App() {
  
  return (<NavigationContainer style={styles.container}>

          <TopTabs/>
    </NavigationContainer>
  );
}


