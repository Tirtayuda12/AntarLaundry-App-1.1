import React,{useEffect} from "react";
import {View, ImageBackground,StyleSheet,Image} from "react-native";


const HomePage = ({navigation}) =>{

    useEffect( () => {
        setTimeout( () => {
            navigation.replace('Main');
        },3000)
    }, [navigation]);

    return(
        <View style={styles.container}> 
            <ImageBackground source={require('../../assets/images/SplashBackground.png')} style={styles.img}>
                <View style={styles.headercontainer}>
                    <Image style={styles.headerimg}source={require('../../assets/images/logo.png')} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        flex:1
    },
    headercontainer:{
        justifyContent:'flex-end'

    },
    headerimg: {
        width:222,
        height:105,
    }


})

export default HomePage