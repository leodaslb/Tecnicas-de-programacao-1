const capAmerica = {
    nome:"Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 60,
    forca: 65,
    resistencia: 60,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}

//console.log(capAmerica.descricao())

const homemFerro = {
    nome:"Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark 3 ",
    armaSecundaria: "",
    velocidade: 65,
    forca:50,
    resistencia: 55,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(homemFerro.descricao())

const hulk = {
    nome:"Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Socos e chutes ",
    armaSecundaria: "Raiva",
    velocidade: 67,
    forca:90,
    resistencia: 77,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(hulk.descricao())

const thor = {
    nome:"Thor",
    codinome: "Thor",
    armaPrincipal: "Marterlo Mjölnir ",
    armaSecundaria: "",
    velocidade: 76,
    forca:86,
    resistencia: 80,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(thor.descricao())

const thanos = {
    nome:"Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do infinto ",
    armaSecundaria: "Joias do Infinito",
    velocidade: 73,
    forca:93,
    resistencia: 91,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(thanos.descricao())

const viuva = {
    nome:"Natasha Romanoff",
    codinome: "Viuva Negra",
    armaPrincipal: "Bastoes ",
    armaSecundaria: "Facas",
    velocidade: 30,
    forca: 25,
    resistencia: 20,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(viuva.descricao())

const homemAranha = {
    nome:"Peter Parker",
    codinome: "Homem Aranha",
    armaPrincipal: "traje stark",
    armaSecundaria: "lança teias",
    velocidade: 72,
    forca:72,
    resistencia: 72,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(homemAranha.descricao())

const homemFormiga  = {
    nome:"Homem formiga",
    codinome: "Homem formiga",
    armaPrincipal: "Traje que encolhe e cresce ",
    armaSecundaria: "",
    velocidade: 34,
    forca:59,
    resistencia: 59,
    descricao: function() {
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome do personagem: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n"
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de Força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"
    }
}
//console.log(homemFormiga.descricao())

personagens = [capAmerica, homemAranha, homemFerro, homemFormiga, hulk, thanos, thor, viuva]


for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
        let p1 = personagens[i]
        let p2 = personagens[j]
        console.log('Duelo entre: ' + p1.codinome +' e ' + p2.codinome+ '\n')
        console.log(p1.descricao()+ '\n')
        
        console.log(p2.descricao() + '\n')
        let cont = 0
        if (p1.forca > p2.forca) {
            console.log(p1.codinome+' Vence ' + p2.codinome + 'em força' )
            cont = cont + 1
        }
        else{
            console.log(p2.codinome+' Vence ' + p1.codinome + 'em força' )
        }

        if (p1.resistencia > p2.resistencia) {
            console.log(p1.codinome+' Vence ' + p2.codinome + ' em resistencia' )
            cont = cont + 1
        }
        else{
            console.log(p2.codinome+' Vence ' + p1.codinome + ' em resistencia' )
        }

        if (p1.velocidade > p2.velocidade) {
            console.log(p1.codinome+' Vence ' + p2.codinome + ' em velocidade' )
            cont = cont + 1
        }
        else{
            console.log(p2.codinome+' Vence ' + p1.codinome + ' em velocidade' )
        }

        if (cont > 1){
            console.log(p1.codinome + ' VENCE o duelo contra ' +p2.codinome + '\n' )
        }
        else{ 
            console.log(p2.codinome + ' VENCE o duelo contra ' +p1.codinome + '\n')
        }

        console.log('---------- proximo DUELO---------------')
    }
}