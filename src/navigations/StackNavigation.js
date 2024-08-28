
import { StyleSheet } from 'react-native'
import React from 'react'
import SplashScreen from '../screens/SplashScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'

export default function StackNavigation() {
    const Stack =createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})