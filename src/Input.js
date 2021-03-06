import React from 'react'
import {View,TextInput,Button,StyleSheet} from 'react-native'

export const Input = props => {
    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title="Add Post"/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
})