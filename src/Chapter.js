import React, {Component} from "react";
import { View,
         StyleSheet,
         Text,
         TouchableOpacity,
         ImageBackground,
         SafeAreaView,
         ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Chapter extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{                  
                    flexDirection: 'column'              
                    }}>
                <TouchableOpacity style={styles.videoChapter}
                onPress={()=> this.props.navigation.navigate('Video')}>
                    <View style={styles.videoCardContent}>
                    <ImageBackground source={require('../assets/bio.jpg')}
                            style={{width:wp('100%'), height:hp('27%')}}
                            imageStyle={{borderRadius:4}}>
                        <View style={styles.chapterName}>
                            <Text style={{fontFamily:'Gilroy-SemiBold', fontSize:10,color:'white'}}>Biology</Text>
                        </View>
                    </ImageBackground>
                    </View>
                    <View style={{height:hp('13%'),width:wp('80%'),justifyContent:'center'}}>
                        <Text style={{fontSize:20, fontFamily:'Gilroy-Bold'}}>Long chapter name can be shown here.</Text>
                        <View style={{flexDirection:'row', marginTop:7}}>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                        </View>
                    </View>                
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoChapter}>
                    <View style={styles.videoCardContent}>
                    <ImageBackground source={require('../assets/bio.jpg')}
                            style={{width:wp('100%'), height:hp('27%')}}
                            imageStyle={{borderRadius:2}}>
                        <View style={styles.chapterName}>
                            <Text style={{fontFamily:'Gilroy-SemiBold', fontSize:10,color:'white'}}>Biology</Text>
                        </View>
                    </ImageBackground>
                    </View>
                    <View style={{height:hp('13%'),width:wp('80%'),justifyContent:'center'}}>
                        <Text style={{fontSize:20, fontFamily:'Gilroy-Bold'}}>Long chapter name can be shown here.</Text>
                        <View style={{flexDirection:'row', marginTop:7}}>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                        </View>
                    </View>                
                </TouchableOpacity>
                <TouchableOpacity style={styles.videoChapter}>
                    <View style={styles.videoCardContent}>
                    <ImageBackground source={require('../assets/bio.jpg')}
                            style={{width:wp('100%'), height:hp('27%')}}
                            imageStyle={{borderRadius:2}}>
                        <View style={styles.chapterName}>
                            <Text style={{fontFamily:'Gilroy-SemiBold', fontSize:10,color:'white'}}>Biology</Text>
                        </View>
                    </ImageBackground>
                    </View>
                    <View style={{height:hp('13%'),width:wp('80%'),justifyContent:'center'}}>
                        <Text style={{fontSize:20, fontFamily:'Gilroy-Bold'}}>Long chapter name can be shown here.</Text>
                        <View style={{flexDirection:'row', marginTop:7}}>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                            <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                            <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                        </View>
                    </View>                
                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'White', 
        width:wp('100%'), 
        height:hp('60%'),
        justifyContent:'center',
        alignItems:'center',
       
    },
    videoChapter:{
        width:wp('90%'),
        alignItems:'center',
        elevation:5,
        height:hp('40%'),
        backgroundColor:'white',
        marginTop:20,
        borderRadius:4
    },
    videoCardContent:{
        width:wp('90%'),
        alignItems:'center',
        height:hp('27%'),
        backgroundColor:'white'
    },
    chapterName:{
        width:wp('18%'),
        height:hp('3.3%'),
        backgroundColor:'#00c458',
        bottom:0,
        position:'absolute',
        marginBottom:10,
        marginLeft:306,
        justifyContent:'center',
        alignItems:'center'
    },
    infoCourseTxt2:{
       color:'#9f9f9f',
       fontFamily:"Gilroy-Medium",
       fontSize:10,
       marginLeft:5,
       marginRight:12
    },
})