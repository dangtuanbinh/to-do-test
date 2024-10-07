// src/components/TaskItem.tsx
import React from 'react';
import { Checkbox } from 'antd';
import { ITask } from 'src/utils/types/commonTypes';

interface ITaskItemProps {
    task: ITask;
    onToggle: (id: number) => void;
}

const TaskItem: React.FC<ITaskItemProps> = (props) => {
    const {task, onToggle} = props
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                checked={task.status === 'completed'}
                onChange={(e) => onToggle(task.id)}
                disabled={task.status === 'completed'}
            />
            <span style={{ marginLeft: 10 }}>{task.title}</span>
        </div>
    );
};

export default TaskItem;
