export default class personagemSchema{
    static schema = {
        name: 'personagem',
        primaryKey: 'id',
        properties: {
            bio: {
                nome: 'string',
                crenca: 'string',
                instinto: 'string'
            },
            atributosPrimary: [ 
                {id: 'int', sucesso:   'int'   ,atributo:   'int' , falha:  'int' },
                {id: 'int', sucesso:   'int' ,atributo:  'int'  , falha:  'int' },
                {id: 'int', sucesso:   'int' ,atributo:  'int'  , falha:  'int' },
                {id: 'int', sucesso:  'int' ,atributo:  'int'  , falha:  'int' },
                {id: 'int', sucesso:  'int' ,atributo:  'int' , falha:  'int' },
                {id: 'int', sucesso:  'int' ,atributo:  'int'  , falha:  'int' }
            ],
            atributosSecondary: [
                {id: 'int'  ,valor_atual: {type:  'int'} , valor_total:  'int'  },
                {id: 'int' ,valor_base: 'int'},
                {id:'int'  ,valor_base: 'int'},
                {id: 'int' ,valor_base: 'int'},
                {id: 'int' ,valor_base: 'int'}
                ],
            talentos: []
            
        }
    }
}