import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Google from '../../assets/GooglePng.png'
const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxstyles}>
                <View style={{justifyContent: 'center',alignSelf: 'center',alignItems: 'center',textAlign: 'center'}}>
                <View style={styles.IconDiv}>
                  <FontAwesome5 
                  name="user"
                  color="white"
                  size ={40} />
                  </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:20,fontWeight: 'bold'}}>Register</Text>
                    </View>
                    <View>
                        <Text style={{marginHorizontal:12}}>Create Your Account. It's Free and only Takes A Minute</Text>
                    </View>
                </View>
                <View>
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Enter Tour Name"
        styles={{
          textInput: {
            backgroundColor: "#fff",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            border:"none",
            outline: "none"
          },
          textInputContainer: {
            backgroundColor: "#fff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="ios-person-circle" size={24} />
          </View>
        )}
      />
    </View>

    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Enter Your E-Mail"
        styles={{
          textInput: {
            backgroundColor: "#fff",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            border:"none",
            outline: "none"
          },
          textInputContainer: {
            backgroundColor: "#fff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="md-mail" size={24} />
          </View>
        )}
      />
    </View>

    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Enter Your Password"
        styles={{
          textInput: {
            backgroundColor: "#fff",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            border:"none",
            outline: "none"
          },
          textInputContainer: {
            backgroundColor: "#fff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            {/* <Ionicons name="location-sharp" size={24} /> */}
            <FontAwesome5 name="unlock-alt" size={24}/>
          </View>
        )}
      />
    </View>

    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Enter Your Confirm Password"
        styles={{
          textInput: {
            backgroundColor: "#fff",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            border:"none",
            outline: "none"
          },
          textInputContainer: {
            backgroundColor: "#fff",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            {/* <Ionicons name="location-sharp" size={24} /> */}
            <FontAwesome5 name="unlock-alt" size={24}/>
          </View>
        )}
      />
    </View>

                 </View>
            {/* Button */}

            
            <View style={{marginLeft:100,marginRight:100,marginTop:30}}>
            <TouchableOpacity>
                <View style={{ backgroundColor:"#F15b2F" ,textAlign: 'center',alignItems: 'center'}}>
                    <Text style={{padding:10}}>Register</Text>
                </View>
                </TouchableOpacity>
            </View>
            

            {/* Sign in with Google */}

            
            <View style={{flexDirection: 'row',marginHorizontal:100,textAlign: 'center',alignItems: 'center',marginTop:30}}>
                <View>
                <Image source={Google} style = {{resizeMode: 'contain',width : 20,height: 20}} />
                </View>
                <TouchableOpacity>
                <View style={{marginLeft:10}}>
                    <Text>Register With Google</Text>
                </View>
                </TouchableOpacity>
            </View>
           
             </View>
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    boxstyles:{
        marginHorizontal:12,
        marginVertical:12,
        // backgroundColor:"#eee",
        height:"100%"
    },
    IconDiv:{
        marginTop:10,
        border:"6px solid tan",
        backgroundColor:"#f15b2F",
        height:80,
        width:80,
        borderRadius:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
})

export default Register;

{/* <View style={{marginTop:40,flexDirection:'row'}}> */}
//             <GooglePlacesAutocomplete
//             placeholder="Search"
//             styles={{
//                 textInput:{
//                     // backgroundColor:"#eee",
//                     borderRadius:20,
//                     fontWeight:'700',
//                     marginTop:7
//                 },
//                 // textInputContainer:{
//                 //     backgroundColor:"#eee",
//                 //     // borderRadius:50,
//                 //     flexDirection: 'row',
//                 //     // alignItems: 'center',
//                 //     marginRight:10
//                 // }
//             }}
//             renderLeftButton={()=>(
//                 <View style={{
//                     // backgroundColor:"#eee",
//                     flexDirection: 'row',
//                     textAlign: 'center',
//                     borderRadius:20,
//                     alignItems: 'center',}}>
//                     <Ionicons name="location-sharp" size={24}/>
//                 </View>
//             )}
//             renderRightButton={()=>(
//                 <View style={{
//                     // backgroundColor:"#eee",
//                     flexDirection: 'row',
//                     // padding:10,
//                     textAlign: 'center',
//                     borderRadius:20,
//                     alignItems: 'center',
//                     // justifyContent: 'center'
//                 }}>
//                     <View style={{marginHorizontal:5}}><AntDesign name="clockcircle" size={11}/></View>
//                     <View style={{marginHorizontal:5}}><Text>Search</Text></View>
                    
//                 </View>
//             )}
//             />
//         </View>