import React, {Component} from "react";
import { View,
         SafeAreaView,
         Text,
         StyleSheet,
         TouchableHighlight,
         Image,
         TouchableOpacity,
         ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class Profile extends Component{
    render(){
        return(
            <SafeAreaView style={{backgroundColor:'White', width:'100%', height:'100%',justifyContent:'center',alignItems:'center'}}>

                <View style={styles.topContainer}>
                    <View style={styles.profileHeader}>
                    <View style={styles.headerText}>
                        <Text style={{fontSize:20, fontFamily:'Gilroy-Medium',color:'white'}}>Profile</Text>
                    </View>
                    <Icon name="notifications-none" color={'white'} size={28}/>
                    <View style={styles.menuIcon}>
                        <TouchableHighlight style={styles.menuBtn}
                            onPress={()=> this.props.navigation.openDrawer()}>
                            <Icon name='widgets' color={'#00c458'} size={20}/>
                        </TouchableHighlight>
                    </View>
                    </View>
                </View>
                <View style={styles.profileData}>
                <View style={styles.profileContainer}>
                    
                    <View style={styles.profileIcon}>
                        <Image 
                        source={require('../../assets/profile.jpg')}
                        style={styles.profileImage}></Image>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.Text1}>Matt Murdock</Text>
                        <Text style={styles.Text2}>ID: 1234</Text>
                    </View>
                </View>
                <View style={styles.infoHeadersStyle}>
                    <Text style={styles.infoHeaders}>Personal Info</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Acoount Name</Text>
                    <Text style={styles.infoTxt2}>Aaron Taylor</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Email</Text>
                    <Text style={styles.infoTxt2}>emaidid123@server.com</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Number</Text>
                    <Text style={styles.infoTxt2}>+91 987654321</Text>
                </View>
                <View style={styles.infoHeadersStyle}>
                    <Text style={styles.infoHeaders}>Course Info</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Center</Text>
                    <Text style={styles.infoTxt2}>Inmakes edu</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Course</Text>
                    <Text style={styles.infoTxt2}>Plus Two Science</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Payment Status</Text>
                    <Text style={styles.infoTxt2}>Free</Text>
                </View>
                <View style={styles.infoViewStyle}>
                    <Text style={styles.infoTxt1}>Expiry Date</Text>
                    <Text style={styles.infoTxt2}>Not Applicable</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.continueBtn}>
                    <View style={styles.walletStyle}><Icon name='account-balance-wallet' color={'white'} size={25}/></View>
                    <View style={styles.paymentBtnTxt}><Text style={styles.btnText}>Custom Payment</Text></View>
                    <Icon name='chevron-right' color={'white'} size={20}/>
                </TouchableOpacity>
                <View style={styles.continueBtn2}>
                </View>
                
            </SafeAreaView>
        )
    }
}

const styles =StyleSheet.create({
    topContainer:{
        width:wp('100%'),
        height:hp('35%'),
        backgroundColor:'#00202f',
        alignItems:'center',
    },
    profileHeader:{
        width:wp('90%'),
        height:hp('5.5%'),
        marginTop:30,
        flexDirection:'row',
        alignItems:"center"
    },
    headerText:{
        width:wp('69%'),
        height:hp('5.5%'),
        alignItems:"center",
        justifyContent:'center'
    },
    menuBtn:{
       borderColor:'#d5d5d5',
       borderWidth:1,
       borderRadius:4,
       justifyContent:'center',
       alignItems:'center',
       width:wp('10%'),
       height:wp('10%'),
   },
   menuIcon:{
       width:wp('10%'),
       height:wp('10%'),
       marginLeft:15
   },
   profileData:{
    width:wp('90%'),
    backgroundColor:'white',
    height:hp('64.5%'),
    marginTop:-160,
    borderRadius:8,
    elevation:2
   },
   profileContainer:{
       height:hp('11%'),
       width:wp('90%'), 
       flexDirection:'row',
       alignItems:'center',
   },
   profileIcon:{
       height:hp('8%'),
       width:wp('15%'),
       borderRadius: 50,
       marginLeft:20,
       borderColor:'#19bd9b',
       borderWidth:3
   },
   infoView:{
       marginLeft:15
   },
   profileImage:{
       height:hp('7.2%'),
       width:wp('13.5%'),
       borderRadius:50
   }, 
   Text1:{
    fontFamily:"Gilroy-Bold",
    color:"#4d4d4d",
    fontSize:14
   },
   Text2:{
    fontFamily:"Gilroy-Regular",
    color:"#4d4d4d",
    fontSize:12
   },
   infoHeadersStyle:{
    width:wp('90%'),
    height:hp('4.5%'),
    marginTop:16,
    borderBottomWidth:1,
    borderColor:'#eeeeee'
   },
   infoHeaders:{
    color:'#4d4d4d',
    fontSize:14,
    fontFamily:'Gilroy-Bold',
    marginLeft:20
   },
   infoViewStyle:{
    width:wp('80%'),
    height:hp('4%'),
    marginLeft:20,
    borderBottomWidth:1,
    borderColor:'#eeeeee',
    flexDirection:"row",
    marginTop:14
   },
   infoTxt1:{
    color:'#4d4d4d',
    fontFamily:'Gilroy-Regular',
    fontSize:12,
    width:wp('35%')
   },
   infoTxt2:{
    color:'#4d4d4d',
    fontFamily:'Gilroy-Bold',
    fontSize:12
   },
   continueBtn:{
       height: hp('8%'),
       width:wp('90%'),
       color:'white',
       fontFamily:"Gilroy-Regular",
       backgroundColor:'#00c458',
       alignItems:'center',
       marginTop:10,
       borderRadius:8,
       flexDirection:"row"
   },
   btnText:{
       fontFamily:'Gilroy-SemiBold',
       color:'white',
       fontSize:12
   },
   continueBtn2:{
       height: hp('11%'),
       width:wp('90%'),
       color:'white',
       fontFamily:"Gilroy-Regular",
       justifyContent:'center',
       marginTop:10,
       borderRadius:8,
   },
   walletStyle:{
    width:wp('10%'),
       height:hp('5%'),
       marginLeft:15,
       backgroundColor:'#00cc5c',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:4
   },
   paymentBtnTxt:{
    width:wp('65%'),
    marginLeft:10
   },
})