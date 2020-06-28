import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  
   
    addpersonagem: {
       
        
        color: 'green',
        fontWeight:'normal' ,
        textAlign: 'center',
        textAlignVertical: 'center',

        fontSize: 30
        
    },
    button: {
       
        alignSelf: 'center',
        height: 50,
        width: '98%',
        
       
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        
        
        
        

        borderRadius: 5
    },
  
    create: {
        backgroundColor: 'darkslateblue',
        
        flex: 1,
        width: '100%'

    },
    lista: {
        flexDirection: 'column',
        
        alignSelf: 'center' ,
    
        width: '100%'
        

    },
    listaText: {
        textAlign: 'center',
        textAlignVertical:'center',
        backgroundColor: '#fff',
        width: '99%',
        height: 50,
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: 10,        
        fontSize: 24,
        color: 'green',
        alignSelf: 'center'
    }



})


export default styles;