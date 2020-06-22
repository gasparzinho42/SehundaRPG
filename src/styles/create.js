import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: 'indigo'
        },
        setAtributos: {
            alignSelf: 'center',
            
            padding: 4,
            marginTop: 5,
            
            

            borderRadius: 9,

            height: 600, 
            width: '90%',
            
            backgroundColor: '#fff',
        },
        itemText:{

            color: 'green',
            fontWeight: 'bold',
            fontSize: 17,
            

        },
        item: {

            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 20 ,
        },
        itens: {

            alignSelf: 'center',
            marginTop: 5
        },
        // button: {
            
        //     alignItems: 'center',
        //     borderRadius: 5,
        //     height: 25,
        //     width: 30,
        //     marginBottom: 5 ,
        //     backgroundColor: 'green'

            


        // },
        buttonplus: {
            alignSelf: 'center',

            marginRight: 20,
            
           

            borderRadius: 5,

            height: 25,
            width: 35,

            

            backgroundColor: 'green',
           

        },
        buttonminus: {
            
            alignSelf: 'center',

            borderRadius: 5,
            

            marginLeft: 20,
           
            height: 25,
            width: 35,

          

            backgroundColor: 'green'

            
        },
        lista: {
            padding: 0,
            borderStyle: 'solid',
            borderWidth: 1, 
            borderRadius: 9 ,

            height: '90%',
            width: 200,

            alignSelf: 'center',
            position: 'absolute',
            
            marginTop: 50
            



        },
        viewButtons: {

            justifyContent: "space-between",
            flexDirection: "row-reverse",
            marginBottom:-8,
            marginTop:60,
            
        },
        viewpontos: {
            flexDirection: 'row-reverse',
            
            justifyContent: 'space-between' ,
            width: '100%'
        },
        interrogacao: {
            height:26,
            width:25,
            
            marginTop:10,
            marginRight: 70


        },
        textoAtributos: {
            marginLeft: 125,
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 32,
            marginBottom: 2
        },

})


export default styles;