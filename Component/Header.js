import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import Search from './Search';
import { CartContext } from './CartContent';
import { FontAwesome } from '@expo/vector-icons';
export default function Header() {

    return (
        
        <View style={styles.header}>
            <View style={styles.text}>
                <Text style={styles.title}>Welcome to Minh Nhan Shop</Text>
            </View>

            <StatusBar style="auto" />

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../Image/back.jpg')}
                />
            </View>
            <View style={styles.Cart}>
                <TouchableOpacity style={styles.cartContainer} >
                    <FontAwesome name="shopping-cart" size={40} color="black" />
                    <View style={styles.cartCountContainer}>
                        <Text style={styles.cartCountText}>0</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.search}>
                <Search></Search>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 0,
        //borderBottomWidth: 1,
        //borderBottomColor: '#ccc',

    },
    text: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 160,
        width: 370,
    },
    search:
    {
        marginTop: 5,
        height: 100,
        width: 370,
        marginBottom: -50
    }
});