import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../themes/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import GameButton from '../components/GameButton';

const GameOverScreen = (props) => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
        }

        Dimensions.addEventListener('change', updateLayout);

        return () => Dimensions.removeEventListener('change', updateLayout);
    })

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={
                    availableDeviceWidth < 500 ? styles.imageContainer : {...styles.imageContainer, ...styles.imageWideContainer}
                }>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/success.png')}
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}> Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
                </View>
                <GameButton onPress={props.onRestart}>NEW GAME</GameButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
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
        marginVertical: Dimensions.get('window').height / 30,
    },
    imageWideContainer: {
        borderRadius: 200,
        width: 400,
        height: 400,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').width / 60,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    }
});

export default GameOverScreen;