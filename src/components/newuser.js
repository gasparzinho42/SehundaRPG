import { set } from "react-native-reanimated";
import {Alert} from 'react-native'

export default class newuser{
    

        bio;
        atributos;
        data;
        talentos;

    setbio(bio){
        this.bio = bio
    }
    setAtr(atributo){
        this.atributos = atributo
    }
    setDta(data){
        this.data = data
    }
    setTlt(talento){
        this.talentos = talento
    }

    getbio(){
       return bio
    }
    getAtr(){
        return atributos
    }
    getDta(){
       return data
    }
    getTlt(){
        return talentos
    }

        


    
      
    
    
}
