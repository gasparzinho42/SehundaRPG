import 'react-native-gesture-handler'
import React, { useState,Component } from 'react';
import { View, TextInput, Text, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from '../styles/ficha';




   
    
export default function ficha() {


    const [ estresse, setEstresse ] = useState(0);
    const [ Arob, setArob ] = useState( 10 )
    const [ Aagi, setAagi ] = useState( 12 )
    const [ Aard, setAard ] = useState( 8 )
    const [ Avig, setAvig ] = useState( 5 )
    const [ Asab, setAsab ] = useState( 14 )
    const [ Ares, setAres ] = useState( 11 )

    const [ Va, setVa ] = useState( Arob + 10 )
    const [ imp, setImp ] = useState( 0 )
    const [ escudo, setEscudo ] = useState( 0 )
   
    const [ atributos, setAtributos ] = useState([
        {id: "00", name: "Robustez", sucesso:  Arob - 4   ,atributo:  Arob , falha: Arob + 5 },
        {id: "01", name: "Agilidade", sucesso:  Aagi - 4 ,atributo: Aagi  , falha: Aagi + 5 },
        {id: "02", name: "Ardileza", sucesso:  Aard - 4 ,atributo: Aard  , falha: Aard + 5 },
        {id: "03", name: "Vigilância", sucesso: Avig - 4 ,atributo: Avig  , falha: Avig + 5 },
        {id: "04", name: "Sabedoria", sucesso: Asab - 4 ,atributo: Asab , falha: Asab + 5 },
        {id: "05", name: "Resolução", sucesso:  Ares - 4 ,atributo: Ares  , falha: Ares + 5 }

    ])

    const [data, setData] = useState([
        

        {id: 0, name: "vigor",valor_atual: Va , valor_total: `/${Arob + 10}` },
        {id: 1, name: "Def",valor_base: Aagi - imp + escudo } ,
        {id: 2, name: "P.P",valor_base: Math.floor((Arob + Aagi)/2)  },
        {id: 3, name: "P.D",valor_base:   Math.floor((Avig + Aagi)/2) },
        {id: 4, name: "Vont",valor_base: Ares + 10  }

    ])  
    const [check,setCheck] = useState(false)
    const [text, setText] = useState("")
    const [desativarMinus,setDesativarMinus] = useState(false)
    const [desativarPlus,setDesativarPlus] = useState(false)
    const [corMinus,setCorMinus] = useState('green')
    const [corPlus,setCorPlus] = useState('green')
    var limite = Ares + 20
    const adicionar = () => {
        if(estresse < limite){
            setEstresse( estresse + 1 )
            setDesativarPlus( false )
            setDesativarMinus( false )
            var cor = 'green'
            setCorPlus( cor )
            setCorMinus( 'green' )
          
        }
        else{
            setDesativarPlus( true )
            var cor = 'white'
            setCorPlus( cor )
            
        }
    }
    const [recursos, setRecursos] = useState([
        {id: '01', nome: "comida:", fardo: 0},
        {id: '02',nome: "água:", fardo: 0},
        {id: '03', nome: "Munição:", fardo: 0},
        {id: '04', nome: "Tocha:", fardo: 0}
    ])
    const [penalidade_val, setPenalidade_val] = useState( "0" )
    const retirar = () => {
        if (estresse > 0){
            setEstresse( estresse - 1 )
            setDesativarMinus( false )
            setDesativarPlus( false )
            var cor = 'green'
            setCorMinus( cor )
            setCorPlus( 'green' )
          
        }
        else{
            setDesativarMinus( true )
            var cor = 'white'
            setCorMinus( cor )
            
        }
    }
  

    const penalidade = () => {
        if (estresse >= Math.ceil(limite * 0.75)) {
       
            setPenalidade_val( "-3" )
            return penalidade_val
        }
        else if (estresse >= Math.floor(limite * 0.50) && estresse < Math.floor(limite * 0.75)) {
            setPenalidade_val( "-2" )
            return penalidade_val
        }
        else if (estresse >=  Math.floor(limite * 0.25) && estresse < Math.floor(limite * 0.50)) {
            setPenalidade_val( "-1" )
            return penalidade_val
        }
        else{
            setPenalidade_val( "0" )
            return penalidade_val 
        }
    }
    
    return (
        //   início do container
        <ScrollView style = {styles.container}>
            {/* começo da bio */}
            <View className = "bio" style = {styles.bio}>
                {/* campo nome */}
                <View className = "field" style = {styles.field}>
        
                    <Text style = {styles.label}>Nome: </Text>
                    <TextInput style = {styles.input_nome}  defaultValue = "Bors" placeholder= 'nome' />
            
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
                    source={require('../Assets/armor.png')}
        
                    />
                </View>
                {/* fim imagem do personagem */}

            </View>
            {/* fim da bio */}

            {/* início bloco dos atributos */}
            <View style = {styles.AtributosBloco}>
                {/* primeira lista de atributos */}
                <View>
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
                </View>
                
                {/* fim primeira lista de atributos */}

                {/* segunda lista de atributos */}
                <View>
                    <FlatList
                        numColumns = {2}
                        
                        data = {atributos}
                        keyExtractor = {item => item.id}
                        renderItem={({ item }) =>{
                            return(
                                <View style = {styles.item2}>
                                <Text style = {styles.text}>{item.name}</Text>
                                <Text style = {{alignSelf: 'center'}}> {item.atributo} </Text>
                                <Text style = {styles.text2}>suc.          Fail.</Text>
                        
                                <Text style = {styles.vigorItems2}> {item.sucesso}               {item.falha}</Text>
                                {/* os espaços aqui são gambiarras mas que funcionaram muito bem */}
                                </View>
                
                
                            );
                        }}
                    
                    />
                </View>

                <Text style = {styles.title}>Estresse</Text>

                {/* início view de estresse */}
                <View style = {styles.BoxSmall}>
                    
                    <TouchableOpacity 
                        style = {{ 
                            alignSelf: 'center',
                            backgroundColor: corMinus,
                            marginLeft: -100,
                            borderRadius: 5,
                            color: 'white' }}
                        disabled = { desativarMinus }
                        onPress = { () => {
                            retirar()
                            penalidade() 
                        } }
                    
                    >
                        <Text style = {styles.button}>  -  </Text>
                    </TouchableOpacity>
                        <Text style = {styles.span}>{estresse}/{limite}</Text>
                    <TouchableOpacity
                    
                        style = {{ 
                            alignSelf: 'center',
                            marginLeft: 100,
                            marginTop: -24,
                            backgroundColor: corPlus,
                            color: 'white',
                            borderRadius: 5,  }}
                        disabled = { desativarPlus }
                        
                        activeOpacity = {0.3}
                        onPress = { () => {
                            adicionar()
                            penalidade()
                        } }
                    >
                        <Text style = {styles.button}>  +  </Text>
                    </TouchableOpacity> 
                    <View>
                        <Text style = {styles.text}> Penalidade </Text>
                    <Text style = {styles.span2}> { penalidade_val } </Text>
                    {/* <Text style = {styles.span2}> -1= { Math.floor(limite * 0.25)} </Text>
                    <Text style = {styles.span2}> -2= { Math.floor(limite * 0.50)} </Text>
                    <Text style = {styles.span2}> -3= { Math.floor(limite * 0.75)} </Text> */}
                    </View>
                   
                    
                </View>
                {/* fim view de estresse */}
                
                {/* começo view de ferimento */}
                <Text style = {styles.title}>Ferimento</Text>

                
                <View style = {styles.BoxSmall}>
                    <CheckBox
                        style = {{alignSelf: 'center',}}
                        value = {check}
                        onValueChange={() => check ? setCheck(false) : setCheck(true)}
                    />

                </View>
                {/* fim da view de ferimento */}
                <Text style = {styles.title}> Recursos </Text>
                {/* inicio view de recursos */}
                <View style = {styles.BoxSmall}>
                    {/* essa flatlist renderiza tudo oq tem nos recuros, bem simpleszinho */}
                    
                    <FlatList
                    numColumns = {1}
                    keyExtractor = {item => item.id}
                    data = {recursos}
                    renderItem = {({ item }) => {
                        return(
                            <View style = {styles.BoxSmall}>
                                <Text style = {styles.label}> {item.nome}</Text>
                                <TextInput>  </TextInput>
                                <Text style = {styles.label}> fardo: </Text>
                                <TextInput> </TextInput>
                            </View>
                        )
                       
                        
                    }}
                    
                    />
                </View>
                {/* fim da view de recursos */}
            
            </View>
            {/* fim bloco dos atributos */}

        </ScrollView>
        //   fim container
    
  )//fim do return
        
}       
      
  
    
    

