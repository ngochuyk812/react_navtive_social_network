

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Routes/>
    </SafeAreaProvider>

    
  );
}


