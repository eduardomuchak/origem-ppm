import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import { Ring } from '@uiball/loaders';

import Sidebar from 'components/SideBar';

import { getInfoCampanha } from 'services/get/Infograficos';

import ColumnSPT from './Components/ColumnSPT';
import ExibirModal from './Components/ExibirModal';
import FiltrosModal from './Components/FiltrosModal';
import ModalBotaoCadastrar from './Components/ModalBotaoCadastrar';
import ModalCadastrarProjetoTipo from './Components/ModalCadastrarProjetoTipo';
import ModalCadastrarSonda from './Components/ModalCadastrarSonda';
import ModalCadastrarTarefa from './Components/ModalCadastrarTarefa';
import ModalCadastroAtividade from './Components/ModalCadastroAtividade';
import StatusProjeto from './Components/StatusProjeto';

export function Infographics() {
  const [loading, setLoading] = useState(true);
  const [campanhas, setCampanhas] = useState([]);
  // console.log(campanhas);
  const navigate = useNavigate();

  const handleGetCampanha = async () => {
    const response = await getInfoCampanha();
    setCampanhas(response.data);
    setLoading(false);
  };

  useEffect(() => {
    handleGetCampanha();
  }, []);

  const statusProjeto = [
    {
      status: 'Não Aplicável',
      color: '#F4DD06',
    },
    {
      status: 'Não Iniciado',
      color: '#FFB400',
    },
    {
      status: 'Concluído',
      color: '#059502',
    },
    {
      status: 'Em Andamento',
      color: '#0047BB',
    },
    {
      status: 'Atrasado',
      color: '#F40606',
    },
  ];

  return (
    <>
      <Sidebar>
        {!loading ? (
          <Stack spacing="8">
            <Flex w={'auto'} align="center" justify="center" bg={'#EDF2F7'}>
              <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '6' }}
                w={'100%'}
                bg={'white'}
                borderRadius={{ base: 'none', sm: 'xl' }}
              >
                <Flex justify={'space-between'} mb={5}>
                  <Heading as="h3" size="md" mb={3}>
                    Acompanhamento de poços
                  </Heading>
                  <Flex gap={4}>
                    <ExibirModal />
                    <FiltrosModal />
                  </Flex>
                </Flex>
                <Flex justify={'space-between'} gap={6} wrap={'wrap'} mb={4}>
                  <Flex gap={2}>
                    <ModalCadastrarSonda />
                    <ModalCadastrarProjetoTipo />
                    <ModalCadastroAtividade />
                    <ModalCadastrarTarefa />
                  </Flex>
                  <Flex gap={4} wrap={'wrap'}>
                    {statusProjeto.map((status, index) => (
                      <StatusProjeto
                        key={index}
                        status={status.status}
                        color={status.color}
                      />
                    ))}
                  </Flex>
                </Flex>
                <Flex align={'center'} justify={'center'}>
                  <Box
                    overflowX={{ base: 'scroll' }}
                    display={'flex'}
                    flexDirection={'row'}
                    gap={10}
                    py={4}
                  >
                    {campanhas.map((column, index) => (
                      <Flex
                        key={index}
                        direction={'column'}
                        gap={4}
                        align={'center'}
                        justify={'center'}
                        onClick={() => {
                          navigate('/atividade/:id');
                        }}
                      >
                        <ColumnSPT column={column} />
                        <ModalBotaoCadastrar />
                      </Flex>
                    ))}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Stack>
        ) : (
          <Flex display={'flex'} align={'center'} justify={'center'} h={'90vh'}>
            <Ring speed={2} lineWeight={5} color="blue" size={64} />
          </Flex>
        )}
      </Sidebar>
    </>
  );
}
