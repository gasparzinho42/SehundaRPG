import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity,Modal, FlatList } from 'react-native';
import getRealm from '../services/realm'
import styles from '../styles/home'
import app from './index'
import personagemSchema from '../schemas/personagemSchema';



// import { Container } from './styles';

const home = ({ navigation }) => {
    
    const [modal, setModal] = useState(true);
    const [pers, setPers] = useState([]);
    const teste = [{
        bio: {
            nome: 'marcos',
            crenca: 'odin',
            instinto: 'puro'
        },
        atributosPrimary: [ 
            {id: 0, sucesso:   10   ,atributo:   10 , falha:  10 },
            {id: 1, sucesso:   10 ,atributo:  10  , falha:  10 },
            {id: 2, sucesso:   10 ,atributo:  10  , falha:  10 },
            {id: 3, sucesso:  10 ,atributo:  10  , falha:  10 },
            {id: 4, sucesso:  10 ,atributo:  10 , falha:  10 },
            {id: 5, sucesso:  10 ,atributo:  10  , falha:  10 }
        ],
        atributosSecondary: [
            {id: 0  ,valor_atual: 15 , valor_total:  17  },
            {id: 1 ,valor_base: 12},
            {id: 2 ,valor_base: 12},
            {id: 3 ,valor_base: 12},
            {id: 4 ,valor_base: 12}
            ],
        talentos: [{ nome: 'batedor' }]
    }]
    

   
 
    const [confirmed, setConfirmed] = useState(false)
    async function savePers(){
        const realm = await getRealm();
        try {
            realm.write(() => {
                realm.create( 'personagemSchema', teste )
            })
        } catch (error) {
            console.log('erro bro')
        }

    }
   useEffect(() => {
       savePers()

        async function loadPers() {
            const realm = await getRealm();
            
            const data = realm.objects( 'persongameSchema' )
            setPers( data )
    
            }
        loadPers()
    }, [])
   
    
  
    return (
        
        <View style = {styles.create}>
            
            
        <TouchableOpacity
                
                style = { styles.button }
                onPress = { () => {
                         
                     navigation.navigate('criação')
                         
                        
                    } }
            >
                <Text style = {styles.addpersonagem}>+</Text>
                   


            </TouchableOpacity>

            <FlatList
            style = {styles.lista}
            numColumns = {1}
            centerContent = 'true'
            keyExtractor = {item => item.id}
            
            data = { pers }
                     
                
            renderItem = {({ item }) => 
            <Text style = {styles.listaText} > { item.bio.nome } </Text>

                    
            }
                
            />

                
              
                


            
            
            

        </View>




  )
}

export default home;