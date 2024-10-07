// src/components/TaskList.tsx
import React from 'react';
import TaskItem from '../TaskItem';
import { ITask } from 'src/utils/types/commonTypes';

interface ITaskListProps {
    tasks: ITask[];
    onToggle: (id: number) => void;
}

const TaskList: React.FC<ITaskListProps> = (props) => {
    const {tasks, onToggle} = props
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TaskList;
