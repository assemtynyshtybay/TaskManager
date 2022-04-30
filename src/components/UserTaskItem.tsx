import { FC } from 'react';
import { Data } from '../types/usersTasksTypes'
import { TaskItem } from './TaskItem';


type Props = {
    task: Data
}
export const UserTaskItems:FC<Props> = ({ task }) => {
  
  return (
      <div>
          {task.stageName} <button style={{borderRadius: '10px',padding: '0px', width: '19px', textAlign: 'center',fontSize: '12px', color: 'white', backgroundColor: 'blue'}}>{task.items.length}</button>
          <hr/>
          {task.items.map((item,index)=>(
            <TaskItem key={index} item={item} />
          ))}
      </div>
  )
}
