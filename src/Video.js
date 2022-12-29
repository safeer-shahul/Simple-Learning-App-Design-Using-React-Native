import React, {Component} from "react";
import { View,
         ScrollView,
         Image,
         ImageBackground,
         TouchableOpacity,
         SafeAreaView,
         Text,
         StyleSheet,
         TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Settings extends Component{
    render(){
        return(
            <SafeAreaView style={styles.mainCntaner}>
                <ScrollView>
                    <TouchableOpacity style={styles.videoPlayer}>
                    <ImageBackground source={require('../assets/bio.jpg')}
                            style={{width:wp('100%'), height:hp('30%'), justifyContent:'center', alignItems:'center'}}>
                                <Icon name='play-circle-outline' size={120} color={'white'} style={{opacity:0.5}}/>
                    </ImageBackground>
                    </TouchableOpacity>
                    <View style={styles.dwnldOption}>
                        <View style={styles.titleContent}>
                            <Text style={{color:'white', fontSize:16, fontFamily:'Gilroy-Bold'}}>Long Chapter Name can be here shown here</Text>
                        </View>
                        <TouchableOpacity style={styles.iconDwnld}>
                            <Icon name='file-download' size={20} color={'white'}/>
                            <Text style={{color:'white', fontSize:8, fontFamily:"Gilroy-Bold"}}>Download</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.videoCntrlButtons}>
                        <TouchableOpacity style={styles.videoCntrlBtn1}>
                        <Icon name='chevron-left' color={'#9f9f9f'} size={25}/>
                        <Text style={{color:'#9f9f9f', fontSize:8, fontFamily:'Gilroy-SemiBold'}}>Previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.videoCntrlBtn2}>
                        <Icon name='radio-button-checked' color={'#00c458'} size={25}/>
                        <Text style={{color:'#00c458', fontSize:8, fontFamily:'Gilroy-SemiBold',marginLeft:7}}>Part 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.videoCntrlBtn3}>
                        <Text style={{color:'#fff', fontSize:8, fontFamily:'Gilroy-SemiBold'}}>Next</Text>
                        <Icon name='chevron-right' color={'#fff'} size={25}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <View style={styles.chatInfo}>
                            <Text style={{color:'white', fontFamily:'Gilroy-Regular', fontSize:12, marginLeft:10}}>Your sample question can be shown here no matter how long</Text>
                            <View style={styles.profileIcon}>
                                <Image source={require('../assets/profile.jpg')}
                                style={styles.profileImage}></Image>
                            </View>
                        </View>
                        <View style={styles.postQuery}>
                        <TextInput style ={styles.inputViewCode} 
                         placeholder='Ask a Question?' 
                         placeholderTextColor={'#bdbdbd'}/>
                         <TouchableOpacity style={styles.postBtn}>
                            <Text style={{color:'black', fontFamily:'Gilroy-SemiBold', fontSize:10}}>Post</Text>
                         </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.chatBtn}>
                            <Icon name='chat' size={25} color='#00c458'/>
                            <Text style={{color:'#00c458',fontSize:14, fontFamily:'Gilroy-SemiBold', marginLeft:20}}>Chat with Teacher</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainCntaner:{
        backgroundColor:'#00202f',
        height:hp('100%'),
        width:wp('100%')
    },
    videoPlayer:{
        backgroundColor:'white',
        height:hp('30%')
    },
    dwnldOption:{
        height:hp('10%'),
        alignItems:'center',
        flexDirection:'row'
    },
    titleContent:{
        marginLeft:20,
        width:wp('70%')
    },
    iconDwnld:{
        height:hp('4%'),
        alignItems:'center',
        justifyContent:'center',
        width:wp('20%'),
        borderLeftColor:'white',
        borderLeftWidth:1
    },
    videoCntrlButtons:{
        height:hp('8%'),
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderBottomColor:'white',
        borderBottomWidth:0.4,
        borderTopWidth:0.4,
        borderTopColor:'white',
        backgroundColor:'#173442'
    },
    videoCntrlBtn1:{
        flexDirection:'row',
        alignItems:'center',
        width:wp('30%'),
        height:hp('8%')
    },
    videoCntrlBtn2:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:wp('30%'),
        height:hp('8%')
    },
    videoCntrlBtn3:{
        flexDirection:'row',
        alignItems:'center',
        width:wp('30%'),
        justifyContent:'flex-end',
        height:hp('8%')
    },
    btnContainer:{
    height:hp('52%'),
    justifyContent:'flex-end',
    alignItems:'center',
    width:wp('100%')
    },
    profileIcon:{
        height:hp('5%'),
        width:wp('10%'),
        borderRadius: 50,
        marginLeft:15,
        borderColor:'#19bd9b',
        borderWidth:3,
    },
    profileImage:{
        height:hp('4%'),
        width:wp('8.5%'),
        borderRadius:50
    }, 
    chatInfo:{
        width:wp('77%'),
        flexDirection:'row',
        backgroundColor:'black',
        borderRadius:4,
        height:hp('8%'),
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center'
    },
    postQuery:{
        width:wp('90%'),
        backgroundColor:'#062e40',
        alignItems:'center',
        height:hp('8%'),
        marginBottom:10,
        flexDirection:'row',
        borderRadius:4
    },
    inputViewCode : {
        width:wp('70%'),
        height:hp('7%'),
        color:'#446270',
        borderRadius:4,
        backgroundColor:'#062e40',
        fontFamily:"Gilroy-Regular",
        fontSize:14,
        paddingLeft:20
      }, 
      postBtn:{
        backgroundColor:'white',
        height:hp('4%'),
        width:wp('15%'),
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
      },
      chatBtn:{
        borderWidth:1,
        borderColor:'#00c458',
        borderRadius:4,
        height:hp('8%'),
        width:wp('90%'),
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:30
      }
})
