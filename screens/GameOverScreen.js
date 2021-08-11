import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../themes/colors';
import BodyText from '../components/BodyText';
import DefaultButton from '../components/DefaultButton';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image} 
                    source={require('../assets/success.png')}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}> Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            </View>
            <DefaultButton title="NEW GAME" onPress={props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    }
});

export default GameOverScreen;