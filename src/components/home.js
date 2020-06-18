import React, { useState, } from 'react';
import { View, Text, TouchableOpacity,Modal, } from 'react-native';
import styles from '../styles/home'
import app from './index'

// import { Container } from './styles';

const home = ({ navigation }) => {
    const [modal, setModal] = useState(true);
    


    return (
        <View style = {styles.container}>
            <Modal visible = { modal } transparent = { true }  style= {styles.modal} >
                   
                <TouchableOpacity
                    style = { styles.button }
                    onPress = { () => {
                         setModal( false )
                         navigation.navigate('criação')
                        
                        } }
                >
                    <Text style = {styles.addpersonagem}>  +  </Text>
                    <Text style = {styles.textAddPersonagem}> Criar personagem </Text>


                </TouchableOpacity>


            </Modal>
            
            

        </View>




  )
}

export default home;