import React from 'react';
import { View, Button, StyleSheet } from 'react-native';


const DefaultButton = (props) => {
    return (
        <View style={{...styles.button, ...props.style}}>
            <Button {...props} onPress={props.onPress} />
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
    }
});

export default DefaultButton;