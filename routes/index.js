import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import ProtectedPage from '../ui/ProtectedPage/ProtectedPage';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Home from '../pages/Home/Home';
import Layout from '../layout/Layout';
import DetailsPost from '../pages/DetailsPost/DetailsPost';
import Profile from '../pages/Profile/Profile';
import SlideShow from '../pages/Slideshow/Slideshow';
const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>
      
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ 
      headerShown: false
      }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Slideshow" component={SlideShow} />

        <Stack.Screen name="DetailsPost">
        {(props) => <ProtectedPage {...props} page={DetailsPost} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
        {(props) => <ProtectedPage {...props} page={Profile} layout={Layout}/>}
        </Stack.Screen>
        <Stack.Screen name="Home" >
        {(props) => <ProtectedPage {...props} page={Home} layout={Layout}/>}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
    )
}