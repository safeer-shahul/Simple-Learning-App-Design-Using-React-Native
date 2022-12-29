import React, {Component} from "react";
import { View,
         StyleSheet,
         TouchableHighlight,
         Text,
         ScrollView,
         TouchableOpacity
       } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Course extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.header}>
                        <View style={styles.menuClose}>
                            <TouchableHighlight style={styles.closeBtn}
                                onPress={()=> this.props.navigation.navigate('Home')}>
                                <Icon name='chevron-left' color={'#00c458'} size={25}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.courseInfoContainer}>
                        <Text style={styles.courseHeaderTxt}>Biology</Text>
                            <View style={{flexDirection:'row', marginTop:10}}>
                                <Icon name='radio-button-checked' color='#00c458' size={12}/>
                                <Text style={styles.infoCourseTxt}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#00c458' size={12}/>
                                <Text style={styles.infoCourseTxt}>124 Hours</Text>
                            </View>
                    </View>
                </View>
                <View style={{marginTop:-20,
                    width:'90%',
                    marginLeft:20,
                    justifyContent:'center',
                    alignItems:'center',
                    height:'70%'}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    marginRight: 20,                    
                    flexDirection: 'column', 
                    height:'auto'                    
                    }}>
                        <TouchableOpacity style={styles.chapterInfoContainer}
                        onPress={()=> this.props.navigation.navigate('MyTopTab')}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chapterInfoContainer}>
                            <Text style={styles.chapterName}>Long chapter name can be shown here.</Text>
                            <View style={{flexDirection:'row', marginTop:7,marginLeft:20}}>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>12 Chapters</Text>
                                <Icon name='radio-button-checked' color='#9f9f9f' size={12}/>
                                <Text style={styles.infoCourseTxt2}>124 Hours</Text>
                            </View>
                        </TouchableOpacity>
                </ScrollView>
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
    marginTop:49
 },
 topContainer:{
    backgroundColor:'#00202f',
    height:235
 },
 courseHeaderTxt:{
    fontFamily:'Gilroy-Bold',
    fontSize:24,
    color:'#fff'
 },
 courseInfoContainer:{
    marginLeft:20,
    marginTop:50,
 },
 infoCourseTxt:{
    color:'#00c458',
    fontFamily:"Gilroy-Medium",
    fontSize:10,
    marginLeft:5,
    marginRight:12
 },
 chapterInfoContainer:{
    backgroundColor:'white',
    height:115,
    width:369,
    justifyContent:'center',
    elevation:5,
    borderRadius:4,
    marginTop:10,
    marginBottom:10
 },
 chapterName:{
    fontFamily:'Gilroy-SemiBold',
    fontSize:18,
    color:'#002333',
    marginLeft:20,
    marginRight:100
 },
 infoCourseTxt2:{
    color:'#9f9f9f',
    fontFamily:"Gilroy-Medium",
    fontSize:10,
    marginLeft:5,
    marginRight:12
 },
})