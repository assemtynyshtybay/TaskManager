import { FC } from 'react';
import { Data } from '../types/usersTasksTypes'
import { TaskItem } from './TaskItem';

import { useDrop } from 'react-dnd';
import { CardTarget } from '../dnd-store/TargetCard';

type Props = {
    task: Data
}
// column
export const UserTaskItems:FC<Props> = ({ task }) => { 
  
  return (
      <div>
          {task.stageName} <button style={{borderRadius: '10px',padding: '0px', width: '19px', textAlign: 'center',fontSize: '12px', color: 'white', backgroundColor: 'blue'}}>{task.items.length}</button>
          <hr/>
          {task.items.map((item,index)=>(
            <div key={index}>
              <TaskItem item={item} status={task.stageName}/>
              <CardTarget>

              </CardTarget>
            </div>
            
          ))}
          {/* {canDrop ? 'Release to drop' : 'Drag a box here'} */}
      </div>
  )
}
