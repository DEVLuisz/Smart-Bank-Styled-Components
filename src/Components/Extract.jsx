import React from 'react';
import { Box, Button } from './Icon';
import {extratoLista} from "../info";
import Itens from './Itens';

const Extract = () => {
  return (
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => {
          return(
            <Itens key={id} type={type} from={from} value={value} date={date}/>
          )
        })
      }
      <Button>Ver Mais!</Button>
    </Box>
  )
}

export default Extract
