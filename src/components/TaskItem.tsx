import { styled } from '@mui/material'
import { FC } from 'react'
import { UserTask } from '../types/usersTasksTypes'
import moment from 'moment';
// import { useDrag } from 'react-dnd';
// import { useDragDropManager } from 'react-dnd';

const Card = styled('div')`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`
const El = styled('div')`
  padding: 12px 16px;
  box-shadow: 0px 0px 0px 0.2px gray;
`
type Props = {
    item: UserTask;
}
export const TaskItem:FC<Props> = ({ item }) => {
  const date = new Date(item.createTimestamp);
  // const dragDropManager = useDragDropManager()
  // const [{ opacity }, dragRef] = useDrag(
  //   () => ({
  //     type,
  //     item: { item },
  //     collect: (monitor) => ({
  //       opacity: monitor.isDragging() ? 0.5 : 1
  //     })
  //   }),
  //   []
  // )
  return (
    <Card>
      <El>
        <button style={{width: '100px', backgroundColor: '#27AE60',padding: '3px', borderRadius: '8px'}} type="button">{item.taskTypeName}</button>
      </El>
      <El>{moment(date).format('d MMMM, в HH:MM')}</El>
      <El>{item.clientName}</El>
    </Card>
  )
}