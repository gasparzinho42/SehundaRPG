import React, { useState, useEffect,  } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert, Image, ScrollView, Modal,   } from 'react-native';
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

    const [escolha, setEscolha] = useState( " escolha seu talento " )
    
    

    const [ atributos, setAtributos ] = useState([
        {id: "00", name: "Robustez", sucesso:  Arob - 4   ,atributo:  Arob , falha: Arob + 5 },
        {id: "01", name: "Agilidade", sucesso:  Aagi - 4 ,atributo: Aagi  , falha: Aagi + 5 },
        {id: "02", name: "Ardileza", sucesso:  Aard - 4 ,atributo: Aard  , falha: Aard + 5 },
        {id: "03", name: "Vigilância", sucesso: Avig - 4 ,atributo: Avig  , falha: Avig + 5 },
        {id: "04", name: "Sabedoria", sucesso: Asab - 4 ,atributo: Asab , falha: Asab + 5 },
        {id: "05", name: "Resolução", sucesso:  Ares - 4 ,atributo: Ares  , falha: Ares + 5 }

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
        function arobplus () {
            setArob( Arob + 1 )
            atributos[0].atributo = Arob + 1
             // setPontos( pontos + 1 )
             var calculo = pontos + 1
             return  setPontos( calculo )
            
            
        }
        function arobMinus () {
            setArob( Arob - 1 )
            atributos[0].atributo = Arob - 1
            // setPontos( pontos + 1 )
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //botoes Aagi
        function aagiplus () {
            setAagi( Aagi + 1 )
            atributos[1].atributo = Aagi + 1
             // setPontos( pontos + 1 )
             var calculo = pontos + 1
             return  setPontos( calculo )
            
        }
        function aagiMinus () {
            setAagi( Aagi - 1 )

            atributos[1].atributo = Aagi - 1
            // setPontos( pontos + 1 )
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //botoes Aard
        function aardplus () {
            setAard( Aard + 1 )
            atributos[2].atributo = Aard + 1
             // setPontos( pontos + 1 )
             var calculo = pontos + 1
             return  setPontos( calculo )
            
        }
        function aardMinus () {
            setAard( Aard - 1 )

            atributos[2].atributo = Aard - 1
            // setPontos( pontos + 1 )
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //botoes Avig
        function avigplus () {
            setAvig( Avig + 1 )
            atributos[3].atributo = Avig + 1
            // setPontos( pontos + 1 )
            var calculo = pontos + 1
            return  setPontos( calculo )
            
        }
        function avigMinus () {
            setAvig( Avig - 1 )

            atributos[3].atributo = Avig - 1
            // setPontos( pontos + 1 )
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //botoes Asab
        function asabplus () {
            setAsab( Asab + 1 )
            atributos[4].atributo = Asab + 1
             // setPontos( pontos + 1 )
            var calculo = pontos + 1
            return  setPontos( calculo )
            
        }
        function asabMinus () {
            setAsab( Asab - 1 )
            atributos[4].atributo = Asab - 1
            
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //botoes Ares
         function aresplus () {
            setAres( Ares + 1 )
            atributos[5].atributo = Ares + 1
            // setPontos( pontos + 1 )
            var calculo = pontos + 1
            return  setPontos( calculo )
            
        }
        function aresMinus () {
            setAres( Ares - 1 )
            atributos[5].atributo = Ares - 1
            var calculo = pontos - 1
            return  setPontos( calculo )
        }
    //fim dos botoes
    const [desativar, setDesativar] = useState([
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},

    ])
    const [desativarMinus, setDesativarMinus] = useState([
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},
        {desativar: false},

    ])
    const [pontos, setPontos] = useState( 30 )
    const [ cor, setCor ] = useState( "red" )
    const [isvisible1, setIsvisible1] = useState(false)
    const [isvisible2, setIsvisible2] = useState(false)
    const info1 = [
        { Key: '00', vm: 15, vmn: 5 },
        

    ]

    
  return (

    
      <ScrollView style = {styles.container}>
          <Modal visible = { isvisible1 }  animationType = 'slide' transparent = {true} >

              <View style = {styles.modalinterrogacao} >
                  <Text style = {styles.Xmodal}
                   onPress = {() => { setIsvisible1( false ) }}
                   > x </Text>

                <Text style = {styles.textInterrogacao} > A soma de todos os atributos deve ser no máximo 60 pontos! </Text>
                <FlatList
                    style = {styles.listaInt}
                    numColumns = '1'
                    data = {[info1]}
                    keyExtractor = {item => item.Key}
                    renderItem = { ({item}) => 
                        <View > 
                            <Text style = { styles.textInterrogacao }>. Valor Maximo do atributo: { item[0].vm } </Text>
                            <Text style = { styles.textInterrogacao } >. Valor mínimo do atributo: { item[0].vmn } </Text>

                        </View>
                        
                    }
                />

              </View>
              
          </Modal>
          {/* atributos e interrogação */}
          <View style = {styles.viewpontos} >
              <TouchableOpacity
                style = {{ width: '6%', marginRight: 40,marginTop: -7, justifyContent: 'center'}}
                onPress = { () => { setIsvisible1( true ) } }
              >
                  <Image
                    style = {styles.interrogacao}
                    source={require('../Assets/questao.png')}
                    
                    />

              </TouchableOpacity>
          
              <Text style = {styles.textoAtributos} > Atributos </Text>


            </View>
            {/* fim atributos e interrogação */}
          
          
            < View style = {styles.setAtributos}  >
                    
                    
                    <Text style = {{ marginLeft: 107,color: 'green', fontWeight: 'bold', fontSize: 25,}} > Pontos: { pontos } </Text>
                    
                    <View style = { styles.viewButtons }>
                        {/* botoes Arob */}
                            <Button
                                
                                disabled = { desativar[0].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 0 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[0].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[0].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[0].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return arobplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[0].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[0].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[0].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[0].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[0].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return arobMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                        {/* fim botoes Arob */}


                    </View>
                    
                    <View style = { styles.viewButtons }>
                        {/* botoes Aagi */}
                        <Button
                                
                                disabled = { desativar[1].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 1 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[1].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[1].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[1].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return aagiplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[1].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[1].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[1].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[1].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[1].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return aagiMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                        {/* fim botoes Aagi */}


                    </View>
                
                    <View style = { styles.viewButtons }>
                        {/* botoes Aard */}
                        <Button
                                
                                disabled = { desativar[2].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 2 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[2].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[2].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[2].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return aardplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[2].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[2].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[2].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[2].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[2].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return aardMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                        {/* fim botoes Aard */}


                    </View>
                                
                    <View style = { styles.viewButtons }>
                        {/* botoes Avig */}
                        <Button
                                
                                disabled = { desativar[3].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 3 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[3].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[3].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[3].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return avigplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[3].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[3].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[3].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[3].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[3].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return avigMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                        {/* fim botoes Avig */}


                    </View>
                    
                    <View style = { styles.viewButtons }>

                            {/* botoes Asab */}
                            <Button
                                
                                disabled = { desativar[4].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 4 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[4].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[4].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[4].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return asabplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[4].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[4].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[4].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[4].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[4].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return asabMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                            {/* fim botoes Asab */}


                    </View>

                    <View style = { styles.viewButtons }>
                            {/* botoes Ares */}
                            <Button
                                
                                disabled = { desativar[5].desativar }

                                title = ' + '
                                buttonStyle = {styles.buttonplus}
                                onPress = { () => {
                                    if ( pontos >= 60 || atributos[ 5 ].atributo >= 15  ){
                                        
                                        var corNova = "#f11f"
                                        setCor(  corNova  )
                                    
                                        var atrdesativar = true
                                        return desativar[5].desativar = atrdesativar
                            
                                    }
                                    else if( pontos < 60 )  { 
                                        var atrdesativar = false
                                        desativar[5].desativar = atrdesativar
                                        var corNova = "red"
                                        setCor(  corNova  )
                                        var atrdesativarMinus = false
                                        desativarMinus[5].desativar = atrdesativarMinus
                                        
                                        
                                        
                                        return aresplus() 
                                    }
                                    

                                }} 
                                
                                
                            />
                            <Button
                                
                                disabled = { desativarMinus[5].desativar }
                                    title = ' - '
                                    buttonStyle = {styles.buttonminus}
                                    onPress = { () => {
                                        if ( pontos > 60 || atributos[5].atributo <= 5 ){
                                            
                                            var corNova = "#f12f"
                                            setCor(  corNova  )
                                            var atrdesativar = true
                                            return desativarMinus[5].desativar =atrdesativar
                                
                                        }
                                        else { 
                                            var atrdesativarMinus = false
                                            desativarMinus[5].desativar =atrdesativarMinus
                                            var atrdesativar = false 
                                            desativar[5].desativar = atrdesativar

                                            var corNova = "red"
                                            setCor(  corNova  )
                                            
                                            
                                            
                                            return aresMinus() 
                                        }
                                        
        
                                    }}  
                                
                                
                            />
                        {/* fim botoes Ares */}

                    </View>
                    



                            
                    {/* lista de alocação de atributos */}
                    <FlatList
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
            {/* fim view do atributos */}
            <Text style = { styles.textoAtributos }> Talentos </Text>

            {/* inicio view dos talentos */}
            <Modal transparent = {true} visible = { isvisible2 } > 
            <View style ={ styles.modalinterrogacao }> 
                <Text style = { styles.Xmodal } onPress = {() => {setIsvisible2(false)}}> X </Text>            
                <Text style = {styles.textInterrogacao}> vamo desenrolar ae </Text>
            </View>
                            

            </Modal>
            <View style = { styles.setAtributos }>

                <Text style = {styles.textInterrogacao} >selecione o seu talento {"\n" } ( apenas novatos )</Text>
                <Text style = {styles.escolha}
                onPress = {() => { 
                    setIsvisible2( true )
                 }}
                > { escolha } </Text>


            </View>


         </ScrollView>



  );
}

