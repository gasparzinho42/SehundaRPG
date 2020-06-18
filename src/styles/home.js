import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899',

    },
    modal: {
        flex:1,
        backgroundColor: 'black'

       
    },
    addpersonagem: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#90EE90',
        fontWeight:'normal' ,
        
        flex: 1,
        fontSize: 300
        
    },
    button: {
        alignItems: 'center',
        alignSelf: 'center' ,
        
        flex: 1,
        padding: 5.3,
        
        
        

        borderRadius: 5
    },
    textAddPersonagem: {
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 20,
        color: 'lightgreen',
        fontWeight: 'bold',
        marginTop: -100,
        marginBottom: 200

    },



})


export default styles;