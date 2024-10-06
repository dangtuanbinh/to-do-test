// src/components/TaskList.tsx
import React from 'react';
import TaskItem from '../TaskItem';

interface ITaskListProps {
    tasks: { id: number; title: string; completed: boolean }[];
    onToggle: (id: number, completed: boolean) => void;
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
