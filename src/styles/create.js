import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#778899'
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

            marginRight: 10,
            
           

            borderRadius: 5,

            height: 25,
            width: 35,

            

            backgroundColor: 'green',
           

        },
        buttonminus: {
            
            alignSelf: 'center',

            borderRadius: 5,
            

            marginLeft: 10,
           
            height: 26,
            width: 35,

          

            backgroundColor: 'green'

            
        },
        lista: {
            // padding: 30,
            borderStyle: 'dashed',
            borderWidth: 1, 
            borderRadius: 9 ,

            height: '90%',
            width: 230,

            alignSelf: 'center',
            position: 'absolute',
            
            marginTop: 50
            



        },
        viewButtons: {

            justifyContent: "space-between",
            flexDirection: "row-reverse",
            marginBottom:39,
            marginTop:20,
            
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
            alignSelf: 'center',
            color: 'green',
            fontWeight: 'bold',
            fontSize: 30,
            marginBottom: 2
        },

})


export default styles;