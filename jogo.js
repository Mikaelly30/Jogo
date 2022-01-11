class Jogo{
 constructor(){

 }

 obterEstado(){
var estadoJogoRef = bancoDeDados.ref('estadoDeJogo');
estadoJogoRef.on('value', function(data){
    estadoJogo = data.val();
})
 }
 atualizarEstado(estado){
bancoDeDados.ref('/').update({
    estadoDeJogo : estado
})
}

async inicio(){
    if(estadoJogo === 0 ){
        form = new Formulario();
        form.display();
        player = new Player();
    }

}

jogar(){
   
    chao1 = createSprite(windowWidth/2,windowHeight/2, windowWidth,10);
    chao2 = createSprite(windowWidth/2,windowHeight-10, windowWidth,10);

    gerarObstaculos();
    
}

}