import React, {useState, Component } from 'react';
import { Text, Alert } from 'react-native';

import {Button, ButtonGroup} from 'react-native-elements'



const ficha_old = () => {
  const [count, setCount] = useState(5)
  const [count2, setCount2] = useState(5)
  const [teste, setTeste] = useState([
    { id: 0, contador: count },
    { id: 1,  contador: count2 },
  ])

  const add = () => {
    setCount( count + 1 )
    
    return teste[0].contador = count + 1
  }

  const minus = () => {
    setCount( count - 1 )
    
    return teste[0].contador = count - 1
  }
  const buttons = [' + ',' - ']
  return (
    <>
      <Button
          key = {1}
          title = ' + '
          onPress = { add }
          buttonStyle= {{width:50,height: 25, marginBottom: 5}}
      />
       <Button
          key = {2}
          title = ' - '
          onPress = { minus }
          buttonStyle= {{width:50,height: 25, marginBottom: 5}}
          
      />
      <Text> count: { count } teste: { teste[0].contador } </Text>
    
    
    
    
    </>


  )
}
 // CARALHO CONSEGUI MIZERA PORRA DESGRAÇA

export default ficha_old;

