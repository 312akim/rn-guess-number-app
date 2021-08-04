import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
       <View style={{...styles.card, ...props.style}}>
           {props.children}
       </View>     
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        //iOS shadow ***
        shadowColor: 'rgba(0,0,0,0)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //iOS shadow end ***
        //Android shadow ***
        elevation: 12,
        //Android shadow end ***
        backgroundColor: 'white',
    },
});

export default Card;