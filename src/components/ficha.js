import 'react-native-gesture-handler'
import React, { useState,Component } from 'react';
import { View, TextInput, Text, FlatList, Image, TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../styles/ficha';


   
    
export default function ficha() {


    const [ estresse, setEstresse ] = useState(0);

    const [data, setData] = useState([

        {id: "00", name: "vigor",valor_atual: "10", valor_total: "/10"},
        {id: "01", name: "Def",valor_base: "10"  },
        {id: "02", name: "P.P",valor_base: "10"  },
        {id:"03", name: "P.D",valor_base: "10"  },
        {id: "04", name: "Vont",valor_base: "10"  }

    ])

    const [data2, setData2] = useState([
        {id: "01", name: "Robustez", sucesso: "6",atributo: "10", falha: "15"},
        {id: "02", name: "Agilidade", sucesso: "6",atributo: "10", falha: "15"},
        {id: "03", name: "Ardileza", sucesso: "6",atributo: "10", falha: "15"},
        {id: "04", name: "Vigilância", sucesso: "6",atributo: "10", falha: "15"},
        {id: "05", name: "Sabedoria", sucesso: "6",atributo: "10", falha: "15"},
        {id: "06", name: "Resolução", sucesso: "6",atributo: "10", falha: "15"}

    ])  
    const [check,setCheck] = useState(false)
    const [text, setText] = useState("")

    const adicionar = () => {
        if(estresse < 10){
            setEstresse( estresse + 1 )
        }
    }
    const retirar = () => {
        if (estresse > 0){
            setEstresse( estresse - 1 )
        }
    }

    return (
        //   início do container
        <View style = {styles.container}>
            {/* começo da bio */}
            <View className = "bio" style = {styles.bio}>
                {/* campo nome */}
                <View className = "field" style = {styles.field}>
        
                    <Text style = {styles.label}>Nome: </Text>
                    <TextInput style = {styles.input_nome}  placeholder = "nome"/>
            
                </View>
                {/* fim campo nome */}

                {/* campo da crença */}

                <View className = "field" style = {styles.field}>
        
                    <Text style = {styles.label}>Crença: </Text>
                    <TextInput 
                        multiline = {true}
                        numberOfLines = {2}
                        style = {styles.input_2linhas} 
                        placeholder = "Crença" 
                        onChangeText = {text => setText(text)}
                        defaultValue = {text}
                    />
                
                </View>
                {/* fim campo crença */}

                {/* campo  instinto */}
                <View className = "field" style = {styles.field}>
        
                    <Text style = {styles.label}>Instinto: </Text>
                    <TextInput 
                    style = {styles.input_2linhas} 
                    placeholder = "instinto" 
                    multiline = {true}
                    numberOfLines = {2}
                    
                    />
        
                </View>
                {/* fim campo instinto */}

                {/* imagem do personagem */}
                <View className = "portrait" style = {styles.portrait}>
                    <Image
                    style = {styles.image}
                    source={require('../Assets/goblin.jpg')}
        
                    />
                </View>
                {/* fim imagem do personagem */}

            </View>
            {/* fim da bio */}

            {/* início bolco dos atributos */}
            <View style = {styles.AtributosBloco}>
                {/* primeira lista de atributos */}
                <FlatList
                    numColumns = '5'
                    data = {data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                    return (
                        // retorna os items do DATA
                        <View style={styles.item}>

                            <Text style={styles.text}>{item.name}</Text>
                            <Text style = {styles.vigorItems}>{item.valor_base} {item.valor_atual} {item.valor_total}</Text>

                        </View>
                        
                    );
                    }} 
                />
                {/* fim primeira lista de atributos */}

                {/* segunda lista de atributos */}
                <FlatList
                    numColumns = {2}
                    
                    data = {data2}
                    keyExtractor = {item => item.id}
                    renderItem={({ item }) =>{
                        return(
                            <View style = {styles.item2}>
                            <Text style = {styles.text2}>{item.name}</Text>
                            <Text style = {styles.vigorItems2}>{item.sucesso} {item.atributo} {item.falha}</Text>
                            </View>
            
            
                        );
                    }}
                
                />

                <Text style = {{color: 'green', fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>Estresse</Text>

                {/* início view de estresse */}
                <View style = {styles.BoxSmall}>

                    <TouchableOpacity 
                        style = {styles. buttonContainerAdd}
                        
                        onPress = { adicionar }
                    >
                        <Text style = {styles.button}>  +  </Text>
                    </TouchableOpacity>
                    <Text style = {styles.span}>{estresse}/10</Text>
                    <TouchableOpacity
                    
                        style = {styles. buttonContainerMinus}
                        
                        activeOpacity = {0.3}
                        onPress = { retirar }
                    >
                        <Text style = {styles.button}>   -   </Text>
                    </TouchableOpacity> 
                    
                </View>

                <Text style = {{color: 'green', fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>Ferimento</Text>

                {/* fim view de estresse */}
                <View style = {styles.BoxSmall}>
                    <CheckBox
                        style = {{alignSelf: 'center',}}
                        value = {check}
                        onValueChange={() => check ? setCheck(false) : setCheck(true)}
                    />

                </View>


            </View>
            {/* fim bloco dos atributos */}


        </View>
        //   fim container
    
  )//fim do return
        
}       
      
  
    
    

