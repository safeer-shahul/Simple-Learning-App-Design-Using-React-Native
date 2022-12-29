import React,{Component} from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableHighlight} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.menuClose}>
                <TouchableHighlight style={styles.closeBtn}
                    onPress={()=> this.props.navigation.closeDrawer()}
                    underlayColor='white'>
                  <Icon name='close' color={'#00c458'} size={18}/>
                </TouchableHighlight>
                </View>
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
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>
                   <Text style={styles.menu}>Exam corner</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>   
                   <Text style={styles.menu}>Subscriptions</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>
                   <Text style={styles.menu}>Analytics</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>
                   <Text style={styles.menu}>Downloads</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>
                   <Text style={styles.menu}>Notifications</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>   
                   <Text style={styles.menu}>Referals</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainer}></View>   
                   <Text style={styles.menu}>Share App</Text>
                </View>
                <View style={styles.menuContainer}>
                   <View style={styles.boxContainerRed}></View>
                   <Text style={styles.menuRed}>Logout</Text>
                </View>
                    <TouchableHighlight style={styles.continueBtn}
                        underlayColor='#00c458'
                        onPress={()=> this.props.navigation.closeDrawer()}>
                        <Text style={styles.btnText}>
                                 Enquire now
                        </Text>
                    </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#002333',
    },
    menuClose:{
        width:40,
        height:40,
        marginLeft:20,
        marginTop:33,
    },
    menuContainer:{
        flexDirection:'row',
        marginTop:13,
        marginLeft:20,
        borderBottomWidth:1,
        borderBottomColor:'#243c47',
        paddingBottom:12,
        width:'79%'
    },
    menu:{
        fontSize:14,
        marginTop:6,
        marginLeft:10,
        color:'#fff',
        fontFamily:"Gilroy-Regular",
        
    },
    boxContainer:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:'#00c458',
        borderRadius:4
    },
    
    menuRed:{
        fontSize:14,
        marginTop:6,
        marginLeft:10,
        color:'#e14949',
        fontFamily:"Gilroy-Regular",
    },
    boxContainerRed:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:'#e14949',
        borderRadius:4
    },
    profileContainer:{
        height: '15%',
        width:'100%', 
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#002333',
        marginBottom:10,
        marginTop:10
    },
    profileIcon:{
        height:80,
        width:80,
        backgroundColor:'#bbbbbb',
        borderRadius: 50,
        marginTop:10,
        marginLeft:20,
        borderColor:'#00c458',
        borderWidth:3
    },
    infoView:{
        marginLeft:15
    },
    profileImage:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },    
    Text1:{
        fontFamily:"Gilroy-SemiBold",
        color:"#fff",
        fontSize:14
    },
    Text2:{
        fontFamily:"Gilroy-Regular",
        color:"#6a828e",
        fontSize:12
    },
    continueBtn:{
        height: 55,
        width:'79%',
        color:'white',
        fontFamily:"Gilroy-Regular",
        borderColor:'#00c458',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        borderRadius:4,
        borderWidth:1,
        marginLeft:20        
    },
    btnText:{
        fontFamily:'Gilroy-SemiBold',
        color:'white',
        fontSize:12
    },
    closeBtn:{
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    }
})