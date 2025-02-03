import Footer from './components/footer/Footer';
import RotasAdmin from './Routes/routes';
import ReactGa from 'react-ga'

function initizeAnalytics(){
  ReactGa.initialize("UA-203590218-1")
  ReactGa.pageview(window.location.pathname)
}


function App() {

  initizeAnalytics()

  //console.log(valor)

  return (
    <>
      <RotasAdmin />
        {/*<div className='cont'>
          <div className="post">
            <p>
            Como Funciona a Bolsa Financeira Mundial? A Bolsa de Valores Mundial é um sistema global de compra e venda de ativos financeiros, como ações, títulos e commodities. As bolsas são locais onde investidores de todo o mundo podem negociar esses ativos com o objetivo de obter lucro. As principais bolsas de valores estão espalhadas pelo mundo, como a de Nova York (NYSE), a de Londres (LSE), a de Tóquio (TSE) e muitas outras.
            </p>
          </div>
        </div>*/}
        <div>
          <br /><br />
          <h5>Informações e dicas que podem te ajudar</h5>
        <main>
          <br />
          <div className="wrapper">
            <div className="quadrado">
              <b>Como Funciona a Bolsa Financeira Mundial?</b>
              <p>
                A Bolsa de Valores Mundial é um sistema global de compra e venda de ativos financeiros, como ações, títulos e commodities. As bolsas são locais onde investidores de todo o mundo podem negociar esses ativos com o objetivo de obter lucro. As principais bolsas de valores estão espalhadas pelo mundo, como a de Nova York (NYSE), a de Londres (LSE), a de Tóquio (TSE) e muitas outras.
              </p>
            </div>
            <div className="quadrado">
              <b>1. O que é uma Bolsa de Valores?</b>
              <p>
                Uma bolsa de valores é uma plataforma organizada onde compradores e vendedores podem negociar ativos financeiros. Esses ativos podem ser:
                Ações: Participações em empresas que podem gerar lucro para o investidor através de dividendos ou da valorização do preço da ação.
                Títulos: Empréstimos feitos por investidores para empresas ou governos, com a promessa de retorno com juros.
                Commodities: Produtos como ouro, petróleo, café, etc., que também são negociados em bolsas.
              </p>
              
            </div>
            <div className="quadrado">
              <b>2. Como as Bolsas de Valores Funcionam?</b>
              <p>
                As bolsas de valores funcionam como um mercado, onde a oferta e a demanda determinam o preço dos ativos. Quando mais pessoas querem comprar um ativo, o preço sobe. Se há mais vendedores do que compradores, o preço tende a cair.
                Existem corretores que ajudam os investidores a comprar e vender ações. Com o advento da tecnologia, as negociações podem ser feitas online, permitindo que investidores de todo o mundo participem da bolsa, tornando-a ainda mais globalizada.
              </p>
            </div>
            <div className="quadrado">
              <b>3. O Impacto das Bolsas de Valores no Mundo</b>
              <p>
                As bolsas de valores são essenciais para a economia global por vários motivos:
                Captação de recursos: Empresas podem captar dinheiro para financiar seus projetos e expansão.
                Indicadores econômicos: Os índices da bolsa, como o Dow Jones ou o Ibovespa, refletem o desempenho geral da economia.
                Investimentos e Aposentadoria: Muitos fundos de investimento, incluindo fundos de pensão, investem na bolsa, o que afeta diretamente a aposentadoria de milhões de pessoas.
              </p>
            </div>
            <div className="quadrado">
              <b>4. Riscos e Oportunidades</b>
              <p>
                Investir na bolsa pode ser rentável, mas também envolve riscos. A volatilidade dos mercados financeiros pode gerar grandes perdas, mas também pode resultar em lucros significativos. Por isso, é essencial para o investidor entender as flutuações do mercado, estudar as empresas e as tendências econômicas antes de tomar decisões.
              </p>
            </div>
            <div className="quadrado">
              <b>5. A Globalização das Bolsas</b>
              <p>
                Com a globalização, as bolsas de valores de diferentes países estão cada vez mais conectadas. O mercado financeiro global se inter-relaciona, e as decisões de uma bolsa podem afetar outras. Por exemplo, uma grande queda na Bolsa de Nova York pode impactar a Bolsa de Tóquio ou até a de São Paulo.
              </p>
            </div>

            <div className="quadrado">
              <b>Investimentos para 2025: Tendências e Oportunidades para o Mercado Global</b>
              <p>
                Data: Fevereiro de 2025
                Com o início de 2025, investidores de todo o mundo estão atentos às tendências que podem moldar o mercado financeiro neste ano. Após um 2024 marcado pela volatilidade econômica e pela recuperação de algumas economias, as expectativas para o futuro são otimistas, com foco em novas tecnologias, sustentabilidade e mercados emergentes. Aqui estão algumas das principais oportunidades de investimento para 2025:              </p>
            </div>
            <div className="quadrado">
              <b>1. Tecnologia e Inteligência Artificial (IA)</b>
              <p>
                O setor de tecnologia continua a dominar os investimentos, com destaque para as empresas que estão na vanguarda da inteligência artificial e automação. A IA deve continuar a transformar indústrias inteiras, desde a saúde até o setor financeiro. Startups de IA, assim como grandes empresas de tecnologia como Google, Microsoft e OpenAI, são vistas como oportunidades promissoras.
                Oportunidade: Investir em empresas que desenvolvem soluções de IA, como machine learning, processamento de linguagem natural, e sistemas autônomos, deve ser um dos focos dos investidores em 2025. Além disso, fundos de índice (ETFs) focados em tecnologia e IA também podem ser uma alternativa segura e diversificada.
              </p>
            </div>
            <div className="quadrado">
              <b>2. Investimentos Sustentáveis e ESG</b>
              <p>
                O movimento em torno de investimentos sustentáveis e práticas empresariais com foco em ESG (Environmental, Social, and Governance) continua a ganhar força. Empresas que adotam políticas de sustentabilidade, governança responsável e têm forte compromisso com as questões sociais estão atraindo a atenção de grandes investidores institucionais e fundos de pensão.
                Oportunidade: A popularidade dos "green bonds" (títulos verdes) e fundos que priorizam investimentos em empresas com boas práticas ESG deve crescer, com investidores cada vez mais exigentes quanto ao impacto ambiental e social das suas carteiras.
              </p>
            </div>
            <div className="quadrado">
              <b>3. Mercados Emergentes</b>
              <p>
                Embora os mercados desenvolvidos, como os Estados Unidos e Europa, continuem a ser um ponto de interesse para investidores, as economias emergentes estão se tornando cada vez mais atraentes. Países como Índia, Vietnã e alguns da África têm experimentado crescimento econômico robusto, o que pode resultar em boas oportunidades para quem deseja expandir suas carteiras.
                Oportunidade: Investir em ações e ETFs de mercados emergentes, especialmente em setores como tecnologia, infraestrutura e consumo, deve oferecer potencial de crescimento significativo em 2025.
              </p>
            </div>
            <div className="quadrado">
              <b>4. Criptomoedas e Blockchain</b>
              <p>
                Apesar da volatilidade, o setor de criptomoedas e blockchain continua a evoluir. A regulamentação mais clara, especialmente em países como os Estados Unidos e a União Europeia, pode trazer mais segurança ao mercado, abrindo portas para uma adoção mais ampla. Além disso, o desenvolvimento de soluções descentralizadas e a crescente aceitação do Bitcoin e outras criptos como ativos de reserva são tendências que não devem ser ignoradas.
                Oportunidade: Investir em criptomoedas mais estabelecidas, como o Bitcoin e o Ethereum, e acompanhar a evolução de novos projetos no espaço DeFi (finanças descentralizadas) e Web3 pode ser uma estratégia interessante em 2025.             
              </p>
            </div>
            <div className="quadrado">
              <b>5. Imóveis e Mercado de Aluguéis</b>
              <p>
                O setor imobiliário, especialmente o mercado de aluguéis, continua atraente em várias partes do mundo, com crescente demanda por moradias devido ao aumento da urbanização e mudanças nos padrões de trabalho. Em muitas regiões, o mercado de imóveis comerciais também está se adaptando, com o crescimento de espaços de coworking e escritórios flexíveis.
                Oportunidade: Investir em imóveis para aluguel, tanto residenciais quanto comerciais, pode ser uma estratégia sólida, especialmente em mercados em crescimento. Além disso, os fundos imobiliários (REITs) são uma forma eficiente de exposição a esse setor sem a necessidade de adquirir propriedades diretamente.
              </p>
            </div>
          </div>
        </main>
        </div>
      <Footer />
    </>
  );
}

export default App;
