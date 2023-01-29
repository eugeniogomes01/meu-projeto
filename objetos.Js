let carro = {
    modelo: "HB20",
    ano: 2020,
    portas: 4,

    ligar: function(){
        console.log("o carro "+this.modelo+" está ligado")
    }
};

//carro.ligar();


function Carro(anoCarro, nomeCarro){
       this.nome = nomeCarro;
       this.ano = anoCarro;
};

let civic = new Carro("2011", "civic");
console.log(civic);