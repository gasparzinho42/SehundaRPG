import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#778899'
        },
        setAtributos: {
            height: 600,

            padding: 10,
            marginTop: 5,
            alignSelf: 'center',
            backgroundColor: '#fff',
            
            width: '90%',
            borderRadius: 9
        },
        itemText:{

            color: 'green',
            fontWeight: 'bold',
            fontSize: 17,
            

        },
        item: {

            alignSelf: 'center',
            marginBottom: 40
        },
        itens: {

            alignSelf: 'center'
        },
        button: {
            alignItems: 'center',
            
            borderRadius: 9


        },
        buttonAdd: {
            textAlign: "center",
            textAlignVertical: 'center' ,

            width: 30,
            height: 20,

            marginRight: -130,
            marginVertical: -40,

            backgroundColor: 'green'
        },
        buttonMinus: {
            textAlign: "center",
            textAlignVertical: 'center' ,

            width: 30,
            height: 20,
            marginLeft: -130,
            marginBottom:-23,

            // marginLeft: -130,
            // marginVertical: -40,

            backgroundColor: 'green'
        },
        lista: {
            padding: 30,
            borderWidth: 1,
            borderStyle: 'dotted'



        }
})


export default styles;