import React from 'react';
import {View, StyleSheet} from 'react-native';
import SignIn from '../Components/SignIN/SignIn';

const SignInscreen = (props) => {
    return (
        <View>
            <SignIn {...props}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SignInscreen;

