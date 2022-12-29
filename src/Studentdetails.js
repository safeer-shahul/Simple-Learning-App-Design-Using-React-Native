import React, {Component} from "react";
import { View,
         Image,
         StyleSheet,
         Text,
         TouchableHighlight,
         TextInput,  
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";


export default class Register extends Component{
    
    render(){
        
        return(
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
                    <Text style={styles.Text1}>Student details</Text>
                    
                </View>
            
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <TextInput style ={styles.inputViewCode3}                        
                      placeholder='Full name'
                      placeholderTextColor={'#446270'} 
                    ></TextInput>
                    <TextInput style ={styles.inputViewCode2}                    
                      placeholder='Email'
                      placeholderTextColor={'#446270'} 
                      ></TextInput>
                   
                    <ModalDropdown style={styles.dropdown1} textStyle={styles.textDrpdwn} 
                options={['Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jammu and Kashmir',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
                'Maharashtra',
                'Manipur',
                'Meghalaya',
                'Mizoram',
                'Nagaland',
                'Odisha',
                'Punjab',
                'Rajasthan',
                'Sikkim',
                'Tamil Nadu',
                'Telangana',
                'Tripura',
                'Uttarakhand',
                'Uttar Pradesh',
                'West Bengal',]}
                defaultValue='Select State'
                dropdownTextStyle={styles.dropdown3}
                dropdownStyle={styles.dropdown2}
                
                animated={true}>
                </ModalDropdown>

                    <TextInput style ={styles.inputViewCode2}                    
                      placeholder='Pincode'
                      maxLength ={6} 
                      placeholderTextColor={'#446270'} >
                    </TextInput>
                <TouchableHighlight style={styles.continueBtn}
                onPress={()=> this.props.navigation.navigate('Schoolboard')}>
                    <Text style={styles.btnText}>
                        Register
                    </Text>
                </TouchableHighlight>
               
                </View>
            
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    container1:{
        width:'100%',
        height:'5%',
        alignItems:'center',
        marginTop:50  
    },
    container2:{
        width:'100%',
        height:'52%',
        backgroundColor:'#002333',
        borderTopRightRadius:16,
        borderTopLeftRadius:16,
        alignItems:'center',
        bottom:0,
        
    },
    container3:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
    logo:{
        width:204,
        height:58,
        resizeMode: 'stretch',
        
    },
    TextContainer:{
        marginBottom:30,
        alignItems:'center',
        marginTop:230,      
    },
    Text1:{
        color:'#002333', 
        fontFamily:'Gilroy-SemiBold',
        fontSize:20
    },
    inputViewCode2 : {
        width:'79%',
        height: 55,
        marginTop : 10,
        color:'#446270',
        paddingLeft : 20,
        borderRadius:4,
        backgroundColor:'#062e40',
        fontFamily:"Gilroy-Regular",
        fontSize:14,
        borderColor:'#13394a',
        borderWidth:1
      }, 
      inputViewCode3 : {
        width:'79%',
        height: 55,
        marginTop : 10,
        color:'#446270',
        paddingLeft : 20,
        borderRadius:4,
        backgroundColor:'#062e40',
        fontFamily:"Gilroy-Regular",
        fontSize:14,
        borderColor:'#007345',
        borderWidth:2
      }, 
    continueBtn:{
        height: 55,
        width:'79%',
        color:'white',
        fontFamily:"Gilroy-Regular",
        backgroundColor:'#00c458',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:4,
        marginBottom:20
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
        marginTop:37,
        height:150,
        width:160,
        resizeMode:'stretch'
    },
    dropdown1:{
        backgroundColor:'black',
        height:55,
        width:'79%',
        justifyContent:'center',
        borderRadius:4,
        backgroundColor:'#062e40',
        borderColor:'#13394a',
        borderWidth:1,
        marginTop:10
    },
    dropdown2:{
        backgroundColor:'black',
        width:'79%',
        justifyContent:'center',
        borderRadius:4,
        backgroundColor:'#062e40',
        borderColor:'#13394a',
        borderWidth:1,

    },
    dropdown3:{
        backgroundColor:'black',
        color:'#00c458',
        width:'100%',
        justifyContent:'center',
        borderRadius:4,
        backgroundColor:'#062e40',
        borderColor:'#13394a',
        borderWidth:1,
        fontFamily:"Gilroy-Regular",
        fontSize:14
    },
    textDrpdwn:{
        color:'#446270',
        fontFamily:"Gilroy-Regular",
        fontSize:14,
        marginLeft:20
                
    }
})

