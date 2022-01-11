class Player{
    constructor(){
        this.nome = null
        this.index = null
    
    
    }


     ContagemDeJogadores(){
        bancoDeDados.ref('contagemJogadores').on('value', (data)=>{
            contagemJogadores = data.val()
        })
     }

     AtualizarContagemJogadores(ContagemDeJogadores){
         bancoDeDados.ref('/').update({contagemJogadores : contagemDeJogadores})
     }

     AtualizarInfo(){
        var playerIndex = "players/player" + this.index
        database.ref(palyerIndex).set({
            name : this.nome,
        })

     }








}