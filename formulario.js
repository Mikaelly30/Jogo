class Formulario{
    constructor(){

        this.input = createInput("Nome");
        this.button = createButton("JOGAR");
        this.titulo = createElement("h2");
        this.saudacao = createElement("h2");

    }

    display(){
        this.titulo.style("font-size", "50px");
        
        this.titulo.html("T-Rex Multiplayer");
        this.titulo.position(500,50);
        this.input.style("height", "30px");
        this.input.style("width", "200px");
        this.input.position(500,300);
        this.button.position(560,350);
        this.button.style("height", "25px");
        this.button.style("width", "100px");

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.nome = this.input.value();
            contagemJogadores +=1;
            player.index = contagemJogadores;
            player.atualizarContagemJogadores(contagemJogadores); 
            player.atualizarInfo();

        })

        

    }

}
