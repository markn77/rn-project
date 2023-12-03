import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const Question1 = ({navigation}) => {
    // const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const correctAnswer = () => {
        setNumCorrect(numCorrect+1);
        navigation.navigate("Question2", {numCorrect: numCorrect})
    }

    const nextQuestion = () => {
        navigation.navigate("Question2", {numCorrect: numCorrect})
    }


    const [numCorrect, setNumCorrect] = useState(0);

    return (
        <View style={styles.container}>
            <img style={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" />
            <Text style={styles.question}>What is the capital of Canada?</Text>
            <Text>{numCorrect}</Text>
            <TouchableOpacity style={styles.questionButton} onPress={correctAnswer}>
                <Text style={styles.buttonText}>Ottawa</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>Toronto</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.questionButton} onPress={nextQuestion}>
                <Text style={styles.buttonText}>Vancouver</Text>
            </TouchableOpacity> 
            <Text>Email: {auth.currentUser?.email}</Text>
            {/* <TouchableOpacity
                onPress={handleNextPage}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next Page</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Question1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    image: {
        width: '30%',
        border: '1px solid'
    },
    question: {
        fontSize: 25,
    },
    questionButton: {
        backgroundColor: '#0782F9',
        width: '30%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    }
})