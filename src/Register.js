import React, {Component} from "react";
import { View,
         Image,
         StyleSheet,
         Text,
         TouchableHighlight,
         TextInput,
         ScrollView,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

export default class Register extends Component{
    constructor(){
        super();
        this.state={
          mobileno : null
        }
      }
    
      updateValue(mobno){
         console.log(mobno)
         this.setState({mobileno: mobno})
      }
    render(){
        return(
            <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.container1}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Text1}>Enter your mobile number</Text>
                    <Text style={styles.Text2}>We will send you an OTP to verify.</Text>
                </View>
            
            <View style={styles.container2}>
                <View style={styles.mobileCode}>
                    <TextInput style ={styles.inputViewCode} 
                         placeholder='+91' 
                         placeholderTextColor={'#bdbdbd'}></TextInput>
           
                    <TextInput style ={styles.inputViewCode2} 
                      placeholder='Mobile'
                      maxLength ={10} 
                      placeholderTextColor={'#446270'} 
                      onChangeText={(mobno)=>this.updateValue(mobno)}>
                    </TextInput>
                </View>
                <TouchableHighlight style={styles.continueBtn}
                onPress={()=> this.props.navigation.navigate('Otp',{mobileno: this.state.mobileno})}>
                    <Text style={styles.btnText}>
                        Continue
                    </Text>
                </TouchableHighlight>
            </View>
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:wp('100%'),
        height:hp('100%'),
        flexGrow:1
    },
    container1:{
        width: wp('100%'),
        height:hp('65%'),
        alignItems:'center',
        justifyContent:'center',
        
    },
    logo:{
        width:wp('55%'),
        height:hp('8.5%'),
        resizeMode: 'stretch',
        
    },
    TextContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:wp('100%'),
        height:hp('10%')
    },
    Text1:{
        color:'#002333', 
        fontFamily:'Gilroy-SemiBold',
        fontSize:hp('3%')
    },
    Text2:{
        fontFamily:"Gilroy-Regular",
        color:"#9f9f9f",
        fontSize:hp('2%')
    },
    container2:{
        width:wp('100%'),
        height:hp('25%'),
        backgroundColor:'#002333',
        borderTopRightRadius:hp('2%'),
        borderTopLeftRadius:hp('2%'),
        justifyContent:'center',
        alignItems:'center',

    },
    
    
    inputViewCode : {
      width:wp('15%'),
      height: hp('7%'),
      marginTop : hp('0.5%'),
      color:'#bdbdbd',
      paddingLeft : hp('2.3%'),
      borderRadius:hp('0.5%'),
      backgroundColor:'#062e40',
      fontFamily:"Gilroy-Regular",
      fontSize:hp('2%'),
      borderColor:'#13394a',
      borderWidth:hp('0.1%')
    }, 
    inputViewCode2 : {
      width:wp('62%'),
      marginLeft: hp('1%'),
      height: hp('7%'),
      marginTop : hp('0.5%'),
      color:'#446270',
      paddingLeft : hp('2.3%'),
      borderRadius:hp('0.5%'),
      backgroundColor:'#062e40',
      fontFamily:"Gilroy-Regular",
      fontSize:hp('2%'),
      borderColor:'#13394a',
      borderWidth:hp('0.1%')
    },
    mobileCode:{
      flexDirection:'row'
    },
    continueBtn:{
        height: hp('7%'),
        width:wp('79%'),
        color:'white',
        fontFamily:"Gilroy-Regular",
        backgroundColor:'#00c458',
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('1%'),
        borderRadius:hp('0.5%'),
        
    },
    btnText:{
        fontFamily:'Gilroy-SemiBold',
        color:'white',
        fontSize:hp('2%')
    }
})

