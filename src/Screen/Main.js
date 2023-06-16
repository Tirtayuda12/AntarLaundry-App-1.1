import React from 'react';
import { SafeAreaView,Image,StyleSheet,Text} from 'react-native';
const Main = () => {
  return (
    <SafeAreaView style={Styles.container}>
            <Image style={Styles.img} source={require('../../assets/images/header.png')}/>
            <Text style={{color:'black'}}>Hello react</Text>
            <Text style={{color:'black'}}> Tirtayuda Munggarana</Text>
    </SafeAreaView>
    
  )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    img:{

    }
})

export default Main
