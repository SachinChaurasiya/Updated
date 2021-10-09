import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native';
import Aboutus from '../Components/Home/AboutUs';
import Footer from '../Components/Home/Footer';
import SupportContactDetails from '../Components/Support/SupportContactDetails';
import SupportContactForm from '../Components/Support/SupportContactForm';
import SupportHeader from '../Components/Support/SupportHeader';

const Supportscreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Text>Support</Text> */}
            <SupportHeader/>
            <SupportContactForm/>
            <SupportContactDetails/>
            <Aboutus/>
            <Footer/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Supportscreen;


{/* <ScrollView>
          <View style={styles.container}>
            {/* <Text>Support</Text> */}
            // <ContactFormHeader/>
            // <ContactDetails/>
            // <Aboutus/>
            {/* <Footer/> */}
            // <StatusBar style="auto" />
        //   </View>
          //</ScrollView> 