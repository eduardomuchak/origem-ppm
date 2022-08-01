import {
  Box,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';

export default function RealizadoComponent() {
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
          <Box
            w={300}
            sx={{ display: 'flex' }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text
                mb={1}
                sx={{ fontSize: 16, fontWeight: '600', alignSelf: 'center' }}
                color="#000000"
              >
                Realizado
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
            <Box
              justifyContent="center"
              alignItems="center"
              bg={'#2E69FD'}
              sx={{ height: '100%', alignItems: 'center', borderRadius: '2px' }}
            >
              <Text
                p={1}
                sx={{ fontSize: 22, fontWeight: '600', alignSelf: 'center' }}
                color="#ffffff"
              >
                50%
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}