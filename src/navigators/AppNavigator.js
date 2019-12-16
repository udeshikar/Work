import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import InteractionScreen from '../screens/InteractionScreen';
import NonInteractionScreen from '../screens/NonInteractionScreen';

const AppNavigator = createStackNavigator({
    HomeScreen: {
      screen: HomeScreen,
    },
    InteractionScreen: {
        screen: InteractionScreen
    },
    NonInteractionScreen: {
        screen: NonInteractionScreen
    }
  },
  {
    initialRouteName: 'HomeScreen',
  });
  
export default createAppContainer(AppNavigator);