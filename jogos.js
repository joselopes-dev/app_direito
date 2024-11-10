// Função para iniciar o jogo, ocultar a tela inicial e mostrar o menu de jogos
 function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gamesMenu').style.display = 'flex';
}

function loadGame(gameId) {
    let gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = ''; // Limpa o conteúdo anterior

    // Oculta o menu de jogos ao selecionar um jogo
    document.getElementById('gamesMenu').style.display = 'none';

    if (gameId === 'quiz1') {
        gameContent.innerHTML = `
            <h2>Quiz 1: Jurisprudência</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions1)" disabled>Próxima Pergunta</button>
            
        `;
        startQuiz(questions1); // Inicia o primeiro quiz
    } else if (gameId === 'quiz2') {
        gameContent.innerHTML = `
            <h2>Quiz 2: Direito penal</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions2)" disabled>Próxima Pergunta</button>
            
        `;
        startQuiz(questions2); // Inicia o segundo quiz
    } else if (gameId === 'quiz3') {
        gameContent.innerHTML = `
            <h2>Quiz 3: Direito eleitoral</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions3)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions3); // Inicia o terceiro quiz
    }

 else if (gameId === 'quiz4') {
        gameContent.innerHTML = `
            <h2>Quiz 4:  Direito tributário</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions4)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions4); // Inicia o quarto quiz
    }

    else if (gameId === 'quiz5') {
        gameContent.innerHTML = `
            <h2>Quiz 5: Direito imobiliário</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions5)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions5); // Inicia o quinto quiz
    }

    else if (gameId === 'quiz6') {
        gameContent.innerHTML = `
            <h2>Quiz 6: Direito da família</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions6)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions6); // Inicia o sexto quiz
    }

    else if (gameId === 'quiz7') {
        gameContent.innerHTML = `
            <h2>Quiz 7: Direito Previdenciário</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions7)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions7); // Inicia o sétimo quiz
    }

    else if (gameId === 'quiz8') {
        gameContent.innerHTML = `
            <h2>Quiz 8: Direito do Consumidor</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions8)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions8); // Inicia o oitavo quiz
    }

    else if (gameId === 'quiz9') {
        gameContent.innerHTML = `
            <h2>Quiz 9: Direito Trabalhista</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions9)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions9); // Inicia o nono quiz
    }

    else if (gameId === 'quiz10') {
        gameContent.innerHTML = `
            <h2>Quiz 10: Direito Digital</h2><hr>
            <div id="quiz-container"></div>
            <button class="next-button" onclick="nextQuestion(questions10)" disabled>Próxima Pergunta</button>
           
        `;
        startQuiz(questions10); // Inicia o décimo quiz
    }
}

let currentQuestionIndex = 0;
const userAnswers = [];

const questions1 = [
{
    question: 'O que é jurisprudência?',
answers: [
    { text: 'Conjunto de decisões judiciais sobre uma matéria', correct: true },
    { text: 'Conjunto de leis que regulamentam a sociedade', correct: false },
    { text: 'A opinião pública sobre temas jurídicos', correct: false },
    { text: 'Um código de ética para juízes', correct: false }
]
},
{
question: 'Qual é a função da jurisprudência no sistema judiciário?',
answers: [
    { text: 'Orientar e uniformizar as decisões dos tribunais', correct: true },
    { text: 'Criar novas leis', correct: false },
    { text: 'Anular decisões de primeira instância', correct: false },
    { text: 'Definir o salário dos magistrados', correct: false }
]
},
{
question: 'O que significa “jurisprudência vinculante”?',
answers: [
    { text: 'É uma decisão judicial que deve ser seguida por outras instâncias', correct: true },
    { text: 'É uma decisão judicial específica de casos criminais', correct: false },
    { text: 'É uma recomendação aos advogados', correct: false },
    { text: 'É uma orientação aos juízes, mas sem obrigatoriedade', correct: false }
]
},
{
question: 'A súmula vinculante é um exemplo de jurisprudência que:',
answers: [
    { text: 'Deve ser seguida obrigatoriamente pelos tribunais inferiores', correct: true },
    { text: 'É uma sugestão de interpretação da lei', correct: false },
    { text: 'Aplica-se apenas ao Supremo Tribunal Federal', correct: false },
    { text: 'Aplica-se somente a casos de direito civil', correct: false }
]
},
{
question: 'A jurisprudência pode ser alterada?',
answers: [
    { text: 'Sim, quando houver mudança de entendimento dos tribunais', correct: true },
    { text: 'Não, ela é permanente', correct: false },
    { text: 'Sim, apenas pelo Congresso Nacional', correct: false },
    { text: 'Não, somente as leis podem ser alteradas', correct: false }
]
},
{
question: 'O que é jurisprudência majoritária?',
answers: [
    { text: 'É o entendimento da maioria dos tribunais sobre um tema', correct: true },
    { text: 'É o entendimento de apenas um tribunal específico', correct: false },
    { text: 'É uma decisão judicial de caráter provisório', correct: false },
    { text: 'É o entendimento popular sobre um tema jurídico', correct: false }
]
},
{
question: 'Em que caso a jurisprudência pode ser usada como fonte de direito?',
answers: [
    { text: 'Quando há lacuna na lei', correct: true },
    { text: 'Apenas em questões trabalhistas', correct: false },
    { text: 'Quando o juiz deseja seguir sua opinião pessoal', correct: false },
    { text: 'Somente no Tribunal Superior Eleitoral', correct: false }
]
},
{
question: 'Qual é o papel do STJ na criação de jurisprudência?',
answers: [
    { text: 'Uniformizar a interpretação da legislação federal', correct: true },
    { text: 'Elaborar novas leis federais', correct: false },
    { text: 'Emitir pareceres para o Congresso', correct: false },
    { text: 'Rever decisões do Supremo Tribunal Federal', correct: false }
]
},
{
question: 'As súmulas do STF têm qual característica principal?',
answers: [
    { text: 'São entendimentos consolidados do STF sobre temas específicos', correct: true },
    { text: 'São decisões que se aplicam apenas a casos estaduais', correct: false },
    { text: 'São obrigatórias para todos os órgãos públicos', correct: false },
    { text: 'São sugestões para o Poder Legislativo', correct: false }
]
},
{
question: 'Quando a jurisprudência do STF pode ser revista?',
answers: [
    { text: 'Quando o tribunal entende que o contexto jurídico mudou', correct: true },
    { text: 'Nunca, ela é imutável', correct: false },
    { text: 'Apenas a cada 10 anos', correct: false },
    { text: 'Quando o Congresso autoriza', correct: false }
]
}
    // Adicione mais perguntas aqui
];

const questions2 = [
{
    "question": "Qual é o princípio que determina que ninguém será punido por um ato que não estava previsto como crime na época em que foi praticado?",
    answers: [
    { "texto": "Princípio da legalidade", "correto": true },
    { "texto": "Princípio da moralidade", "correto": false },
    { "texto": "Princípio da proporcionalidade", "correto": false },
    { "texto": "Princípio da equidade", "correto": false }
  ]
},
{
question: 'No Direito Penal, o que significa “prescrição”?',
answers: [
    { text: 'A perda do direito do Estado de punir pelo decurso do tempo', correct: true },
    { text: 'O prazo para o réu recorrer de uma sentença', correct: false },
    { text: 'A redução de pena por bom comportamento', correct: false },
    { text: 'A determinação da pena máxima aplicável', correct: false }
]
},
{
question: 'O que é considerado um crime culposo?',
answers: [
    { text: 'Crime cometido sem intenção, mas com negligência, imprudência ou imperícia', correct: true },
    { text: 'Crime cometido com premeditação', correct: false },
    { text: 'Crime cometido em legítima defesa', correct: false },
    { text: 'Crime cometido durante um assalto', correct: false }
]
},
{
question: 'Qual é a pena máxima prevista para o crime de homicídio simples no Brasil?',
answers: [
    { text: '20 anos de reclusão', correct: true },
    { text: '10 anos de reclusão', correct: false },
    { text: '15 anos de reclusão', correct: false },
    { text: '25 anos de reclusão', correct: false }
]
},
{
question: 'Qual é a finalidade da pena segundo o Direito Penal?',
answers: [
    { text: 'Reprimir e prevenir a prática de crimes', correct: true },
    { text: 'Apenas reprimir o indivíduo', correct: false },
    { text: 'Vingar o sofrimento da vítima', correct: false },
    { text: 'Arrecadar fundos para o governo', correct: false }
]
},
{
question: 'O que é legítima defesa no Direito Penal?',
answers: [
    { text: 'O direito de defender-se de agressão injusta, atual ou iminente', correct: true },
    { text: 'A defesa feita com excesso de força', correct: false },
    { text: 'O direito de agredir em qualquer situação de perigo', correct: false },
    { text: 'O direito de se vingar de uma ofensa', correct: false }
]
},
{
question: 'Em qual caso o indivíduo pode ser isento de pena?',
answers: [
    { text: 'Quando agiu sob coação irresistível ou em estado de necessidade', correct: true },
    { text: 'Quando a vítima perdoa o agressor', correct: false },
    { text: 'Quando a pena é inferior a um ano', correct: false },
    { text: 'Quando o réu confessa o crime', correct: false }
]
},
{
question: 'O que significa “princípio da legalidade” no Direito Penal?',
answers: [
    { text: 'Ninguém pode ser punido sem que a conduta esteja prevista em lei', correct: true },
    { text: 'Qualquer comportamento pode ser punido pelo juiz', correct: false },
    { text: 'O réu pode ser julgado sem defesa', correct: false },
    { text: 'A pena deve ser decidida pelo julgamento público', correct: false }
]
},
{
question: 'Qual é o objetivo da progressão de regime no cumprimento de pena?',
answers: [
    { text: 'Reintegrar o preso à sociedade de forma gradual', correct: true },
    { text: 'Punir mais severamente o infrator', correct: false },
    { text: 'Permitir que o réu não cumpra a pena integralmente', correct: false },
    { text: 'Premiar o infrator por confessar o crime', correct: false }
]
},
{
question: 'O que é crime hediondo segundo a legislação brasileira?',
answers: [
    { text: 'Crime considerado de extrema gravidade, como homicídio qualificado e estupro', correct: true },
    { text: 'Crime cometido por pessoa de alta periculosidade', correct: false },
    { text: 'Crime cometido por servidor público', correct: false },
    { text: 'Crime cometido em outro país', correct: false }
]
},
    // Adicione mais perguntas aqui
];

const questions3 = [
{
    question: 'Qual é a idade mínima para que um cidadão possa se candidatar a Presidente da República no Brasil?',
answers: [
    { text: '35 anos', correct: true },
    { text: '30 anos', correct: false },
    { text: '25 anos', correct: false },
    { text: '18 anos', correct: false }
]
},
{
question: 'Qual órgão é responsável por organizar e supervisionar as eleições no Brasil?',
answers: [
    { text: 'Tribunal Superior Eleitoral (TSE)', correct: true },
    { text: 'Supremo Tribunal Federal (STF)', correct: false },
    { text: 'Congresso Nacional', correct: false },
    { text: 'Ministério da Justiça', correct: false }
]
},
{
question: 'Em quais casos o voto é obrigatório no Brasil?',
answers: [
    { text: 'Para cidadãos entre 18 e 70 anos', correct: true },
    { text: 'Para todos os cidadãos', correct: false },
    { text: 'Apenas para pessoas com ensino médio completo', correct: false },
    { text: 'Apenas para quem ocupa cargos públicos', correct: false }
]
},
{
question: 'O que é propaganda eleitoral antecipada?',
answers: [
    { text: 'É a propaganda realizada antes do período permitido por lei', correct: true },
    { text: 'É a propaganda realizada no dia da eleição', correct: false },
    { text: 'É a propaganda feita apenas na televisão', correct: false },
    { text: 'É a propaganda feita em reuniões privadas', correct: false }
]
},
{
question: 'Qual é o período de duração do mandato de um senador no Brasil?',
answers: [
    { text: '8 anos', correct: true },
    { text: '4 anos', correct: false },
    { text: '6 anos', correct: false },
    { text: '2 anos', correct: false }
]
},
{
question: 'O que caracteriza o crime de “compra de votos”?',
answers: [
    { text: 'Oferecer vantagens em troca do voto do eleitor', correct: true },
    { text: 'Votar mais de uma vez na mesma eleição', correct: false },
    { text: 'Fazer propaganda eleitoral em local proibido', correct: false },
    { text: 'Receber doações de campanha sem declarar', correct: false }
]
},
{
question: 'Quem possui direito ao voto facultativo no Brasil?',
answers: [
    { text: 'Cidadãos entre 16 e 17 anos, analfabetos e maiores de 70 anos', correct: true },
    { text: 'Todos os cidadãos', correct: false },
    { text: 'Apenas cidadãos entre 16 e 17 anos', correct: false },
    { text: 'Apenas cidadãos maiores de 70 anos', correct: false }
]
},
{
question: 'Qual é a função do Tribunal Regional Eleitoral (TRE)?',
answers: [
    { text: 'Organizar e supervisionar as eleições em âmbito estadual', correct: true },
    { text: 'Criar novas leis eleitorais', correct: false },
    { text: 'Julgar crimes comuns', correct: false },
    { text: 'Nomear ministros do TSE', correct: false }
]
},
{
question: 'Em que situação um candidato pode ter seu registro de candidatura impugnado?',
answers: [
    { text: 'Quando não atende aos requisitos de elegibilidade', correct: true },
    { text: 'Quando possui apenas ensino fundamental', correct: false },
    { text: 'Quando reside fora do país', correct: false },
    { text: 'Quando é eleitor facultativo', correct: false }
]
},
{
question: 'O que é segundo turno nas eleições?',
answers: [
    { text: 'Uma nova votação entre os dois candidatos mais votados, caso nenhum alcance maioria absoluta', correct: true },
    { text: 'Um novo turno de votação para cargos proporcionais', correct: false },
    { text: 'Uma votação exclusiva para governadores', correct: false },
    { text: 'Uma eleição realizada somente na capital', correct: false }
]
}
    // Adicione mais perguntas aqui
];

const questions4 = [
{
    question: 'Qual é o princípio que proíbe a criação de tributos sem previsão legal?',
answers: [
    { text: 'Princípio da Legalidade', correct: true },
    { text: 'Princípio da Anterioridade', correct: false },
    { text: 'Princípio da Capacidade Contributiva', correct: false },
    { text: 'Princípio da Isonomia', correct: false }
]
},
{
question: 'Qual ente federativo possui competência para instituir o Imposto sobre a Renda (IR)?',
answers: [
    { text: 'União', correct: true },
    { text: 'Estados', correct: false },
    { text: 'Municípios', correct: false },
    { text: 'Distrito Federal', correct: false }
]
},
{
question: 'O que é o princípio da anterioridade no Direito Tributário?',
answers: [
    { text: 'Impedimento de cobrar tributo no mesmo exercício em que foi instituído', correct: true },
    { text: 'Obrigação de pagamento de tributo antes do vencimento', correct: false },
    { text: 'Cobrança de tributo apenas em exercício futuro', correct: false },
    { text: 'Cobrança de tributo antes da promulgação da lei', correct: false }
]
},
{
question: 'Qual é o tributo incidente sobre operações de circulação de mercadorias e prestação de serviços de transporte e comunicação?',
answers: [
    { text: 'ICMS', correct: true },
    { text: 'ISS', correct: false },
    { text: 'IPTU', correct: false },
    { text: 'IPVA', correct: false }
]
},
{
question: 'Qual é o tributo de competência exclusiva dos municípios?',
answers: [
    { text: 'ISS (Imposto sobre Serviços)', correct: true },
    { text: 'ICMS', correct: false },
    { text: 'IPVA', correct: false },
    { text: 'ITR', correct: false }
]
},
{
question: 'O que é considerado fato gerador de um tributo?',
answers: [
    { text: 'O acontecimento que gera a obrigação tributária', correct: true },
    { text: 'O momento do pagamento do tributo', correct: false },
    { text: 'A competência para instituir o tributo', correct: false },
    { text: 'O fim do prazo para pagamento', correct: false }
]
},
{
question: 'Qual é o imposto cobrado sobre a propriedade de veículos automotores?',
answers: [
    { text: 'IPVA', correct: true },
    { text: 'ICMS', correct: false },
    { text: 'ITR', correct: false },
    { text: 'ISS', correct: false }
]
},
{
question: 'O princípio da capacidade contributiva significa que:',
answers: [
    { text: 'Os tributos devem ser cobrados de acordo com a capacidade financeira do contribuinte', correct: true },
    { text: 'Todos pagam o mesmo valor de tributo', correct: false },
    { text: 'O tributo deve ser cobrado imediatamente após a criação', correct: false },
    { text: 'A cobrança do tributo é facultativa', correct: false }
]
},
{
question: 'Qual é o imposto incidente sobre a transmissão de bens imóveis?',
answers: [
    { text: 'ITBI (Imposto de Transmissão de Bens Imóveis)', correct: true },
    { text: 'ICMS', correct: false },
    { text: 'IR', correct: false },
    { text: 'IPTU', correct: false }
]
},
{
question: 'No sistema tributário brasileiro, o que é imunidade tributária?',
answers: [
    { text: 'É a vedação constitucional de tributar certas pessoas, bens ou serviços', correct: true },
    { text: 'É a isenção de pagamento por período temporário', correct: false },
    { text: 'É a redução do valor do tributo devido', correct: false },
    { text: 'É a suspensão do pagamento do tributo por inadimplência', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions5 = [
{
    question: 'O que é usucapião no Direito Imobiliário?',
answers: [
    { text: 'Aquisição de propriedade por posse prolongada e contínua', correct: true },
    { text: 'Venda de imóvel sem escritura pública', correct: false },
    { text: 'Permissão para alugar um imóvel sem contrato', correct: false },
    { text: 'Transferência de posse temporária', correct: false }
]
},
{
question: 'Qual documento é essencial para transferir a propriedade de um imóvel?',
answers: [
    { text: 'Escritura pública registrada em cartório', correct: true },
    { text: 'Contrato de compra e venda sem registro', correct: false },
    { text: 'Promessa de compra e venda', correct: false },
    { text: 'Registro de financiamento bancário', correct: false }
]
},
{
question: 'O que é IPTU?',
answers: [
    { text: 'Imposto sobre a propriedade predial e territorial urbana', correct: true },
    { text: 'Imposto sobre transmissão de bens imóveis', correct: false },
    { text: 'Imposto sobre a propriedade rural', correct: false },
    { text: 'Imposto sobre serviços', correct: false }
]
},
{
question: 'Qual é a finalidade do registro de imóveis?',
answers: [
    { text: 'Dar publicidade e segurança jurídica à propriedade', correct: true },
    { text: 'Permitir a venda imediata do imóvel', correct: false },
    { text: 'Determinar o valor do IPTU', correct: false },
    { text: 'Autorizar a construção no imóvel', correct: false }
]
},
{
question: 'O que é condomínio edilício?',
answers: [
    { text: 'Edificação com unidades autônomas e áreas comuns', correct: true },
    { text: 'Imóvel rural de propriedade única', correct: false },
    { text: 'Espaço alugado para eventos públicos', correct: false },
    { text: 'Imóvel destinado exclusivamente à venda', correct: false }
]
},
{
question: 'Quem é o responsável pelo pagamento do ITBI em uma transação de compra e venda?',
answers: [
    { text: 'Comprador', correct: true },
    { text: 'Vendedor', correct: false },
    { text: 'Cartório de registro de imóveis', correct: false },
    { text: 'Corretor de imóveis', correct: false }
]
},
{
question: 'O que significa “bem de família” no Direito Imobiliário?',
answers: [
    { text: 'Imóvel protegido contra penhora para assegurar moradia da família', correct: true },
    { text: 'Propriedade destinada à exploração agrícola', correct: false },
    { text: 'Imóvel cedido gratuitamente a terceiros', correct: false },
    { text: 'Residência destinada a aluguel comercial', correct: false }
]
},
{
question: 'O que é laudo de vistoria em contratos de locação?',
answers: [
    { text: 'Documento que descreve o estado do imóvel no início da locação', correct: true },
    { text: 'Contrato que determina o valor do aluguel', correct: false },
    { text: 'Avaliação do valor de mercado do imóvel', correct: false },
    { text: 'Relatório que permite a transferência de posse', correct: false }
]
},
{
question: 'Qual é a função do contrato de promessa de compra e venda?',
answers: [
    { text: 'Garantir o compromisso entre as partes antes da escritura definitiva', correct: true },
    { text: 'Transferir a posse definitiva do imóvel', correct: false },
    { text: 'Permitir que o imóvel seja alugado para terceiros', correct: false },
    { text: 'Conceder isenção de impostos para o comprador', correct: false }
]
},
{
question: 'O que é alienação fiduciária de bem imóvel?',
answers: [
    { text: 'Transferência do imóvel como garantia de pagamento ao credor', correct: true },
    { text: 'Venda do imóvel com preço abaixo do mercado', correct: false },
    { text: 'Locação do imóvel por prazo determinado', correct: false },
    { text: 'Doação do imóvel sem ônus', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions6 = [
{
    question: 'O que é união estável no Direito de Família?',
answers: [
    { text: 'Relação entre duas pessoas com convivência pública, contínua e duradoura com objetivo de constituição familiar', correct: true },
    { text: 'Casamento com efeitos civis', correct: false },
    { text: 'Parceria para fins comerciais', correct: false },
    { text: 'Contrato de locação entre parentes', correct: false }
]
},
{
question: 'Qual é o regime de bens que determina a comunicação de bens adquiridos após o casamento?',
answers: [
    { text: 'Comunhão parcial de bens', correct: true },
    { text: 'Separação total de bens', correct: false },
    { text: 'Comunhão universal de bens', correct: false },
    { text: 'Participação final nos aquestos', correct: false }
]
},
{
question: 'O que caracteriza o poder familiar?',
answers: [
    { text: 'Conjunto de direitos e deveres atribuídos aos pais em relação aos filhos menores', correct: true },
    { text: 'Poder de herança dos filhos em relação aos pais', correct: false },
    { text: 'Direito dos avós de visitar os netos', correct: false },
    { text: 'Permissão para transferir bens entre familiares', correct: false }
]
},
{
question: 'Quem tem direito à pensão alimentícia?',
answers: [
    { text: 'Dependentes que necessitam de suporte financeiro, como filhos, cônjuge e parentes próximos', correct: true },
    { text: 'Apenas filhos menores de idade', correct: false },
    { text: 'Apenas o cônjuge desempregado', correct: false },
    { text: 'Apenas o ex-cônjuge', correct: false }
]
},
{
question: 'O que é guarda compartilhada?',
answers: [
    { text: 'Modelo em que ambos os pais dividem responsabilidades e direitos sobre os filhos', correct: true },
    { text: 'Guarda exclusiva para um dos pais', correct: false },
    { text: 'Guarda transferida aos avós', correct: false },
    { text: 'Responsabilidade exclusiva do genitor com maior renda', correct: false }
]
},
{
question: 'No Brasil, como é considerado o casamento entre pessoas do mesmo sexo?',
answers: [
    { text: 'É reconhecido e possui os mesmos efeitos legais do casamento heterossexual', correct: true },
    { text: 'É permitido apenas como união estável', correct: false },
    { text: 'Não é reconhecido pelo Código Civil', correct: false },
    { text: 'É válido apenas em algumas regiões', correct: false }
]
},
{
question: 'O que é divórcio extrajudicial?',
answers: [
    { text: 'Divórcio realizado em cartório, sem necessidade de processo judicial, desde que consensual e sem filhos menores', correct: true },
    { text: 'Divórcio realizado apenas por meio judicial', correct: false },
    { text: 'Divórcio que exige a presença de um juiz', correct: false },
    { text: 'Separação informal entre os cônjuges', correct: false }
]
},
{
question: 'Em caso de falecimento de um dos cônjuges, o que acontece com os bens no regime de comunhão parcial?',
answers: [
    { text: 'Os bens adquiridos durante o casamento são divididos entre o cônjuge sobrevivente e os herdeiros', correct: true },
    { text: 'Todos os bens são transferidos automaticamente ao cônjuge sobrevivente', correct: false },
    { text: 'Apenas os bens adquiridos antes do casamento são divididos', correct: false },
    { text: 'O cônjuge sobrevivente perde qualquer direito sobre os bens', correct: false }
]
},
{
question: 'O que caracteriza a adoção no Direito de Família?',
answers: [
    { text: 'Ato legal que concede a uma pessoa os direitos e deveres de um filho biológico', correct: true },
    { text: 'Ato que permite a guarda temporária de uma criança', correct: false },
    { text: 'Processo de reconhecimento de união estável', correct: false },
    { text: 'Transferência temporária de tutela', correct: false }
]
},
{
question: 'Qual é a finalidade da pensão alimentícia?',
answers: [
    { text: 'Garantir o sustento e bem-estar do dependente que não possui meios próprios de subsistência', correct: true },
    { text: 'Apenas permitir o pagamento de despesas médicas', correct: false },
    { text: 'Exclusivamente assegurar o pagamento de educação', correct: false },
    { text: 'Destinar recursos apenas para o lazer do dependente', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions7 = [
{
    question: 'Qual é o principal objetivo da Previdência Social no Brasil?',
answers: [
    { text: 'Proteger os trabalhadores e seus dependentes em casos de invalidez, idade avançada, e outras contingências', correct: true },
    { text: 'Aumentar a arrecadação tributária', correct: false },
    { text: 'Promover acesso à educação gratuita', correct: false },
    { text: 'Oferecer empréstimos aos segurados', correct: false }
]
},
{
question: 'Quem é considerado segurado obrigatório do Regime Geral de Previdência Social (RGPS)?',
answers: [
    { text: 'Empregados, trabalhadores avulsos e contribuintes individuais', correct: true },
    { text: 'Apenas servidores públicos', correct: false },
    { text: 'Pessoas sem nenhuma ocupação', correct: false },
    { text: 'Estudantes de instituições públicas', correct: false }
]
},
{
question: 'Qual é o tempo mínimo de contribuição exigido para aposentadoria por idade?',
answers: [
    { text: '15 anos de contribuição', correct: true },
    { text: '5 anos de contribuição', correct: false },
    { text: '10 anos de contribuição', correct: false },
    { text: '20 anos de contribuição', correct: false }
]
},
{
question: 'Quem são considerados dependentes preferenciais para receber pensão por morte?',
answers: [
    { text: 'Cônjuge, companheiro e filhos menores de 21 anos ou inválidos', correct: true },
    { text: 'Amigos e colegas de trabalho', correct: false },
    { text: 'Parentes distantes', correct: false },
    { text: 'Pessoas sem vínculo familiar', correct: false }
]
},
{
question: 'Qual é a idade mínima para aposentadoria por idade, segundo as regras atuais?',
answers: [
    { text: '65 anos para homens e 62 anos para mulheres', correct: true },
    { text: '60 anos para homens e 55 anos para mulheres', correct: false },
    { text: '70 anos para ambos os sexos', correct: false },
    { text: '58 anos para homens e 53 anos para mulheres', correct: false }
]
},
{
question: 'O que é o benefício assistencial (LOAS)?',
answers: [
    { text: 'Benefício pago a idosos e pessoas com deficiência de baixa renda, independentemente de contribuição', correct: true },
    { text: 'Aposentadoria especial para trabalhadores da saúde', correct: false },
    { text: 'Subsídio para estudantes de baixa renda', correct: false },
    { text: 'Pensão alimentícia para menores', correct: false }
]
},
{
question: 'Qual é o benefício concedido ao segurado que fica temporariamente incapaz de trabalhar devido a doença ou acidente?',
answers: [
    { text: 'Auxílio-doença', correct: true },
    { text: 'Aposentadoria por idade', correct: false },
    { text: 'Pensão por morte', correct: false },
    { text: 'Salário-família', correct: false }
]
},
{
question: 'Qual é a finalidade do salário-maternidade?',
answers: [
    { text: 'Garantir renda à segurada durante o período de licença-maternidade', correct: true },
    { text: 'Aumentar o tempo de licença para o pai', correct: false },
    { text: 'Oferecer subsídio para estudos', correct: false },
    { text: 'Ajudar na compra de imóveis', correct: false }
]
},
{
question: 'Quem tem direito à aposentadoria especial?',
answers: [
    { text: 'Trabalhadores que exercem atividades insalubres ou perigosas', correct: true },
    { text: 'Apenas funcionários públicos', correct: false },
    { text: 'Apenas aposentados por invalidez', correct: false },
    { text: 'Professores de escolas públicas', correct: false }
]
},
{
question: 'Qual é a carência para receber o auxílio-doença?',
answers: [
    { text: '12 meses de contribuição', correct: true },
    { text: '24 meses de contribuição', correct: false },
    { text: '6 meses de contribuição', correct: false },
    { text: '36 meses de contribuição', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions8 = [
{
    question: 'O que é o Código de Defesa do Consumidor (CDC)?',
answers: [
    { text: 'Conjunto de normas que protege os direitos do consumidor no Brasil', correct: true },
    { text: 'Conjunto de normas sobre contratos de trabalho', correct: false },
    { text: 'Código que regulamenta impostos sobre consumo', correct: false },
    { text: 'Lei que estabelece regras de licenciamento ambiental', correct: false }
]
},
{
question: 'O que é direito de arrependimento no Código de Defesa do Consumidor?',
answers: [
    { text: 'Direito de desistir da compra feita fora do estabelecimento comercial em até 7 dias', correct: true },
    { text: 'Direito de devolver o produto após 30 dias', correct: false },
    { text: 'Direito de comprar produtos sem pagar impostos', correct: false },
    { text: 'Direito de cancelar contratos de trabalho', correct: false }
]
},
{
question: 'Qual é a garantia mínima para produtos duráveis, segundo o CDC?',
answers: [
    { text: '90 dias', correct: true },
    { text: '30 dias', correct: false },
    { text: '1 ano', correct: false },
    { text: '6 meses', correct: false }
]
},
{
question: 'Qual é o prazo para reclamar de defeitos em produtos não duráveis?',
answers: [
    { text: '30 dias', correct: true },
    { text: '90 dias', correct: false },
    { text: '1 mês', correct: false },
    { text: '60 dias', correct: false }
]
},
{
question: 'O que significa prática abusiva no Direito do Consumidor?',
answers: [
    { text: 'Ação de fornecedores que impõe desvantagens excessivas ao consumidor', correct: true },
    { text: 'Promoções com descontos para todos os clientes', correct: false },
    { text: 'Oferecer brindes aos consumidores', correct: false },
    { text: 'Ação de consumidores que atrasam pagamentos', correct: false }
]
},
{
question: 'O consumidor tem direito a qual tratamento na publicidade?',
answers: [
    { text: 'Acesso a informações claras, precisas e verdadeiras sobre o produto ou serviço', correct: true },
    { text: 'Receber sempre descontos especiais', correct: false },
    { text: 'Ter o produto testado antes de comprar', correct: false },
    { text: 'Exclusão de todos os impostos sobre o produto', correct: false }
]
},
{
question: 'Quando o fornecedor é obrigado a reparar o produto sem custo para o consumidor?',
answers: [
    { text: 'Quando o produto apresenta vício ou defeito dentro do prazo de garantia', correct: true },
    { text: 'Quando o consumidor deseja trocar por outro modelo', correct: false },
    { text: 'Sempre que o consumidor pedir', correct: false },
    { text: 'Após 6 meses de uso do produto', correct: false }
]
},
{
question: 'O que é venda casada?',
answers: [
    { text: 'Exigir que o consumidor compre outro produto ou serviço como condição para adquirir o que deseja', correct: true },
    { text: 'Oferecer dois produtos pelo preço de um', correct: false },
    { text: 'Desconto por quantidade comprada', correct: false },
    { text: 'Parcelamento de compras no cartão de crédito', correct: false }
]
},
{
question: 'Qual é o papel do Procon?',
answers: [
    { text: 'Orientar e proteger o consumidor, além de fiscalizar e mediar conflitos com fornecedores', correct: true },
    { text: 'Aplicar impostos sobre produtos', correct: false },
    { text: 'Defender exclusivamente as empresas', correct: false },
    { text: 'Organizar promoções e eventos comerciais', correct: false }
]
},
{
question: 'O que é um contrato de adesão?',
answers: [
    { text: 'Contrato cujas cláusulas são pré-estabelecidas pelo fornecedor, sem negociação com o consumidor', correct: true },
    { text: 'Contrato redigido exclusivamente pelo consumidor', correct: false },
    { text: 'Contrato que permite alterações a qualquer momento', correct: false },
    { text: 'Contrato com descontos especiais para assinantes', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions9 = [
{
    question: 'Qual é a jornada máxima de trabalho permitida pela CLT no Brasil?',
answers: [
    { text: '44 horas semanais', correct: true },
    { text: '40 horas semanais', correct: false },
    { text: '36 horas semanais', correct: false },
    { text: '48 horas semanais', correct: false }
]
},
{
question: 'Quantos dias de férias o empregado tem direito após completar um ano de trabalho?',
answers: [
    { text: '30 dias', correct: true },
    { text: '15 dias', correct: false },
    { text: '45 dias', correct: false },
    { text: '20 dias', correct: false }
]
},
{
question: 'O que é aviso prévio no Direito Trabalhista?',
answers: [
    { text: 'Notificação dada por uma das partes para o término do contrato de trabalho', correct: true },
    { text: 'Período de adaptação para novo emprego', correct: false },
    { text: 'Contrato provisório de trabalho', correct: false },
    { text: 'Período obrigatório de férias', correct: false }
]
},
{
question: 'Qual é o prazo mínimo de duração do intervalo intrajornada para uma jornada superior a 6 horas?',
answers: [
    { text: '1 hora', correct: true },
    { text: '30 minutos', correct: false },
    { text: '2 horas', correct: false },
    { text: '15 minutos', correct: false }
]
},
{
question: 'O que é a rescisão indireta do contrato de trabalho?',
answers: [
    { text: 'Quando o empregado rescinde o contrato por justa causa do empregador', correct: true },
    { text: 'Quando o empregador rescinde o contrato sem justa causa', correct: false },
    { text: 'Quando o contrato é finalizado por acordo entre as partes', correct: false },
    { text: 'Quando o empregador demite o empregado por justa causa', correct: false }
]
},
{
question: 'O que caracteriza o trabalho intermitente?',
answers: [
    { text: 'Modalidade em que o trabalhador é convocado conforme a demanda, com alternância de períodos de prestação de serviço e inatividade', correct: true },
    { text: 'Trabalho com jornada fixa de 8 horas diárias', correct: false },
    { text: 'Contrato de trabalho exclusivamente para freelancers', correct: false },
    { text: 'Trabalho apenas para cargos de confiança', correct: false }
]
},
{
question: 'Qual é o percentual mínimo do adicional noturno para o trabalhador urbano?',
answers: [
    { text: '20%', correct: true },
    { text: '10%', correct: false },
    { text: '25%', correct: false },
    { text: '15%', correct: false }
]
},
{
question: 'Qual é o prazo para pagamento das verbas rescisórias em caso de demissão sem justa causa?',
answers: [
    { text: '10 dias após o término do contrato', correct: true },
    { text: '15 dias após o término do contrato', correct: false },
    { text: '30 dias após o término do contrato', correct: false },
    { text: '5 dias após o término do contrato', correct: false }
]
},
{
question: 'Em que circunstância o empregado tem direito ao seguro-desemprego?',
answers: [
    { text: 'Em caso de demissão sem justa causa', correct: true },
    { text: 'Sempre que for demitido', correct: false },
    { text: 'Apenas em caso de demissão com justa causa', correct: false },
    { text: 'Apenas após 5 anos de trabalho', correct: false }
]
},
{
question: 'O que é considerado justa causa para demissão?',
answers: [
    { text: 'Ato grave cometido pelo empregado, como desídia, insubordinação, ou ato de improbidade', correct: true },
    { text: 'Demissão sem motivo específico', correct: false },
    { text: 'Desempenho insatisfatório do empregado', correct: false },
    { text: 'Férias vencidas', correct: false }
]
}

    // Adicione mais perguntas aqui
];

const questions10 = [
{
    question: 'O que é a Lei Geral de Proteção de Dados Pessoais (LGPD)?',
answers: [
    { text: 'Lei que regula o uso, armazenamento e proteção de dados pessoais no Brasil', correct: true },
    { text: 'Lei que regula contratos de trabalho digitais', correct: false },
    { text: 'Lei que proíbe o uso de redes sociais no trabalho', correct: false },
    { text: 'Lei que regulamenta o comércio eletrônico', correct: false }
]
},
{
question: 'Qual é a principal função de um encarregado de proteção de dados (DPO) segundo a LGPD?',
answers: [
    { text: 'Supervisionar o tratamento de dados pessoais na empresa e atender aos titulares dos dados', correct: true },
    { text: 'Criar campanhas de marketing digital', correct: false },
    { text: 'Gerenciar as redes sociais da empresa', correct: false },
    { text: 'Controlar o acesso aos arquivos físicos', correct: false }
]
},
{
question: 'O que significa o direito ao esquecimento no contexto do Direito Digital?',
answers: [
    { text: 'Direito de solicitar a remoção de dados pessoais de plataformas digitais', correct: true },
    { text: 'Direito de acessar qualquer dado na internet', correct: false },
    { text: 'Direito de recuperar dados perdidos', correct: false },
    { text: 'Direito de receber todos os dados em mídia física', correct: false }
]
},
{
question: 'O que é considerado um dado pessoal sensível segundo a LGPD?',
answers: [
    { text: 'Informações sobre origem racial, religiosa, dados de saúde, e orientação sexual, entre outros', correct: true },
    { text: 'Dados de login em redes sociais', correct: false },
    { text: 'Endereço de e-mail', correct: false },
    { text: 'Número de telefone', correct: false }
]
},
{
question: 'Qual é o prazo que a LGPD estabelece para o controlador informar um vazamento de dados à Autoridade Nacional de Proteção de Dados (ANPD)?',
answers: [
    { text: 'Imediatamente, assim que tomar conhecimento', correct: true },
    { text: 'Em até 30 dias', correct: false },
    { text: 'Após resolver o vazamento', correct: false },
    { text: 'Não há obrigação de informar', correct: false }
]
},
{
question: 'O que é um ataque de phishing?',
answers: [
    { text: 'Técnica de fraude em que alguém tenta obter informações confidenciais se passando por outra pessoa ou entidade', correct: true },
    { text: 'Ataque que instala vírus no dispositivo', correct: false },
    { text: 'Invasão de sistemas físicos', correct: false },
    { text: 'Roubo de objetos físicos', correct: false }
]
},
{
question: 'Qual é o principal objetivo da Lei do Marco Civil da Internet?',
answers: [
    { text: 'Estabelecer direitos e deveres para o uso da internet no Brasil', correct: true },
    { text: 'Proibir acesso a conteúdos internacionais', correct: false },
    { text: 'Impedir o comércio eletrônico', correct: false },
    { text: 'Regulamentar o uso de redes sociais apenas', correct: false }
]
},
{
question: 'O que é um certificado digital?',
answers: [
    { text: 'Documento eletrônico que comprova a identidade de uma pessoa ou empresa no ambiente digital', correct: true },
    { text: 'Documento físico emitido pelo governo', correct: false },
    { text: 'Um comprovante de residência online', correct: false },
    { text: 'Um e-mail de confirmação de compra', correct: false }
]
},
{
question: 'No contexto da LGPD, o que significa anonimização de dados?',
answers: [
    { text: 'Processo de tornar os dados irreconhecíveis para evitar a identificação de pessoas', correct: true },
    { text: 'Armazenamento dos dados em servidores fora do Brasil', correct: false },
    { text: 'Criptografia dos dados com senhas fortes', correct: false },
    { text: 'Eliminação permanente de todos os dados', correct: false }
]
},
{
question: 'O que a LGPD determina sobre o consentimento para tratamento de dados pessoais?',
answers: [
    { text: 'O consentimento deve ser informado, explícito e concedido livremente pelo titular', correct: true },
    { text: 'O consentimento é implícito ao acessar um site', correct: false },
    { text: 'O consentimento é desnecessário para empresas grandes', correct: false },
    { text: 'O consentimento é concedido apenas uma vez, sem necessidade de atualização', correct: false }
]
}

    // Adicione mais perguntas aqui
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(questions) {
    currentQuestionIndex = 0;
    shuffleArray(questions); // Embaralha as perguntas do quiz atual
    questions.forEach(q => shuffleArray(q.answers)); // Embaralha as respostas de cada pergunta
    userAnswers.length = 0;
    showQuestion(questions);
}

function showQuestion(questions) {
    const questionObj = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="question">${questionObj.question}</div>
        ${questionObj.answers.map((answer, index) => `
            <div class="answer" onclick="checkAnswer(this, ${answer.correct}, '${answer.text}')">${answer.text}</div>
        `).join('')}
    `;
    document.querySelector('.next-button').disabled = true;
}

function checkAnswer(element, correct, answerText) {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.style.pointerEvents = 'none'); // Desabilita cliques
    element.classList.add(correct ? 'correct' : 'incorrect');
    userAnswers.push({ correct, answerText }); // Armazena a resposta
    document.querySelector('.next-button').disabled = false; // Habilita botão
}

function nextQuestion(questions) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions);
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    const correctAnswersCount = userAnswers.filter(answer => answer.correct).length;
    quizContainer.innerHTML = 
        `<h2>Resultados</h2>
        <p>Você acertou ${correctAnswersCount} de ${userAnswers.length} perguntas!</p>
        <ul>` +
        userAnswers.map((answer, index) => `
            <li>${index + 1}. ${answer.answerText} - ${answer.correct ? "Correto" : "Incorreto"}</li>
        `).join('') +
        `</ul>
        <button class="back-button" onclick="backToMenu()">Voltar ao Menu</button>`;

    // Verificar se todas as respostas estão corretas e jogar confete
    if (correctAnswersCount === userAnswers.length) {
        launchConfetti();
    }
}

function launchConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}


function backToMenu() {
    document.getElementById('gamesMenu').style.display = 'flex';
    document.getElementById('gameContent').innerHTML = '';
}
