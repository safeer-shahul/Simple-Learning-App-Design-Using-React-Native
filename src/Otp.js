import React, {Component} from "react";
import { View,
         Image,
         StyleSheet,
         Text,
         TouchableHighlight,
         TextInput,
         SafeAreaView,
         ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Register extends Component{
    
    render(){
        return(
            <SafeAreaView>
            
            <View style={styles.container}>
            
            <View style={styles.container1}>
                <Image 
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <Image source={require('../assets/Group385.png')}
                    style={styles.image1}
                />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Text1}>Verification code</Text>
                    <Text style={styles.Text2}>Please type the verification code sent to</Text>
                    <Text style={styles.mobileno}>+91 {this.props.route.params.mobileno}</Text>
                </View>
            
            <View style={styles.container2}>
                <View style={styles.mobileCode}>
                    <TextInput style ={styles.inputViewCode}/>
                    <TextInput style ={styles.inputViewCode}/>
                    <TextInput style ={styles.inputViewCode}/>
                    <TextInput style ={styles.inputViewCode}/>
                    <TextInput style ={styles.inputViewCode}/>
                    <TextInput style ={styles.inputViewCode}/>
                    
                </View>
                <TouchableHighlight style={styles.continueBtn}
                onPress={()=> this.props.navigation.navigate('Studentdetails')}>
                    <Text style={styles.btnText}>
                        Resend OTP
                    </Text>
                </TouchableHighlight>
                <Text style={styles.resendText}>Resend after 22s</Text>
            
            <View style={{flexDirection:"row",height:'10%', marginTop:36}}>
                <Icon name='call' size={14} color='#00c458'></Icon>
                <Text style={{color:'#00c458',fontFamily:'Gilroy-SemiBold', fontSize:14, marginTop:-2, marginLeft:5}}>Contact Us</Text>
                </View>
                </View>
               
            </View>
            
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    container1:{
        width:'100%',
        height:'10%',
        alignItems:'center',
        marginTop:50
        
    },
    container2:{
        width:'100%',
        height:'37%',
        backgroundColor:'#002333',
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
        justifyContent:'center',
        alignItems:'center',
        bottom:0,
        margintop:10
    },
    logo:{
        width:204,
        height:58,
        resizeMode: 'stretch',
        
    },
    TextContainer:{
        
        marginBottom:30,
        alignItems:'center',
        marginTop:248,
        
        
    },
    Text1:{
        color:'#002333', 
        fontFamily:'Gilroy-SemiBold',
        fontSize:20
    },
    Text2:{
        fontFamily:"Gilroy-Regular",
        color:"#9f9f9f",
        fontSize:14
    },
    inputViewCode : {
      width:51,
      marginRight:3.5,
      height: 51,
      marginTop : 1,
      marginBottom:4,
      color:'#bdbdbd',
      borderRadius:4,
      backgroundColor:'#062e40',
      fontFamily:"Gilroy-Regular",
      fontSize:22,
      textAlign:'center',
      borderColor:'#13394a',
      borderWidth:1
    }, 
    
    mobileCode:{
      flexDirection:'row'
    },
    continueBtn:{
        height: 55,
        width:'79%',
        color:'white',
        fontFamily:"Gilroy-Regular",
        backgroundColor:'#00c458',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:4,
        
    },
    btnText:{
        fontFamily:'Gilroy-SemiBold',
        color:'white',
        fontSize:14
    },
    mobileno:{
        color:'#002333',
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        marginTop:25,
        marginBottom:4
    },
    image1:{
        marginTop:50,
        height:170,
        width:180,
        resizeMode:'stretch'
    },
    resendText:{
        color:'#446270',
        fontFamily:"Gilroy-Regular",
        fontSize:10,
        marginTop:10
    }
})

