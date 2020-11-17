import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth from './src/screens/Auth';
import ToDos from './src/screens/ToDos';

const navigator = createStackNavigator(
  {
    AuthScreen: Auth,
    ToDosScreen: ToDos
  },
  {
    initialRouteName: 'AuthScreen',
    defaultNavigationOptions: {
      title: 'Todo App',
      header: null,
    }
  }
);

export default createAppContainer(navigator);