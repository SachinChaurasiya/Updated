import React from 'react';
import {View, StyleSheet,Text, ScrollView} from 'react-native';
import Aboutus from '../Components/Home/AboutUs';
import FTH_Page from '../Components/Home/FHT_Page';
import Footer from '../Components/Home/Footer';
import OfferPromoCode from '../Components/Home/OfferPromoCode';
import HotelDeals from '../Components/Hotel/HotelDeals';
import HotelForms from '../Components/Hotel/HotelForms';
import MemberAccess from '../Components/Hotel/MemberAccess';


const Hotelsscreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
               <FTH_Page/>
               <HotelForms/>
               <OfferPromoCode/>
               <HotelDeals/>
               <MemberAccess/>
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

export default Hotelsscreen;



