// src/App.tsx
import React, { useEffect, useState } from 'react';
import { Tabs, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { taskApis, useAddTaskMutation, useGetTaskListQuery, useUpdateTaskStatusMutation } from './store/components/taskList/taskApis';
import { ITask } from './utils/types/commonTypes';
import { getTaskList } from './store/rootSelector';

const { TabPane } = Tabs;

const App: React.FC = () => {
    const dispatch = useDispatch();

    const { data: tasks = [], error, isLoading } = useGetTaskListQuery(); 
    const taskList = useSelector(getTaskList);
    const [addTaskMutation] = useAddTaskMutation();
    const [updateTaskStatus] = useUpdateTaskStatusMutation();

    const [filter, setFilter] = useState<'all' | 'completed' | 'incompleted'>('all');

    const handleAddTask = async (title: string, status: string) => {
        try {
            const newTask = await addTaskMutation({ title, status }).unwrap();
            taskList.push(newTask);
            message.success('Task added successfully'); 
        } catch (error) {
            console.error("Failed create task:", error);
        }
    };

    const handleCompleteTask = async (taskId: number) => {
        try {
            const updatedTask = await updateTaskStatus({ id: taskId, status: "completed" }).unwrap();

            const taskToUpdate = taskList.find((task: ITask) => task.id === taskId);
            if (taskToUpdate) {
                taskToUpdate.status = updatedTask.status; 
                message.success("Task updated successfully!");
            }
        } catch (error) {
            console.error("Failed to update task status:", error);  
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching tasks</div>; 
    }

    const filteredTasks = taskList.filter((task: ITask) => {
        if (filter === 'completed') return task.status === 'completed';
        if (filter === 'incompleted') return task.status === 'incompleted';
        return true; // 'all'
    });

    return (
        <div style={{ padding: 20 }}>
            <TaskForm onAddTask={handleAddTask} />
            <Tabs defaultActiveKey="1" onChange={(key) => setFilter(key as 'all' | 'completed' | 'incompleted')}>
                <TabPane tab="All" key="all" />
                <TabPane tab="Completed" key="completed" />
                <TabPane tab="Incompleted" key="incompleted" />
            </Tabs>
            <TaskList tasks={filteredTasks} onToggle={handleCompleteTask} />
        </div>
    );
};

export default App;
