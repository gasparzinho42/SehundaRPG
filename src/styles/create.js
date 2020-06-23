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
            height:27.5,
            width:27.5,
            
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
        modalinterrogacao: {
            alignSelf: 'center' ,
            marginVertical: '50%',
            textAlign: 'center',

            height: '50%',
            width: '65%',

            padding: 9,

            backgroundColor: 'indigo',
            borderRadius: 5,
        },
        textInterrogacao: {
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
            
        },
        listaInt: {
            padding: 0,
        
            height: '90%',
            width: 200,

            alignSelf: 'center',
             
            marginTop: 30

        },
        Xmodal: {
            color: 'gold',
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'flex-end',
            marginBottom: 30

        },
        escolha: {
            alignSelf:'center',
            textAlign: 'center',
            textAlignVertical: 'center',

            color:'indigo',

            height: '25%' ,
            width: '90%' ,

            marginTop:10,
            borderWidth: 1,
            borderColor: 'indigo',
            borderRadius: 9 ,
            
        },
         modalTalentos: {
            alignSelf: 'center' ,
            marginVertical: '15%',
            textAlign: 'center',

            height: '90%',
            width: '80%',

            padding: 5,

            backgroundColor: 'indigo',
            borderRadius: 5,
        },
        textTalentos: {
            marginTop: 20,
            
            textAlign: 'center',
            textAlignVertical:'center',
            width: '99%' , 
            height: 35,
            fontSize: 15,
            color: 'gold',
            borderWidth: 1,
            borderRadius: 9
        },
        escolherText: {
            color: 'gold',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            alignSelf: 'center'

        },
    
        modalDesc: {
            alignSelf: 'center' ,
            marginVertical: '30%',
            textAlign: 'center',

            height: '70%',
            width: '65%',

            padding: 9,

            backgroundColor: 'darkslateblue',
            borderRadius: 5,
        },
        textDesc: {
            textAlign: 'center',
            marginBottom:2,
            fontSize: 15,
            color: 'gold',

        },
        textDescTitle: {
            textAlign: 'center',
            marginBottom:2,
            marginTop: -10,
            fontSize: 22,
            color: 'gold',

        },
         settalentos: {
            alignSelf: 'center',
            
            padding: 4,
            marginTop: 5,
            marginBottom: 50,
            
            

            borderRadius: 9,

            height: 150, 
            width: '90%',
            
            backgroundColor: '#fff',
        },
        textViewTalentos: {
            color: 'green',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
            

        },

})


export default styles;