import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableHighlight } from 'react-native';
import styles from '../styles/create'


// import { Container } from './styles';

const create = () => {
    const [ Arob, setArob ] = useState( 5 )
    const [ Aagi, setAagi ] = useState( 5 )
    const [ Aard, setAard ] = useState( 5 )
    const [ Avig, setAvig ] = useState( 5 )
    const [ Asab, setAsab ] = useState( 5 )
    const [ Ares, setAres ] = useState( 5 )

    const [ Va, setVa ] = useState( Arob + 10 )
    const [ imp, setImp ] = useState( 0 )
    const [ escudo, setEscudo ] = useState( 0 )
    

    const [ atributos, setAtributos ] = useState([
        {id: "01", name: "Robustez", sucesso:  Arob - 4   ,atributo:  Arob , falha: Arob + 5 },
        {id: "02", name: "Agilidade", sucesso:  Aagi - 4 ,atributo: Aagi  , falha: Aagi + 5 },
        {id: "03", name: "Ardileza", sucesso:  Aard - 4 ,atributo: Aard  , falha: Aard + 5 },
        {id: "04", name: "Vigilância", sucesso: Avig - 4 ,atributo: Avig  , falha: Avig + 5 },
        {id: "05", name: "Sabedoria", sucesso: Asab - 4 ,atributo: Asab , falha: Asab + 5 },
        {id: "06", name: "Resolução", sucesso:  Ares - 4 ,atributo: Ares  , falha: Ares + 5 }

    ])

    const [data, setData] = useState([
        

        {id: "00", name: "vigor",valor_atual: Va , valor_total: `/${Arob + 10}` },
        {id: "01", name: "Def",valor_base: Aagi - imp + escudo } ,
        {id: "02", name: "P.P",valor_base: Math.floor((Arob + Aagi)/2)  },
        {id:"03", name: "P.D",valor_base:   Math.floor((Avig + Aagi)/2) },
        {id: "04", name: "Vont",valor_base: Ares + 10  }

    ])

    const [ talento, setTalento ] = useState([
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "01", name: 'Endurecido', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "02", name: 'Perito em espadas', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "03", name: 'Perito em machado', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "04", name: 'Perito em martelos', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "05", name: 'Perito em lanças', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "06", name: 'Perito escudos', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "07", name: 'Atirador competente', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "08", name: 'Cozinheiro', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "09", name: 'Negociador', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "10", name: 'ContraMestre', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"},
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1)\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus"}

    ])
  return (
      <View style = {styles.container}>
          <View style = {styles.setAtributos}  >
              <Text style = {{alignSelf: 'center', color: 'green', fontWeight: 'bold', fontSize: 20, marginBottom: 2}} > Atributo </Text>
              <FlatList
                    style = {styles.lista}
                    numColumns = '1'
                    data = {atributos}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                    return (
                        // retorna os items do DATA
                        <View style={styles.item}>
                            <TouchableHighlight
                                style = {styles.button}
                                onPress = {() => {}}
                            >
                                 <Text style ={ styles.buttonMinus } > - </Text> 
                                 </TouchableHighlight>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style = {styles.itens}>{item.atributo}</Text>
                            <TouchableHighlight
                                style = {styles.button}
                                onPress = {() => {}}
                            >
                                 <Text style ={ styles.buttonAdd } > + </Text> 
                                 </TouchableHighlight>

                        </View>
                        
                    );
                    }} 
                />


          </View>


      </View>



  );
}

export default create;