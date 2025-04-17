import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Unleash } from '@/components/Unleash';
import HomeScreen from './(tabs)';
import NotFoundScreen from './+not-found';
import { APIProvider } from '@/services/provider';
import GlobalContext from '@/contexts';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <APIProvider>
              <GlobalContext>
                <KeyboardProvider>
                  <BottomSheetModalProvider>
                  <Unleash>
                    {/* <Routes /> start */}
                      <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen name="tabs" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen component={NotFoundScreen} name="not-found" />
                        </Stack.Navigator>
                      </NavigationContainer>
                    {/* <Routes /> end */}
                    </Unleash>
                  </BottomSheetModalProvider>
                </KeyboardProvider>
              </GlobalContext>
            </APIProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
    
  );
}
