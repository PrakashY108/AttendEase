import { Dimensions, Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const { width, height } = Dimensions.get('window');
    const navigation = useNavigation();

    useEffect(() => {
        // Use a timeout to simulate a loading process
        const timer = setTimeout(() => {
            navigation.navigate("Login");
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[styles.container, { height: height, width: width }]}>
            <Image style={styles.appLogo} source={require("../assets/Applogo.png")} />
            <View style={{ flexDirection: "row", gap: 0 }}>
                <Text style={styles.apptitle}>Attend</Text>
                <Text style={[styles.apptitle, { color: "#7C93C3" }]}>Ease</Text>
            </View>
            <ActivityIndicator style={styles.spinner} size={"large"} color={"blue"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },
    appLogo: {
        height: '40%',
        aspectRatio: 1,
        borderRadius: 100,
        marginBottom: 20

    },
    apptitle: {
        fontSize: 40,
        fontWeight: '700',
        color: "#7695FF",
        marginVertical: 5

    },
    spinner: {
        marginTop: 20
    }
})
