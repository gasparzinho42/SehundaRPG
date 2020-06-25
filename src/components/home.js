import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity,Modal, } from 'react-native';
import styles from '../styles/home'
import app from './index'
import { FlatList } from 'react-native-gesture-handler';
import newuser from './newuser';

// import { Container } from './styles';

const home = ({ navigation }) => {
    const [modal, setModal] = useState(true);
    

   
    const user = new newuser()

    const [confirmed, setConfirmed] = useState(false)
   
  
    return (
        
        <View style = {styles.create}>
            
            <View style = {styles.create}>
            <TouchableOpacity
                    style = { styles.button }
                    onPress = { () => {
                         
                         navigation.navigate('criação')
                         
                        
                        } }
                >
                    <Text style = {styles.addpersonagem}>  +  </Text>
                   


                </TouchableOpacity>
                {/* <FlatList
                numColumns = {1}
                data = { user }
                renderItem = {({item}) => {
                    <View>
                        <Text> { user.getbio() } </Text>
                    </View>
                }}
                
                /> */}

                
            </View>     
                


            
            
            

        </View>




  )
}

export default home;