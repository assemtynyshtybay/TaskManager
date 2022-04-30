import { useEffect } from 'react';
import {CircularProgress  } from '@mui/material';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { UserTaskItems } from './UserTaskItem';
import { useUserTaskActions } from '../hooks/useUserTaskActions';


export function UserTaskList() {
    const {stages, loading} = useTypedSelector((state) => state.userTask)
    const {fetchUserTasks} = useUserTaskActions();
    useEffect(() => {
      fetchUserTasks()
    }, [fetchUserTasks])
    if (loading) {
        return (
          <CircularProgress />
        )
    }
    console.log(stages)
    return (
        <div style={{display: 'flex',justifyContent: 'space-between'}}>
            {stages.map((item,ind) => (
              <UserTaskItems key={ind} task={item}/>
            ))}
        </div>
    )
}
