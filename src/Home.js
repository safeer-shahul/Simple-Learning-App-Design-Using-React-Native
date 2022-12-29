import React, {Component} from "react";
import { View,
         StyleSheet,
         TouchableHighlight,
         Image,
         Text,
         ImageBackground,
         ScrollView,
         TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import ModalDropdown from "react-native-modal-dropdown";

export default class Home extends Component{
    render(){
        return(
            
          <ScrollView contentContainerStyle={{
               flexDirection: 'column', height:927}}
               showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.menuClose}>
                        <TouchableHighlight 
                            style={styles.closeBtn}
                            onPress={()=> this.props.navigation.openDrawer()}
                            underlayColor='#002333'>
                            <Icon name='widgets' color={'#00c458'} size={20}/>
                        </TouchableHighlight>
                    </View>
                    <Image source={require('../assets/logo.png')}
                        style={styles.logo}/>
                    <View style={styles.roundedRectangle1}>
                        <View style={styles.round}></View>
                        <Text style={styles.txtClasses}>Classes</Text>
                    </View>
                </View>
                <View style={{height:'10%',marginTop:10}}>
                    <View style={styles.greetTxt}>
                        <Text style={{color:'#002333',
                            fontSize:12,
                            fontFamily:'Gilroy-Medium',
                            marginLeft:20}}>Good Morning</Text>
                        <Text style={{color:'#002333', 
                            fontSize:24,
                            fontFamily:'Gilroy-Bold',
                            marginLeft:20}}>Matt Murdock</Text>
                    </View>
                </View>
                <View style={styles.drpdwnContainer}>
                <ImageBackground source={require('../assets/Group386.png')}
                style={{height:65,width:'100%',opacity:10}}
                imageStyle={{ borderRadius: 4}}>
                    <ModalDropdown style={styles.dropdown2} 
                        textStyle ={styles.textDrpdwn1}
                        options={['Class 1','Class 2','Class 3','Class 4',
                        'Class 5','Class 6','Class 7','Class 8','Class 9','Class 10']}
                        defaultValue='Select Class'
                        dropdownTextStyle={styles.dropdown2_2}
                        dropdownStyle={styles.dropdown2_1}  
                        animated={true}
                        underlayColor="black">
                    </ModalDropdown>
                </ImageBackground>
                </View>
                
                <View style={styles.subjectContainer}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    marginLeft: 20,
                    marginRight:20,
                    paddingRight:30
                      }}>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>Biology</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>Physics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>Chemistry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>Mathematics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>English</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundedRectangle2}
                                          onPress={()=> this.props.navigation.navigate('Course')}>
                            <View style={styles.round2}></View>
                            <Text style={styles.txtSubjets}>Computer Science</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </View>
                <View style={styles.courseSlider}>
                    <Text style={styles.rcntCourse}>Recent Courses</Text>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    marginLeft: 20,
                    marginRight: 20,
                    paddingRight:30
                    }}>
                    <View style={styles.videoCard}>
                        <ImageBackground source={require('../assets/phy.jpg')}
                            style={{width:'100%', height:'100%'}}
                            imageStyle={{borderRadius:2,opacity:0.5}}>
                            <TouchableHighlight style={styles.rcntCourseBtn}
                            onPress={()=> this.props.navigation.navigate('Video')}>
                                    <View style={{ marginLeft:10}}>
                                        <View style={{flexDirection:'row'}}>
                                           <Icon name='play-circle-outline' color={'white'} size={24}
                                           style={{marginTop:80}}/>
                                           <Text style={styles.courseTitle}>Course Title</Text>
                                        </View>
                                        <View style={styles.loader1}><View style={styles.loader1_2}></View></View>
                                    </View>
                            </TouchableHighlight>
                        </ImageBackground>
                    </View>
                    <View style={styles.videoCard}>
                        <ImageBackground source={require('../assets/math.jpg')}
                            style={{width:'100%', height:'100%'}}
                            imageStyle={{borderRadius:2,opacity:0.4}}>
                            <TouchableHighlight style={styles.rcntCourseBtn}
                            onPress={()=> this.props.navigation.navigate('Video')}>
                                    <View style={{ marginLeft:10}}>
                                        <View style={{flexDirection:'row'}}>
                                           <Icon name='play-circle-outline' color={'white'} size={24}
                                           style={{marginTop:80}}/>
                                           <Text style={styles.courseTitle}>Course Title</Text>
                                        </View>
                                        <View style={styles.loader1}><View style={styles.loader2_2}></View></View>
                                    </View>
                            </TouchableHighlight>
                        </ImageBackground>
                    </View>
                    <View style={styles.videoCard}>
                        <ImageBackground source={require('../assets/bio.jpg')}
                            style={{width:'100%', height:'100%'}}
                            imageStyle={{borderRadius:2,opacity:0.4}}>
                            <TouchableHighlight style={styles.rcntCourseBtn}
                            onPress={()=> this.props.navigation.navigate('Video')}>
                                    <View style={{ marginLeft:10}}>
                                        <View style={{flexDirection:'row'}}>
                                           <Icon name='play-circle-outline' color={'white'} size={24}
                                           style={{marginTop:80}}/>
                                           <Text style={styles.courseTitle}>Course Title</Text>
                                        </View>
                                        <View style={styles.loader1}><View style={styles.loader3_2}></View></View>
                                    </View>
                            </TouchableHighlight>
                        </ImageBackground>
                    </View>
                    </ScrollView>
                </View>
                <View style={styles.sliderInfo}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginLeft: 20,
                        paddingRight:30
                      }}>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoCircle}></View>
                        <Text style={styles.infoText1}>Target live classes</Text>
                        <Text style={styles.infoText2}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                        <TouchableHighlight style={styles.infoBtn}>
                            <Text style={styles.btnText}>
                                Book a free Class
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoCircle}></View>
                        <Text style={styles.infoText1}>Avail free online counselling session</Text>
                        <Text style={styles.infoText2}>By LearningHub's career experts</Text>
                        <TouchableHighlight style={styles.infoBtn}>
                            <Text style={styles.btnText}>
                                Schedule a call
                            </Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                </View>
          </ScrollView>
            
        )
    }
}

const styles =StyleSheet.create({
 closeBtn:{
     borderColor:'#d5d5d5',
     borderWidth:1,
     borderRadius:4,
     justifyContent:'center',
     alignItems:'center',
     height:'100%',
     width:'100%'
 },
 menuClose:{
     width:40,
     height:40,
     marginLeft:20,
     marginTop:20,
     marginBottom:20
 },
 header:{
    width:'100%',
    height:'10%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
 },
 logo:{
     width:130,
     height:40,
     resizeMode: 'stretch',
     marginTop:4,
     marginLeft:10
 },
 roundedRectangle1:{
    borderWidth:1,
    borderColor:'#00c458',
    borderRadius:4,
    height:32,
    width:75,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginRight:20,
    marginLeft:118
 },
 round:{
    backgroundColor:'#007345',
    height:16,
    width:16,
    borderRadius:90
 },
 txtClasses:{
    color:'#00c458',
    fontSize:12,
    fontFamily:'Gilroy-SemiBold',
    marginLeft:5
 },
 greetTxt:{
    width:'100%',
    justifyContent:'center',
    marginTop:20
 },
 drpdwnContainer:{
   marginLeft:20,
   width:"90%",
 },
 textDrpdwn1:{
     color:'#bac3c7',
     fontFamily:"Gilroy-Regular",
     fontSize:12,
     marginLeft:20,            
 },
 dropdown2:{
     height:65,
     width:'100%',
     justifyContent:'center',
     borderRadius:4,
     borderColor:'#13394a',
     borderWidth:1,
 },
 dropdown2_1:{
     width:'90%',
     justifyContent:'center',
     borderRadius:4,
     backgroundColor:'#062e40',
     borderColor:'#13394a',
     borderWidth:1,

 },
 dropdown2_2:{
     color:'#00c458',
     width:'90%',
     justifyContent:'center',
     borderRadius:4,
     backgroundColor:'#062e40',
     borderColor:'#13394a',
     borderWidth:1,
     fontFamily:"Gilroy-Regular",
     fontSize:14
},
subjectContainer:{
    flexDirection:'row',
    height:'6.5%',
    marginTop:10,
    width:'100%',
    marginRight:10
},
roundedRectangle2:{
    borderWidth:1,
    borderColor:'#002333',
    borderRadius:8,
    height:39,
    width:'auto',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    marginRight:10,
    marginTop:10
},
round2:{
    backgroundColor:'#00c458',
    height:23,
    width:23,
    borderRadius:90,
    marginLeft:10
    },
    txtSubjets:{
       color:'#002333',
       fontSize:12,
       fontFamily:'Gilroy-SemiBold',
       marginLeft:10,
       marginRight:10
    },
    courseSlider:{
        height:'16%',
        marginTop:5,
    },
    rcntCourse:{
        color:'#002333',
        fontFamily:'Gilroy-Medium',
        fontSize:12,
        marginLeft:20
    },
    videoCard:{
        width:213,
        height:121,
        marginTop:5,
        backgroundColor:'black',
        borderRadius:2,
        marginRight:10
    },
    rcntCourseBtn:{
        width:'100%',
        height:'100%',
        marginBottom:5,
    },    
    courseTitle:{
        color:'white',
        marginTop:84,
        marginLeft:5,
        fontFamily:'Gilroy-SemiBold',
        fontSize:12
    },
    loader1:{
        width:'92%', 
        height:3,
        backgroundColor:'#ffffff1a',
        marginTop:3
    },
    loader1_2:{
        width:'30%', 
        height:3,
        backgroundColor:'#3f57ce',

    },
    loader2_2:{
        width:'70%', 
        height:3,
        backgroundColor:'#3f57ce',

    },
    loader3_2:{
        width:'50%', 
        height:3,
        backgroundColor:'#3f57ce',
    },
    sliderInfo:{
        height:367,
        marginTop:20,        
    },
    infoContainer:{
    width:238,
    height:367,
    backgroundColor:'#002333',
    borderRadius:8,
    marginRight:12,
    justifyContent:'center'
    },
    infoCircle:{
        height:79,
        width:79,
        backgroundColor:'#002e43',
        borderRadius:90,
        marginLeft:20,
    },
    infoText1:{
        fontSize:18, 
        fontFamily:'Gilroy-Bold',
        color:'white',
        marginLeft:20,
        marginTop:20,
        width:199,
        height:46,
    },
    infoText2:{
        marginLeft:20,
        color:'#446270',
        width:174,
        height:96,
        marginTop:10
    },
    infoBtn:{
        height: 47,
        width:145,
        color:'white',
        fontFamily:"Gilroy-Regular",
        backgroundColor:'#00c458',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:4,
        marginLeft:20
    },
    btnText:{
        fontFamily:'Gilroy-SemiBold',
        color:'white',
        fontSize:12
    }
})