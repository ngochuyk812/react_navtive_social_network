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
import SlideShow from '../pages/SlideshowPost/Slideshow';
import CreatePost from '../pages/CreatePost/CreatePost';
import Chat from '../pages/Chat/Chat';
import DetailMessage from '../pages/DetailMessage/DetailMessage';
import { useState } from 'react';
import Navbar from '../layout/NavbarBottom/NavbarBottom';
import { View } from 'react-native';
import { createContext } from 'react';
import ChatScreen from '../pages/ChatScreen/ChatScreen';
const Stack = createNativeStackNavigator();



export default function Routes(){
        const [active, setActive ] = useState("Home")
        const [navbar, setNavbar ] = useState(true)

        const changleRoutes = (state)=>{
          setNavbar(state.routes[state.routes.length - 1].params.navbar);
        }
        return(
        <NavigationContainer
        onStateChange={(state) => changleRoutes(state)}
        >
      
      <View style={ navbar ? {height:'100%'} :{height:'100%'} }>
      <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ 
      headerShown: false,
      
      }}>
        <Stack.Screen name="SignIn" initialParams={{navbar: false}} component={SignIn} />
        <Stack.Screen name="SignUp" initialParams={{navbar: false}} component={SignUp} />
        <Stack.Screen name="ForgotPassword" initialParams={{navbar: false}} component={ForgotPassword} />
        <Stack.Screen name="Slideshow" initialParams={{navbar: false}} component={SlideShow} />
        <Stack.Screen name="Message" initialParams={{navbar: true}} component={Chat} />
        <Stack.Screen name="DetailMessage" initialParams={{navbar: false}} component={DetailMessage} />

        <Stack.Screen name="DetailsPost" initialParams={{navbar: false}}>
        {(props) => <ProtectedPage {...props}  page={DetailsPost} />}
        </Stack.Screen>
        <Stack.Screen name="Profile"  initialParams={{navbar: true}}>
        {(props) => <ProtectedPage {...props}  page={Profile} />}
        </Stack.Screen>
        <Stack.Screen name="Home"  initialParams={{navbar: true}}>
        {(props) => <ProtectedPage {...props}  page={Home} />}
        </Stack.Screen>
        
        <Stack.Screen name="CreatePost" initialParams={{navbar: true}} >
        {(props) => <ProtectedPage {...props} page={CreatePost} />}
        </Stack.Screen>

      </Stack.Navigator>
      </View>
      
      {navbar && <Navbar active={active} />}
    </NavigationContainer>
    )
}