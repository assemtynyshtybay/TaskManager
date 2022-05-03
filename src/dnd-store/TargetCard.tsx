import { itemTypes } from "../constants";
import {useDrop} from 'react-dnd';
import { FC } from 'react'
import { Card, CircularProgress  } from '@mui/material';
import { UserTask } from "../types/usersTasksTypes";

type TypeOfProps = {
  children: React.ReactNode;
}

export const CardTarget: FC<TypeOfProps> = (props: TypeOfProps) => {
  const { children } = props;
  const [{isOver}, drop] = useDrop({
    accept: itemTypes.CARD,
    drop: (type, monitor) => console.log('type',type),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <Card ref={drop} style={{height: '100px', backgroundColor: isOver ? 'red' : 'white'}}>
      {children}
    </Card>
  );
}