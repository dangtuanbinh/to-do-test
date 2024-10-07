// src/components/TaskForm.tsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface ITaskFormProps {
    onAddTask: (title: string, status: string) => void;
}

const TaskForm: React.FC<ITaskFormProps> = (props) => {
    const {onAddTask} = props

    const [title, setTitle] = useState('');

    const handleSubmit = () => {
        if (title.trim()) {
            onAddTask(title, 'incompleted');
            setTitle('');
        }
    };

    return (
        <div>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                style={{ width: 300, marginRight: 10 }}
            />
            <Button onClick={handleSubmit} type="primary" disabled={!title}>Add Task</Button>
        </div>
    );
};

export default TaskForm;
