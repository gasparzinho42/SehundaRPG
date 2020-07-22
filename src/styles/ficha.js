import { StyleSheet } from 'react-native';
import   ficha from '../components/ficha';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'indigo',
     
    },
    span: {
      color: "indigo",
      fontWeight: "bold",
      
      alignSelf: 'center',
      marginTop: -27

    },
    span2: {
      color: "black",   
      alignSelf: 'center',
      
    },
    

  
    BoxSmall : {
        
        alignSelf: 'center',
        
        padding: 10,
        
        width:'99%',
        marginTop: 5,
        
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 9,
        
  
    },
    button:{
        padding: 5.3,
        borderRadius: 5
      
    },
  
    item:{
      borderRadius: 9,
      backgroundColor: '#fff',
      marginVertical: '1%' ,
      marginHorizontal: '2.3%' ,
      width: 55
      
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
      color: "indigo",
      fontWeight: "bold",
      textAlign: "center"
    },
    item2:{
      
      borderRadius: 9,
      backgroundColor: "#fff",
      marginVertical: '2%' ,
      marginHorizontal: '5.3%' ,
      marginTop: 5,
      height: 90,
      // width: "41%",
      justifyContent: 'center'
      
  
      
    },
  
    text2:{
      color: "indigo",
      fontWeight: "bold",
      textAlign: "center"
      
  
  
    },
    vigorItems2:{
      color: "black",
      width: 140,
      textAlign: "center",
      justifyContent: "center"
      
    },
  
    text:{
      color: "indigo",
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

        backgroundColor: "lavender"

    },
  
    AtributosBloco : {
        flex: 1,
        marginTop:8,
        padding: 12,
    
        borderRadius: 9,
        
    
        // height: "100%",
        width: "95%",
    
        alignSelf: 'center',
        
        textAlign: "center",
        borderWidth: 5,
        
        
    
        backgroundColor: "lavender"
    },
  
    label: {
    
      color: "indigo",
  
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
      
      marginLeft: "65%",
      
      width: "50%",
      height: '100%',
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
      
    },
    title: {
      color: 'indigo',
      fontWeight: 'bold',
      fontSize: 20,
      alignSelf: 'center'
    }
  });
export default styles;