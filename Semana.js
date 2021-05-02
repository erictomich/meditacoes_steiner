import React from 'react';
import { StyleSheet, Text, Button, ScrollView, View, Alert, TouchableOpacity } from 'react-native';


function BotaoDiaDaSemana(props) {
	return(
		<TouchableOpacity style={styles.botao}
        title={props.dia}
        onPress={() => {props.that.setState({titulo: props.dia, texto: props.conteudo}); }}
		>
		
			<Text style={styles.botaoTexto}>{props.dia}</Text>
		</TouchableOpacity>
	);
}

const textoSabado = `Prestar atenção às representações mentais ( pensamentos ).\n\nTer somente pensamentos relevantes, Aprender a distinguir paulatinamente nos pensamentos entre o essencial e o acessório; entre o eterno e o efêmero; entre a verdade e a mera opinião.
\nAo escutar o discurso do próximo, procurar permanecer calmo em intervir e renunciar a todo consentimento e, principalmente a todo juízo negativo (crítica, negação), também nos pensamentos e sentimentos.
\nEsta é a chamada OPINIÃO CERTA
`;

const textoDomingo = `Decidir-se  ainda nos atos mais insignificantes, somente com base numa ponderação total. Afastar da alma todo atuar impensado, todo fazer desprovido de significado. Deve-se ter, para tudo, razões bem ponderadas. Deixar de fazer aquilo que carece de um motivo significativo.
\nSe estamos convencidos da retidão de uma decisão tomada, devemos nos ater a ela com toda a firmeza de ânimo.
\nEste é o chamado JUÍZO CERTO  que não depende de simpatia ou antipatia.
`;

const textoSegunda = `A fala.
\nDos lábios de quem aspira a um conhecimento superior somente deve emanar o que tem sentido e significado. Todo falar por falar, por exemplo, com a intenção de fazer passar o tempo é, neste caso, prejudicial.
\nDevemos evitar o tipo comum de conversa onde se fala de qualquer assunto numa mistura inconsequente; por outro lado, não devemos nos excluir do convívio com o nosso próximo. É justamente no contato com os outros que a conversa deve assumir caráter de significação. Deve-se dar resposta a qualquer interlocutor, mas de forma pensada, em todos os sentidos. Nunca falar sem ter motivo. Gostar de guardar silencio. Tentar não falar nem muito, nem pouco demais. Primeiro escutar e depois digerir.
\nEste exercício chama-se também. <strong>A PALAVRA CERTA.
`;

const textoTerca = `As ações exteriores não devem perturbar o nosso próximo.
\nQuando nosso ser íntimo (consciência) nos leva a atuar, devemos ponderar cuidadosamente sobre a melhor maneira de corresponder ao bem do todo, à felicidade permanente do próximo, à essência eterna.
\nQuando atuamos a partir de nós mesmos, por uma iniciativa própria, pesar de antemão a fundo os efeitos de nossa atuação.
\nEste é chamado também de AÇÃO ACERTADA
`;

const textoQuarta = `A organização da existência.
\nViver de acordo com a natureza e o espírito; não se dissipar nas futilidades exteriores da vida. Evitar tudo que traz inquietude e agitação. Não atuar apressadamente, mas também não ser indolente. Considerar a vida como um meio para a atividade, para a elevação e agir em consequência.
\nChama-se neste sentido também de PONTO DE VISTA CERTO.
`;

const textoQuinta = `A ASPIRAÇÃO HUMANA.
\nDevemos ter cuidado de não empreender nada que ultrapasse as nossas forças, mas tão pouco deixar de fazer o que estiver dentro delas. Olhar além do imediato e do dia a dia, fixar metas (ideais) unidas com os deveres mais elevados do Homem, por exemplo, buscar desenvolver-se por meio dos exercícios indicados com a finalidade de poder ajudar e aconselhar ao próximo mais intensamente, embora não seja num futuro imediato.
\nIsto pode ser resumido em TRANSFORMAR TODOS OS EXERCÍCIOS PRECEDENTES EM DISPOSIÇÃO DURADOURA.
`;

const textoSexta = `A disposição de aprender da vida o mais possível.
\nNada acontece que não se nos preste a experiências úteis na vida. Se fizemos algo de forma errada ou incompleta, isto será um motivo para fazer algo semelhante, numa ocasião posterior, correta e perfeitamente.
\nVendo agir os outros, devemos vê-los sob o mesmo critério ( embora sempre com um olhar carinhoso). Não devemos fazer nada sem lembrar vivências que possam ser uma ajuda em nossas decisões e realizações. Pode se aprender muito de qualquer ser humano, inclusive de crianças.
\nEste exercício é chamado de MEMÓRIA CERTA, isto é, a lembrança certa da experiência que se teve.
`;

const textoResumo = `De vez em quando olhar para o próprio interior, embora seja apenas por cinco minutos por dia, sempre à mesma hora. Fazendo- o devemos aprofundar em nós mesmos, apreciar cuidadosamente, examinar e formar as normas da nossa existência, analisar mentalmente nossos conhecimentos, ponderar nossos deveres, refletir sobre o conteúdo e o verdadeiro sentido da vida, sentir um desagrado, autêntico respeito aos nossos defeitos e imperfeições. Em uma palavra nos compete descobrir o essencial, o duradouro e fixar seriamente metas que lhe correspondam, por exemplo, adquirir determinadas virtudes. Não devemos cair no erro de pensar que realizamos algo de maneira perfeita, mas sim aspirar sempre a algo mais elevado, de acordo com os ideais mais altos.
Este exercício se chama também  A RETA CONTEMPLAÇÃO 
`;

const textoInicial = `O Homem deve dedicar atenção e cuidado a certos fenômenos anímicos que costuma realizar normalmente sem prestar-lhes atenção.
\nExistem 8 de tais fenômenos. O melhor é, por exemplo, durante 8 ou 15 dias, dedicar-se cada dia apenas a 1 exercício. Comece pelo sábado. O oitavo exercício, que dura uns 5 minutos, deveria ser feito todos os dias. Atinge-se pouco a pouco o reto conhecimento de si mesmo e constata-se quais são os progressos realizados.
\nEsses exercícios favorecem o desenvolvimento da Flor de Lótus de 16 pétalas - a laringe.
\nPermite o discernimento do modo de pensar de um outro ser anímico e a observação mais profunda das verdadeiras leis da natureza.
`;

class Semana extends React.Component {
	state = {
		titulo: 'Instruções',
		texto: textoInicial
	};
	
	render() {
		return(
		 <View>
			  <BotaoDiaDaSemana dia="Sábado" that={this} conteudo={textoSabado} />
			  <BotaoDiaDaSemana dia="Domingo" that={this} conteudo={textoDomingo} />
			  <BotaoDiaDaSemana dia="Segunda-feira" that={this} conteudo={textoSegunda} />
			  <BotaoDiaDaSemana dia="Terça-feira" that={this} conteudo={textoTerca} />
			  <BotaoDiaDaSemana dia="Quarta-feira" that={this} conteudo={textoQuarta} />
			  <BotaoDiaDaSemana dia="Quinta-feira" that={this} conteudo={textoQuinta} />
			  <BotaoDiaDaSemana dia="Sexta-feira" that={this} conteudo={textoSexta} />
			  <BotaoDiaDaSemana dia="Resumo" that={this} conteudo={textoResumo} />
			  <BotaoDiaDaSemana dia="Instruções" that={this} conteudo={textoInicial} />
			  <Text style={styles.titulo}>{this.state.titulo}</Text>
			  <Text style={styles.textoGrande}>{this.state.texto}</Text>
			  
		  </View>
		);
	}
}

export default Semana;

const styles = StyleSheet.create({

  botao: {
	  backgroundColor: '#7FB069',
	  alignItems: "center",
	  padding: 10,
	  marginTop: 3,
	  marginLeft:20,
	  marginRight:20
  },
  botaoTexto: {
	  color: 'white',
	  fontSize: 20
  },
  titulo: {
	  marginTop: 30,
	  marginLeft: 20,
	  marginBottom: 20,
	  fontSize: 28,
  },
  textoGrande: {
	  marginLeft: 20,
	  fontSize: 18,
	  marginRight: 20
  }
});