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
                    <Text style={styles.Text1}>Select you school board</Text>
                    
                </View>
            
            <View style={styles.container2}>
                <View style={styles.container3}>
                    
                   
                    <ModalDropdown style={styles.dropdown1} 
                    textStyle={styles.textDrpdwn1} 
                options={['CBSE','KERALA','ICSE']}
                defaultValue='Select State'
                dropdownTextStyle={styles.dropdown1_2}
                dropdownStyle={styles.dropdown1_1}  
                animated={true}>
                </ModalDropdown>

                <ModalDropdown style={styles.dropdown2} 
                    textStyle={styles.textDrpdwn1} 
                options={['Class 1','Class 2','Class 3','Class 4',
                    'Class 5','Class 6','Class 7','Class 8','Class 9','Class 10']}
                defaultValue='Select Class'
                dropdownTextStyle={styles.dropdown2_2}
                dropdownStyle={styles.dropdown2_1}  
                animated={true}>
                </ModalDropdown>



                <TouchableHighlight style={styles.continueBtn}
                onPress={()=> this.props.navigation.navigate('Apptour')}>
                    <Text style={styles.btnText}>
                        Continue
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
        height:'14%',
        alignItems:'center',
        marginTop:50  
    },
    container2:{
        width:'100%',
        height:'40%',
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
        marginTop:42
    },
    logo:{
        width:204,
        height:58,
        resizeMode: 'stretch',
        
    },
    TextContainer:{
        marginBottom:30,
        alignItems:'center',
        marginTop:250,      
    },
    Text1:{
        color:'#002333',  
        fontFamily:'Gilroy-SemiBold',
        fontSize:20
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
    image1:{
        marginTop:60,
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
        borderColor:'#007345',
        borderWidth:2,
        marginTop:10
    },
    dropdown1_1:{
        backgroundColor:'black',
        width:'79%',
        justifyContent:'center',
        borderRadius:4,
        backgroundColor:'#062e40',
        borderColor:'#13394a',
        borderWidth:1,

    },
    dropdown1_2:{
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
    textDrpdwn1:{
        color:'#446270',
        fontFamily:"Gilroy-Regular",
        fontSize:14,
        marginLeft:20
                
    },
    dropdown2:{
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
    dropdown2_1:{
        backgroundColor:'black',
        width:'79%',
        justifyContent:'center',
        borderRadius:4,
        backgroundColor:'#062e40',
        borderColor:'#13394a',
        borderWidth:1,

    },
    dropdown2_2:{
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
    }
})

