import { AiOutlineRise } from 'react-icons/ai';

import {
  Box,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

export default function TotalOrcamentosComponent() {
  return (
    <Stack spacing="8">
      <Flex
        w={useBreakpointValue({ base: '100%', md: 'fit-content' })}
        align="center"
        justify="center"
        bg={useBreakpointValue({ base: 'white', sm: '#EDF2F7' })}
      >
        <Box
          py={{ base: '0', sm: '4' }}
          px={{ base: '0', sm: '4' }}
          w="fit-content"
          bg={useBreakpointValue({ base: 'transparent', sm: 'white' })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Box w={300} sx={{ display: 'flex' }} justifyContent="space-between">
            <Box>
              <Text
                mb={1}
                sx={{ fontSize: 16, fontWeight: '600', alignSelf: 'center' }}
                color="#000000"
              >
                Total do Orçamento
              </Text>
              <Box sx={{ display: 'flex' }}>
                <Text
                  sx={{ fontSize: 12, fontWeight: '600', alignSelf: 'center' }}
                  color="#000000"
                >
                  R$
                </Text>
                <Text
                  ml={2}
                  sx={{ fontSize: 18, fontWeight: '600', alignSelf: 'center' }}
                  color="#000000"
                >
                  100.000.000
                </Text>
              </Box>
            </Box>
            <Box sx={{ height: '100%', alignItems: 'center' }}>
              <AiOutlineRise color="#93E01B" size={50} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
