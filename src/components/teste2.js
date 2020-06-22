import React, { useState } from 'react';
import { View,Text, Button } from 'react-native';

// import { Container } from './styles';

const teste2 = () => {
    var number = 60
    const [teste3, setTeste3] = useState( 60 )
    function teste() {
        var final =  teste3 + 1
        return setTeste3( final )
        
    }
  return (
      <>
        <Button
            title = ' + '
            onPress = { () => {teste(  );} }
        
        ></Button>
        <Text> numero: { teste3 }  numero2: { number }</Text>
      
      
      </>


  )
}

export default teste2;