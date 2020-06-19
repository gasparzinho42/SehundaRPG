import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert,  } from 'react-native';
import styles from '../styles/create'
import {Button, } from 'react-native-elements'



// import { Container } from './styles';

export default function create() {
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
        {id: 0, name: "Robustez", sucesso:  Arob - 4   ,atributo:  Arob , falha: Arob + 5 },
        {id: 1, name: "Agilidade", sucesso:  Aagi - 4 ,atributo: Aagi  , falha: Aagi + 5 },
        {id: 2, name: "Ardileza", sucesso:  Aard - 4 ,atributo: Aard  , falha: Aard + 5 },
        {id: 3, name: "Vigilância", sucesso: Avig - 4 ,atributo: Avig  , falha: Avig + 5 },
        {id: 4, name: "Sabedoria", sucesso: Asab - 4 ,atributo: Asab , falha: Asab + 5 },
        {id: 5, name: "Resolução", sucesso:  Ares - 4 ,atributo: Ares  , falha: Ares + 5 }

    ])

    const [data, setData] = useState([
        

        {id: 0, name: "vigor",valor_atual: Va , valor_total: `/${Arob + 10}` },
        {id: 1, name: "Def",valor_base: Aagi - imp + escudo } ,
        {id: 2, name: "P.P",valor_base: Math.floor((Arob + Aagi)/2)  },
        {id: 3, name: "P.D",valor_base:   Math.floor((Avig + Aagi)/2) },
        {id: 4, name: "Vont",valor_base: Ares + 10  }

    ])

    

    const [ talento, setTalento ] = useState([
        {id: "00", name: 'Batedor', Descricao: "Novato\n"
            + "Cria oportunidades mais facilmente (-1).\n"
            + "Veterano\n"
            + "Pode diminuir a dificuldade do teste\n"
            + "em 1, uma vez por sessão.\n"
            + "Mestre\n"
            + "Para explorar recebe d4 de bônus."},
        {id: "01", name: 'Endurecido', Descricao: "Novato\n"
            + "Recebe +5 na escala de Vontade.\n"
            + "Veterano\n"
            + "Recebe -1 de bônus testes de Vontade.\n"
            + "Mestre\n"
            + "Pode passar automaticamente num teste\n"
            + "de Vontade uma vez por sessão."},
        {id: "02", name: 'Perito em espadas', Descricao: "Novato\n"
            + "A espada empunhada adquire a qualidade\n"
            + "Aparadora.\n"
            + "Veterano\n"
            + "O alvo rece 1 d4 de penalidade no teste\n"
            + "de ferimento.\n"
            + "Mestre\n"
            + "O dado de dano com espadas é uma categoria maior."},
        {id: "03", name: 'Perito em machado', Descricao: "Novato\n"
            + "Realiza um ataque extra com a ponta do\n"
            + "machado +d4 de dano, que se soma ao dano\n"
            + "total."
            + "Veterano\n"
            + "Trespassa o inimigo, acertando outro com\n"
            + "o mesmo golpe.\n"
            + "Mestre\n"
            + "O dado de dano com machados é uma categoria\n"
            + "maior." },
        {id: "04", name: 'Perito em martelos', Descricao: "Novato\n"
            + "Derruba ou empurra o alvo num acerto.\n"
            + "Veterano\n"
            + "Ainda causa o fardo da arma de dano\n"
            + "caso a armadura do alvo absorva todo\n"
            + "dano de ataque.\n"
            + "Mestre\n"
            + "O dado de dano com martelos é uma categoria\n"
            + "maior."},
        {id: "05", name: 'Perito em lanças', Descricao: "Novato\n"
            + "Tem ataque bônus contra quem se aproxima\n"
            + "e não esteja usando uma arma longa."
            + "Veterano\n"
            + "Se o ataque contra quem se aproxima acertar\n"
            + "o personagem mantem distância do agressor.\n"
            + "Mestre\n"
            + "O dado de dano com lanças é uma categoria\n"
            + "maior."},
        {id: "06", name: 'Perito em escudos', Descricao: "Novato\n"
            + "Realiza um ataque extra com escudo, causando\n"
            + "+d de dano total."
            + "Veterano\n"
            + "O escuto fornece +1 de Cobertura\n"
            + "Mestre\n"
            + "Uma vez por dia pode passar em um teste de\n"
            + "durabilidade do escudo."},
        {id: "07", name: 'Atirador competente', Descricao: "Novato\n"
            + "Consegue ignorar penalidades de distância em\n"
            + "1 categoria."
            + "Veterano\n"
            + "Consegue ignorar penalidades de distância em\n"
            + "2 categorias.\n"
            + "Mestre\n"
            + "O dado de dano com arma à maior distância é\n"
            + "uma categoria maior."},
        {id: "08", name: 'Cozinheiro', Descricao: "Novato\n"
            + "Pode transformar 1d4 dados de recursos com\n"
            + "comida conseguida durante viagens."
            + "Veterano\n"
            + "Pode transformar 2d4 dados de recursos com\n"
            + "comida conseguida durante viagens.\n"
            + "Mestre\n"
            + "Sua comida é muito boa e conforta a quem prova,\n"
            + "quem come dela recebe +1d4 extra de recuperação\n"
            + "de vigor durante o descanso."},
        {id: "09", name: 'Negociador', Descricao: "Novato\n"
            + "Se conseguir uma oportunidade durante uma\n"
            + "negociação o preço do produto é reduzido em\n"
            + "1d4."
            + "Veterano\n"
            + "Se conseguir uma oportunidade durante uma\n"
            + "negociação o preço do produto é reduzido em\n"
            + "1d6."
            + "Mestre\n"
            + "Se conseguir uma oportunidade durante uma\n"
            + "negociação o preço do produto é reduzido em\n"
            + "2d4."},
        {id: "10", name: 'ContraMestre', Descricao: "Novato\n"
            + "Ao montar acampamente, a quantidade de vigor\n"
            + "recuperado tem +1d4 somado ao montante já\n"
            + "recuperado."
            + "Veterano\n"
            + "Pode auxiliar o grupo e permitir um sucesso\n"
            + "automático de dado de recurso 1d4 vezes por\n"
            + "viagem (d4 rolado no início da viagem)."
            + "Mestre\n"
            + "Se o contramestre for bem sucedido em um\n"
            + "teste de recurso, seus aliados falham no\n"
            + "teste somente se o resultado for 1."},
        {id: "11", name: 'Curandeiro', Descricao: "Novato\n"
            + "Recebe 1d4 de bônus ao tratar ferimentos.\n"
            + "Veterano\n"
            + "Um ferimento tratado não impõe penalidade.\n"
            + "Mestre\n"
            + "Cura o ferimento caso obtenha uma oportunidade\n"
            + "no teste de tratamento."},
        {id: "12", name: 'Reflexos Rápidos', Descricao: "Novato\n"
            + "D4 de bônus em iniciativa.\n"
            + "Veterano\n"
            + "D4 de bônus numa ação relacionada à Agilidade\n"
            + "e Vigilância uma vez ao dia.\n"
            + "Mestre\n"
            + "+1 para defesa."},
        {id: "13", name: 'Mestre Caçador', Descricao: "Novato\n"
            + "Os dados de recursos se tornam d6.\n"
            + "Veterano\n"
            + "Os dados de recursos se tornam d8\n"
            + "Mestre\n"
            + "Testa Resolução ao fim do dia se caçou, aliviando\n"
            + "1d4 pontos de estresse."},
        {id: "14", name: 'Burro de Carga', Descricao: "Novato\n"
            + "+1/+4 de limite min/max de carga.\n"
            + "Veterano\n"
            + "+3/+6 de limite min/max de carga.\n"
            + "Mestre\n"
            + "+5/+8 de limite min/max de carga."},
        {id: "15", name: 'Resistente à dor', Descricao: "Novato\n"
            + "Penalidades de ferimentos é uma categoria\n"
            + "menor: d6 = d4; d4 = 0."
            + "Veterano\n"
            + "1d4 de bônus para resistir a Ferimentos.\n"
            + "Mestre\n"
            + "Por passar automaticamente num teste de\n"
            + "Ferimentos uma vez por sessão."},
        {id: "16", name: 'Armeiro', Descricao: "Novato\n"
            + "Pode usar ferramentas para conceder 1d4\n"
            + "vezes por sessão uma rolagem extra de\n"
            + "durabilidade ao item manutenido."
            + "Veterano\n"
            + "O custo de reparos do item pela qualidade\n"
            + "é reduzido em 2 pontos.\n"
            + "Mestre\n"
            + "Pode aumentar a quantidade de reparos de\n"
            + "um equipamento em +2 quando reparado por ele."},
        {id: "17", name: 'Mateiro', Descricao: "Novato\n"
            + "Montar acampamento com sucesso oferece +2\n"
            + "de Vigor ou 2 se falhar."
            + "Veterano\n"
            + "Aumenta o dado de recursos ao forragear\n"
            + "em 1 categoria.\n"
            + "Mestre\n"
            + "Forrageou aliviando 1d4 ponto de estresse."},
        {id: "18", name: 'Andarilho', Descricao: "Novato\n"
            + "Se for bem sucedido no teste de marcha\n"
            + "concede 1d4 de bônus a ser distribuídos\n"
            + "entre os aliados."
            + "Veterano\n"
            + "A perda de vigor por falha em teste de \n"
            + "marcha é reduzida pela metade.\n"
            + "Mestre\n"
            + "Testa Resolução ao fim do dia se Marchou\n"
            + " aliviando 1d4 ponto de estresse."}

    ])
    //funcoes dos botoes
    //botoes Arob
        const arobplus = () => {
            setArob( Arob + 1 )
            return atributos[0].atributo = Arob + 1
            
            
        }
        const arobMinus = () => {
            setArob( Arob - 1 )
            return atributos[0].atributo = Arob - 1
        }
    //botoes Aagi
        const aagiplus = () => {
            setAagi( Aagi + 1 )
            atributos[1].atributo = Aagi + 1
            
        }
        const aagiMinus = () => {
            setAagi( Aagi - 1 )

            return atributos[1].atributo = Aagi - 1
        }
    //botoes Aard
        const aardplus = () => {
            setAard( Aard + 1 )
            return atributos[2].atributo = Aard + 1
            
        }
        const aardMinus = () => {
            setAard( Aard - 1 )

            return atributos[2].atributo = Aard - 1
        }
    //botoes Avig
        const avigplus = () => {
            setAvig( Avig + 1 )
            return atributos[3].atributo = Avig + 1
            
        }
        const avigMinus = () => {
            setAvig( Avig - 1 )

            return atributos[3].atributo = Avig - 1
        }
    //botoes Asab
        const asabplus = () => {
            setAsab( Asab + 1 )
            return atributos[4].atributo = Asab + 1
            
        }
        const asabMinus = () => {
            setAsab( Asab - 1 )

            return atributos[4].atributo = Asab - 1
        }
    //botoes Ares
        const aresplus = () => {
            setAres( Ares + 1 )
            return atributos[5].atributo = Ares + 1
            
        }
        const aresMinus = () => {
            setAres( Ares - 1 )

            return atributos[5].atributo = Ares
        }
    //fim dos botoes

    
  return (
      <View style = {styles.container}>
          < View style = {styles.setAtributos}  >
                
                <Text style = {{alignSelf: 'center', color: 'green', fontWeight: 'bold', fontSize: 30, marginBottom: 2}} > Atributos </Text>
                <View style = { styles.viewButtons }>
                    {/* botoes Arob */}
                        <Button
                            delayPressIn = {0}
                            title = ' + '
                            buttonStyle = {styles.buttonplus}
                            onPress = { arobplus } 
                            
                            
                        />
                        <Button
                            delayPressIn = {0}
                            title = ' - '
                            buttonStyle = {styles.buttonminus}
                            onPress = { arobMinus } 
                            
                            
                        />
                    {/* fim botoes Arob */}


                </View>
                
                <View style = { styles.viewButtons }>
                    {/* botoes Aagi */}
                        <Button
                            title = ' + '
                            buttonStyle = {styles.buttonplus}
                            onPress = { aagiplus } 
                            
                            
                        />
                        <Button
                            title = ' - '
                            buttonStyle = {styles.buttonminus}
                            onPress = { aagiMinus } 
                            
                            
                        />
                    {/* botoes Aagi */}


                </View>

                
                <View style = { styles.viewButtons }>
                    {/* botoes Aard */}
                        <Button
                            title = ' + '
                            buttonStyle = {styles.buttonplus}
                            onPress = { aardplus } 
                            
                            
                        />
                        <Button
                            title = ' - '
                            buttonStyle = {styles.buttonminus}
                            onPress = { aardMinus } 
                    
                     
                        />
                    {/* botoes Aard */}


                </View>
                
                
                <View style = { styles.viewButtons }>
                    {/* botoes Avig */}
                        <Button
                            title = ' + '
                            buttonStyle = {styles.buttonplus}
                            onPress = { avigplus } 
                            
                            
                        />
                        <Button
                            title = ' - '
                            buttonStyle = {styles.buttonminus}
                            onPress = { avigMinus } 
                            
                            
                        />
                    {/* botoes Avig */}


                </View>
                
                <View style = { styles.viewButtons }>

                        {/* botoes Asab */}
                                <Button
                                    title = ' + '
                                    buttonStyle = {styles.buttonplus}
                                    onPress = { asabplus } 
                                            
                                            
                                />
                                <Button
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { asabMinus } 
                                            
                                            
                                    />
                        {/* botoes Asab */}


                </View>

                <View style = { styles.viewButtons }>
                        {/* botoes Ares */}
                            <Button
                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { aresplus } 
                                
                                
                            />
                            <Button
                                
                                title = ' - '
                                buttonStyle = {styles.buttonminus}
                                onPress = { aresMinus } 
                                
                                
                            />
                    {/* botoes Ares */}

                </View>
                



                        
                
                <FlatList
                        keyboardShouldPersistTaps = "always"
                        style = {styles.lista}
                        numColumns = '1'
                        data = {atributos}
                        
                        refreshing = { true }
                        keyExtractor={item => item.id}
                        
                        renderItem={({ item }) => {
                        return (
                            // retorna os items do DATA
                            <View style={styles.item}>
                                
                                <Text style={styles.itemText}>{item.name}</Text>
                        <Text style = {styles.itens}>{ item.atributo } </Text>
                                
                                    

                            </View>
                            
                        );
                        }} 
                        />
                            
                    
                


          </View>


      </View>



  );
}

