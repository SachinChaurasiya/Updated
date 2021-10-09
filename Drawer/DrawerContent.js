import React,{useState,} from 'react'
import { StyleSheet,View, Image ,Linking,TouchableOpacity} from 'react-native';
import {DrawerContentScrollView,DrawerItem}from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
// import {StackNavigator} from 'react-navigation';
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontAwesome5} from 'react-native-vector-icons';
import {Entypo} from 'react-native-vector-icons';
import { Title,Text,TouchableRipple,Switch,Drawer } from 'react-native-paper';  

// components 
import FlightScreen from '../Screens/FlightScreen'

// Image
import Logo from '../assets/Travomint.png'
// import SignInScreen from './SignInScreen';

    const DrawerContent = (props) => {  

        const Separator = () => (
            <View style ={styles.separator}></View>
          )

        const [isDarkTheme , setIsDarkTheme] = useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }


        return (
          <View style={{flex:1}}>
               <View  style={{marginTop:30,flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
               <Image source={Logo} style={{width:150 , height:30 , marginLeft:10}}/>
            </View>
            <View style={{marginRight:20, marginTop:5}}>
               <TouchableOpacity>
                     <FontAwesome5
                     onPress={()=> props.navigation.dispatch(DrawerActions.closeDrawer())}
                     name='bars' size={28} color='#000'/>
               </TouchableOpacity>
            </View>
      </View>
      <DrawerContentScrollView  style={{marginTop:10}}  {...props}>
      <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
            style={{cursor: 'pointer'}}
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                // <Icons
                // name="home-outline"
                // color={color}
                // size={size}
                // />
                <Entypo name='aircraft-take-off' size={size} color={color}/>
            )}
            label="Flight"
            onPress={()=>{props.navigation.navigate('Flights')}}
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                // <Icons
                // name="home-search-outline"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='hotel' size={size} color={color}/>
            )}
            label="Hotels"
            onPress={()=>{props.navigation.navigate('Hotels')}}
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                // <Icons
                // name="account-circle-outline"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='exchange-alt' size={size} color={color}/>
            )}
            label="Transfer"
            onPress={()=>{props.navigation.navigate('Transfers')}}
            />

                    <Separator/>


                    <DrawerItem
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                // <Icons
                // name="run-fast"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='sign-in-alt' size={size} color={color}/>
            )}
            onPress={()=>props.navigation.navigate('SignIns')}
            label="Sign In"
            />

            <DrawerItem
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                // <Icons
                // name="run-fast"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='user-plus' size={size} color={color}/>
            )}
            onPress={()=>{props.navigation.navigate('Registers')}}
            label="Register"
            />


            <DrawerItem
            options={{
                headerShown:false
            }}
            icon={({color,size})=>(
                // <Icons
                // name="run-fast"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='clipboard' size={size} color={color}/>
            )}
            onPress={()=>{props.navigation.navigate('MyBooking')}}
            label="My Booking"
            />

           <DrawerItem
           options={{
            headerShown:false
        }}
            icon={({color,size})=>(
                // <Icons
                // name="account-check-outline"
                // color={color}
                // size={size}
                // />
                <FontAwesome5 name='headset' size={size} color={color}/>
            )}
            onPress={()=>{props.navigation.navigate('Supports')}}
            label="Support"
            />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
                <TouchableRipple onPress={()=> {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>
                            Dark Theme
                        </Text>
                        <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
          </View>
        );
      }

      
const styles = StyleSheet.create({
    draweContent: {
      flex: 1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:40,
        flexDirection:'row',
        alignItems: 'center'
    },
    section:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom : 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        paddingVertical:12
    },
    separator: {
        marginVertical: 20,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });


export default DrawerContent;