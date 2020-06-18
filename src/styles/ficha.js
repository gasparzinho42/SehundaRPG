import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
     
    },
    span: {
      color: "green",
      fontWeight: "bold",
      
      alignSelf: 'center',
      marginTop: -25

    },

  
    BoxSmall : {
        
        alignSelf: 'center',
        
        padding: 10,
        height: 60,
        width:360,
        marginTop: 5,
        
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 9,
        
  
    },
    button:{
        padding: 5.3,
        
        backgroundColor: "green",
        color: 'white',

        borderRadius: 5
      
    },
    buttonContainerAdd : {

        alignSelf: 'center',
        marginLeft: -100
        // marginHorizontal: 100,
        // marginTop: 10
        
        


    },
    buttonContainerMinus : {
        alignSelf: 'center',
        marginLeft: 100,
        marginTop: -27,
        
        // marginRight: -80
        // marginEnd: 70,
        // marginVertical: -45


    },
    // button: {
    //     alignSelf: 'center' ,
    //     alignItems: "center",
    //     backgroundColor: "#fff",
    //     padding: 10

    // },
  
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
        marginTop: 10,
        padding: 12,
        borderWidth: 5,
    
        borderRadius: 9,
        height: 230,
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
        
    
        height: 220,
        width: "95%",
    
        alignSelf: 'center',
        
        textAlign: "center",
        borderWidth: 5,
        
        
    
        backgroundColor: "#fff5"
        
    },
  
    label: {
    
      color: "green",
  
      fontWeight: "bold"
      
    },
    input_2linhas: {
      
      maxHeight:80,
      maxWidth: 120,
      
    },
    input_nome: {
      maxWidth: 120,
      
    },
  
    portrait:{
      position: "absolute",
      
      marginLeft: "60%",
      
      width: "50%",
      height: 210,
      backgroundColor: "white",
      borderRadius: 9,
  
      marginTop: 5
  
    },
    image:{
      height: '100%',
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
export default styles;