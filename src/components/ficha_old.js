import React, {useState, Component } from 'react';
import { View, StyleSheet,TextInput,Text,ViewComponent, FlatList, ImageBackground, Image, } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox'
import {Button} from 'react-native-elements'

export default class main extends Component {
    constructor (props){
        super(props);
        state = {
      
            estresse: 0,
            ferimento: [
              {label: '',value: '0'},
                
            
            ],
            data: [
              {id: "00", name: "vigor",valor_atual: "10", valor_total: "/10"},
              {id: "01", name: "Def",valor_base: "10"  },
              {id: "02", name: "P.P",valor_base: "10"  },
              {id:"03", name: "P.D",valor_base: "10"  },
              {id: "04", name: "Vont",valor_base: "10"  }
                
          
            ],
            data2: [
              {id: "01", name: "Robustez", sucesso: "6",atributo: "10", falha: "15"},
              {id: "02", name: "Agilidade", sucesso: "6",atributo: "10", falha: "15"},
              {id: "03", name: "Ardileza", sucesso: "6",atributo: "10", falha: "15"},
              {id: "04", name: "Vigilância", sucesso: "6",atributo: "10", falha: "15"},
              {id: "05", name: "Sabedoria", sucesso: "6",atributo: "10", falha: "15"},
              {id: "06", name: "Resolução", sucesso: "6",atributo: "10", falha: "15"}
          
            ]
          }

    }
    
      
      
      adicionar = () => {
        this.setState({ estresse: this.state.estresse + 1 })
      }
    
      
    render(){
        
        const [check,setCheck] = useState(false)
        const [text, setText] = useState("")
        return (
                <View style = {styles.container}>
                {/* bio do personagem */}
                <View className = "bio" style = {styles.bio}>
                    {/* campo do nome */}
                    <View className = "field" style = {styles.field}>
            
                    <Text style = {styles.label}>Nome: </Text>
                    <TextInput style = {styles.input_nome}  placeholder = "nome"/>
            
                    </View>
                    {/* campo da crença */}
                    <View className = "field" style = {styles.field}>
            
                    <Text style = {styles.label}>Crença: </Text>
                    <TextInput 
                    multiline = {true}
                    numberOfLines = {2}
                    style = {styles.input_Crença} 
                    placeholder = "Crença" 
                    onChangeText = {text => setText(text)}
                    defaultValue = {text}
                    />
                    
            
                    </View>
                    {/* campo do instinto */}
                    <View className = "field" style = {styles.field}>
            
                    <Text style = {styles.label}>Instinto: </Text>
                    <TextInput 
                    style = {styles.input_nome} 
                    placeholder = "instinto" 
                    
                    />
            
                    </View>
                    {/* imagem do personagem */}
                    <View className = "portrait" style = {styles.portrait}>
                        <Image
                        style = {styles.image}
                        source={require('./Assets/goblin.jpg')}
            
                        />
                    </View>
                    </View>
                <View className = "Atributos" style = {styles.AtributosBloco}>
                    {/* lista de atributos */}
                    
                    <FlatList
                    
                    numColumns = "5"
                    data = {this.state.data}
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
                    {/* segunda flatlist */}
                    <View style = {styles.flatlist2}>
                    <FlatList
                        numColumns = "2"
                        data = {this.state.data2}
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
            
                    </View>
                    <Text style = {styles.feridoText}>estresse</Text>
                    <View>
                        <Button
                        title="+"
                        type="solid"
                        buttonStyle = {styles.button}
                        onPress = { this.adicionar }
                        />
                        <Text style = {styles.span}>{this.state.estresse}/10</Text>
            
                    </View>
                    <Text style = {styles.feridoText} >Ferimento</Text>
                    <View style = {styles.CheckBox}>
                    <CheckBox
                        value = {check}
                        onValueChange={() => check ? setCheck(false) : setCheck(true)}
                    />
            
                    {/* <RadioForm
                    formHorizontal={true}
                    radio_props = {this.state.ferimento}
                    buttonColor={'#50C900'}
                    selectedButtonColor={'#50C900'}
                    initial = {-1}
                    onPress={(value) => {value ? inital = {-1} : false }
                    /> */}
                    </View>
                    
                        
            
                    
                    
                    </View>
                    
                </View>
              );
              
    

    }
    
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
     
    },
    span: {
      color: "green",
      fontWeight: "bold",
      textAlign: "center"
    },
  
    CheckBox: {
      
      justifyContent: 'center',
      alignItems:'center',
      alignSelf: 'center',
      
      height: 70 ,
      width:90,
      
      borderWidth: 2,
      borderStyle: 'dotted',
      borderRadius: 9,
      
  
    },
    button:{
      backgroundColor: "green",
      width: "10%",
      height: 40,
      marginBottom: 25,
      alignSelf: 'center'
      
    },
  
    item:{
      borderRadius: 9,
      backgroundColor: "#fff",
      marginVertical: 5 ,
      marginHorizontal: 5 ,
      width: 60
      
    },
    flatlist2:{
      alignSelf:'center',
      position:'absolute',
      marginVertical:90,
      width: '100%',
      marginLeft: 6,
      
  
    },
    feridoText: {
      fontSize: 24,
      color: "green",
      fontWeight: "bold",
      textAlign: "center"
    },
    item2:{
      borderRadius: 9,
      backgroundColor: "#fff",
      marginVertical: 7,
      marginHorizontal: 7 ,
      marginTop: 5,
      height: 60,
      width: 165,
      justifyContent: 'center'
      
  
      
    },
  
    text2:{
      color: "green",
      fontWeight: "bold",
      textAlign: "center"
      
  
  
    },
    vigorItems2:{
      color: "black",
      width: 150,
      textAlign: "center",
      justifyContent: "center"
      
    },
  
    text:{
      color: "green",
      fontWeight: "bold",
      textAlign: "center"
      
  
  
    },
    vigorItems:{
      color: "black",
      
      textAlign: "center",
      justifyContent: "center"
      
    },
  
   
  
    bio : {
      padding: 12,
      borderWidth: 5,
  
      borderRadius: 9,
      height: 220,
      width: "95%",
      marginLeft: 10,
      textAlign: "center",
      flexDirection: "column",
      
      
      
      
      backgroundColor: "#fff5"
    },
  
    AtributosBloco : {
      flex: 1,
      marginTop:8,
      padding: 12,
  
      borderRadius: 9,
      borderBottomLeftRadius: 0,
      borderBottomEndRadius: 0,
  
      height: 220,
      width: "95%",
  
      alignSelf: 'center',
      
      textAlign: "center",
      borderWidth: 5,
      borderBottomWidth: 0,
      
  
      backgroundColor: "#fff5"
    
    },
  
    label: {
    
      color: "green",
  
      fontWeight: "bold"
      
    },
    input_Crença: {
      
      maxHeight:80,
      maxWidth: 120,
      
    },
    input_nome: {
      maxWidth: 120,
      
    },
  
    portrait:{
      position: "absolute",
      zIndex: 1,
      marginLeft: "60%",
      
      width: "50%",
      height: "100%",
      backgroundColor: "white",
      borderRadius: 9,
  
      marginTop: 10
  
    },
    image:{
      height: 175,
      width: "100%",
      borderRadius: 9,
      
    },
  
  
    field: {
      marginTop:2,
      display: "flex",
      flexDirection: "row",
      borderColor: "black",
      alignItems: "center",
      textAlign: "center",
      borderWidth: 1,
      borderColor: "black",
      paddingLeft: 7,
      borderStyle: "dashed",
      borderRadius: 10,
      
    }
  
  });

//   export default sehunda;