import { useEffect, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

import {
  Box,
  Text,
  Select,
  FormControl,
  Flex,
  IconButton,
  FormLabel,
} from '@chakra-ui/react';

interface Props {
  index: number;
  item: any;
}

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function ListDnD() {
  const [list, setList] = useState<any>([]);
  const [render, setRender] = useState<any>([]);
  const [id, setId] = useState<any>('listID');

  useEffect(() => {
    setList([
      {
        id: 1,
      },
      {
        id: 2,
      },
    ]);
    const now = Date.now();
    const newId = id + '-' + now.toLocaleString();
    // console.log('newId', newId);
    setId(newId);
  }, []);

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newList = reorder(
      list,
      result.source.index,
      result.destination.index,
    );
    // console.log('newList', newList);
    setList(newList);
  }

  const remove = (index: number) => {
    const newList = list;
    newList.splice(index, 1);
    setList(newList);
    setRender(!render);
  };

  const add = () => {
    const newList = list;
    newList.push({ id: list.length + 1 });
    setList(newList);
    setRender(!render);
  };

  // const enableEdit = (index: number) => {
  //   setRender(!render);
  // };

  const ListItem = ({ item, index }: Props) => (
    <Draggable draggableId={`list${index}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            w="100%"
            bg={'#f5f5f5'}
            px={5}
            py={2}
            borderRadius={'60px'}
            mb={2}
          >
            <Flex flexDirection={'row'} gap={4}>
              <Flex align={'center'} justify={'center'} gap={3}>
                <GiHamburgerMenu color="#2E69FD" size={16} />
                <Text sx={{ fontSize: 16, fontWeight: '600' }}>{item.id}</Text>
              </Flex>
              <FormControl>
                <Text
                  sx={{ fontSize: 12, fontWeight: '600', color: '#d6d4d4' }}
                >
                  BASE
                </Text>
                <Select
                  id="atividades[0].base"
                  name="atividades[0].base"
                  placeholder="Selecione"
                  bg={'#fff'}
                  // value={registerForm.values.atividades[index].base}
                  // onChange={(event) => handleChange(event)}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl>
                <Text
                  sx={{ fontSize: 12, fontWeight: '600', color: '#d6d4d4' }}
                >
                  ATIVIDADE
                </Text>
                <Select
                  id="atividade"
                  name="atividade"
                  placeholder="Selecione"
                  bg={'#fff'}
                  // value={registerForm.values.atividades[index].tarefa}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              <FormControl>
                <Text
                  sx={{ fontSize: 12, fontWeight: '600', color: '#d6d4d4' }}
                >
                  PRECEDENTES
                </Text>
                <Select
                  id="precedente"
                  name="precedente"
                  placeholder="Selecione"
                  bg={'#fff'}
                  // value={registerForm.values.atividades[index].precedente}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>

              <FormControl>
                <Text
                  sx={{ fontSize: 12, fontWeight: '600', color: '#d6d4d4' }}
                >
                  DIAS
                </Text>
                <Select
                  id="dias"
                  name="dias"
                  placeholder="Selecione"
                  bg={'#fff'}
                  // value={registerForm.values.atividades[index].dias}
                  // onChange={registerForm.handleChange}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
              {/* <Flex
                p={1}
                align={'center'}
                justify={'center'}
                _hover={{ cursor: 'pointer' }}
              >
                <FiEdit
                  onClick={() => enableEdit(index)}
                  color="#2E69FD"
                  size={16}
                />
              </Flex> */}
              <Flex
                p={1}
                align={'center'}
                justify={'center'}
                _hover={{ cursor: 'pointer' }}
              >
                <FiTrash
                  onClick={() => remove(index)}
                  color="#F94144"
                  size={16}
                />
              </Flex>
            </Flex>
          </Box>
        </div>
      )}
    </Draggable>
  );

  return (
    <>
      <FormLabel mb={0}>ATIVIDADES</FormLabel>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={id}>
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {list.map((item: any, index: any) => (
                <ListItem item={item} index={index} key={`list${index}`} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Flex
        w="100%"
        border={'2px'}
        borderStyle={'dashed'}
        borderRadius={'50px'}
        borderColor={'#D6D4D4'}
        align={'center'}
        justify={'center'}
        p={2}
        _hover={{
          cursor: 'pointer',
          borderColor: '#D6D4D4',
        }}
        onClick={() => add()}
      >
        <IconButton
          icon={<FiPlus />}
          aria-label={'Plus sign icon'}
          isRound={true}
          color={'white'}
          backgroundColor={'#D6D4D4'}
          size={'sm'}
          _hover={{
            backgroundColor: 'origem.500',
          }}
          transition={'all 0.4s'}
        />
      </Flex>
    </>
  );
}
