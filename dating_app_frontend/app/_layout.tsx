import AuthContextProvider from '@/src/contexts/authContext/Provider';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    <GestureHandlerRootView>
      <AuthContextProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false, statusBarTranslucent: true, statusBarStyle: "light" }} />
          <Stack.Screen name="auth/login" options={{ headerShown: false, statusBarTranslucent: true, statusBarStyle: "dark" }} />
          <Stack.Screen name="home" options={{ headerShown: false, statusBarTranslucent: true, statusBarStyle: "light" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
