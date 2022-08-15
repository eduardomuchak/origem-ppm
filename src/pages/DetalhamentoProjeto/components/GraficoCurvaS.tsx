import { Flex, Heading } from '@chakra-ui/react';
import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts';

function getNumeroMes(numeroDoMes: Number) {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  return months[Number(numeroDoMes) - 1];
}

function getNomesMeses(dataInicio: String, qtdMeses: Number) {
  const meses = [];
  let anoAtual = Number(dataInicio.split('/')[2]);
  let numeroMes = Number(dataInicio.split('/')[1]);

  for (let index = 0; index < qtdMeses; index++) {
    meses.push(`${getNumeroMes(numeroMes)}/${anoAtual}`);
    numeroMes++;
    if (numeroMes > 12) (numeroMes = 1) && anoAtual++;
  }
  return meses;
}

function GraficoCurvaS() {
  const totalBudget = 50000;
  const dataInicio = '01/10/2022';
  const qtdeMeses = 8;

  const totalNomeMeses = getNomesMeses(dataInicio, qtdeMeses);

  let porcentagem = 0;
  // let porcentagemRealizado = 0;

  const previsto = totalNomeMeses.map((mes) => {
    porcentagem += (totalBudget / qtdeMeses / totalBudget) * 100;
    return {
      mes,
      'Capex Previsto': porcentagem,
    };
  });

  const atual = [
    { mes: 'Out/2022', 'Capex Realizado': 6 },
    { mes: 'Nov/2022', 'Capex Realizado': 30 },
    { mes: 'Dez/2022', 'Capex Realizado': 35 },
    { mes: 'Jan/2023', 'Capex Realizado': 40 },
    { mes: 'Fev/2023', 'Capex Realizado': 55 },
    // { mes: 'Mar/2023', spent: 82 },
    // { mes: 'Abr/2023', spent: 90 },
    // { mes: 'Mai/2023', spent: 95 },
  ];

  const data = previsto.map((mes) => {
    const mesAtual = atual.find((mesAtual) => mesAtual.mes === mes.mes);
    return {
      ...mes,
      ...mesAtual,
    };
  });

  console.log(data);

  return (
    <>
      <Flex
        backgroundColor={'white'}
        borderRadius={4}
        mt={4}
        direction={'column'}
        p={5}
      >
        <Flex alignItems={'center'}>
          <Heading as="h4" size="md" ml={2}>
            Curva S
          </Heading>
        </Flex>

        <Flex px={4} pt={4} alignItems={'center'} justify={'center'}>
          <ResponsiveContainer
            width={'100%'}
            height={'80%'}
            minWidth={400}
            minHeight={300}
          >
            <LineChart
              data={data}
              // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Capex Realizado"
                stroke="#2E69FD"
                strokeWidth={4}
              />
              <Line
                type="monotone"
                dataKey="Capex Previsto"
                stroke="#93E01B"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </Flex>
      </Flex>
    </>
  );
}

export default GraficoCurvaS;
