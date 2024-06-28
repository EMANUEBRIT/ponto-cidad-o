//implemente um programa capaz de identificar
//se um numero e divisivel por 3 e 2

//let A = 9

//if(3<A && 2<A){
//   console.log('não divisivel')
//}else.if()

//enum

//class Computado{
//processador: string
//memoriaram: string
//tipodearmazenamento:
//capacidadeDeArmazenamento: string 
//}

////enum Modelo { 
//Virtus= 'Virtus',
// Gol= 'Gol', 
// Fusca= 'Fusca',
// }

// enum Cor {
//     Azul= 'Azul',
//    Verde= 'Verde',
//     Branco= 'Branco',
// }


// class carro{
//     marca: string
//     Modelo: Modelo
//     Cor: Cor
//     ano: number
//     motor: number

// constructor(marca: string, Modelo: Modelo,Cor: Cor ,ano: number,motor: number ){

//     this.marca=marca
//     this.Modelo=Modelo
//     this.Cor=Cor
//     this.motor=motor
// }

//     andar() { //metodo
//         console.log('veiculo esta trafegando')
//     }
// }
 
// let carro1 = new carro("volkswagem" , Modelo.Virtus, Cor.Branco,2023 , 1 )

// console.log(carro1)

    class passaro{
        especie: string
        idade: number

        constructor( especie: string , idade: number) {
            this.especie = especie
            this.idade= idade
        }

        nadar() {
            console.log('eu morri')
        }
    }

    let passaro1 = new passaro("papagaio" , 2)

    console.log(passaro1)
