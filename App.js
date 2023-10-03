import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyHobbiesApp from './pages/MyHobbiesApp';
import MyReadingDiary from './pages/MyReadingDiary';
import MyYogaDiary from './pages/MyYogaDiary';
import MyCosts from './pages/MyCosts';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyHobbiesApp">
        <Stack.Screen
          name="MyHobbiesApp"
          component={MyHobbiesApp}
        />
        <Stack.Screen
          name="MyReadingDiary"
          component={MyReadingDiary}
        />
        <Stack.Screen
          name="MyYogaDiary"
          component={MyYogaDiary}
        />
         <Stack.Screen
          name="MyCosts"
          component={MyCosts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
