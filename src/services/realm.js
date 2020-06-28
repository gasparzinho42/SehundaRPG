import Realm from 'realm'
import personagemSchema from '../schemas/personagemSchema'

export default function getRealm(){
    return Realm.open({
        schema: [ personagemSchema ]
    })
        
    
}
  

 

