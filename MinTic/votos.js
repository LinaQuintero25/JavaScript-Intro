let votos=[]

function votar(candidato){
	votos.push(candidato)
}

function contarVotos{
	let conteo =[];
	for (let i=0; i<votos.length; i++){
	lef voto=votos[i];
		if(conteo == undefined){
			conteo[voto] = 1;
		}else{
			conteo[voto]++;
		}
	}
}

votar("Candidato 1");
votar("Candidato 2");
votar("Candidato 1");
votar("Candidato 3");
votar("Candidato 2");

console.log(contarVotos());