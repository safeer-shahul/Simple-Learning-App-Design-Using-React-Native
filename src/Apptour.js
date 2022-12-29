import React, {Component} from "react";
import { View,
         StyleSheet,
         Text,
         TouchableHighlight,
         Image 
        } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Apptour extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/image1.jpg')}
                    style={styles.image1}/>
                </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.Text1}>App tour title</Text>
                        <Text style={styles.Text2}>The app tour description goes here.</Text>
                            <TouchableHighlight style={styles.buttonView} 
                            onPress={()=> this.props.navigation.navigate('MyDrawer')}>
                                <Icon name='arrow-forward' color={'white'} size={25}/>
                            </TouchableHighlight>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:'100%',
        height:'100%'
    },
    imageContainer:{
        backgroundColor:'#000',
        width:'95%',
        height:'67%',
        marginLeft:10,
        marginTop: 10,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'        
    },
    image1:{
        width:"100%",
        height:"100%",
        borderRadius:12,
        resizeMode: 'stretch',
        
    },
    bottomContainer:{
        backgroundColor:'#fff',
        width:'100%',
        height:'30.5%',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    Text1:{
        color:'#002333', 
        fontSize:20, 
        fontFamily:'Gilroy-SemiBold',
    },
    Text2:{
        fontFamily:"Gilroy-Regular",
        color:"#9f9f9f",
        fontSize:14
    },
    buttonView:{
        width:60,
        backgroundColor:'#00c458',
        height:60,
        alignItems:'center',
        justifyContent:"center",
        marginTop:40,
        borderRadius:4,
        elevation:5
    }
})