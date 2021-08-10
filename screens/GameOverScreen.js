import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import BodyText from '../components/BodyText';
import DefaultButton from '../components/DefaultButton';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <Image source={require('../assets/success.png')} />
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <DefaultButton title="NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;