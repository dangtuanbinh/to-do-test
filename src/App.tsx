// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Tabs, message } from 'antd';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks, addTask, toggleTaskCompletion } from './services/api';

const { TabPane } = Tabs;

const App: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: number; title: string; completed: boolean }[]>([]);
    const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

    useEffect(() => {
        const loadTasks = async () => {
            const initialTasks = await fetchTasks();
            setTasks(initialTasks);
        };
        loadTasks();
    }, []);

    const handleAddTask = async (title: string) => {
        try {
            const newTask = await addTask({ title });
            setTasks((prev) => [...prev, newTask]);
        } catch (error) {
            message.error('Failed to add task');
        }
    };

    const handleToggleTask = async (id: number, completed: boolean) => {
        try {
            await toggleTaskCompletion(id, completed);
            setTasks((prev) =>
                prev.map((task) => (task.id === id ? { ...task, completed } : task))
            );
        } catch (error) {
            message.error('Failed to update task');
        }
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'incomplete') return !task.completed;
        return true; // 'all'
    });

    return (
        <div style={{ padding: 20 }}>
            <TaskForm onAddTask={handleAddTask} />
            <Tabs defaultActiveKey="1" onChange={(key) => setFilter(key as 'all' | 'completed' | 'incomplete')}>
                <TabPane tab="All" key="all" />
                <TabPane tab="Completed" key="completed" />
                <TabPane tab="Incomplete" key="incomplete" />
            </Tabs>
            <TaskList tasks={filteredTasks} onToggle={handleToggleTask} />
        </div>
    );
};

export default App;
