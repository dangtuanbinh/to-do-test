// src/components/TaskItem.tsx
import React from 'react';
import { Checkbox } from 'antd';

interface ITaskItemProps {
    task: { id: number; title: string; completed: boolean };
    onToggle: (id: number, completed: boolean) => void;
}

const TaskItem: React.FC<ITaskItemProps> = (props) => {
    const {task, onToggle} = props
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
                checked={task.completed}
                onChange={(e) => onToggle(task.id, e.target.checked)}
            />
            <span style={{ marginLeft: 10 }}>{task.title}</span>
        </div>
    );
};

export default TaskItem;
