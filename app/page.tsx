"use client"

import { useState } from "react"
import NewTaskForm from "./components/NewTaskForm"

const HomePage = () => {
    const [newTaskOpen, setNewTaskOpen] = useState(false)

    return (
        <div className="container w-full md:w-4xl mx-auto p-4 grid grid-cols-0 md:grid-cols-12">
            <div className="space-y-4 col-span-1 md:col-span-11">
                {!newTaskOpen && (
                    <button
                        className="md:hidden bg-tertiary shadow-xl text-sm rounded-xl w-full p-2 cursor-pointer font-semibold text-gray-800"
                        onClick={() => setNewTaskOpen(!newTaskOpen)}
                    >
                        Create New Task
                    </button>
                )}

                {newTaskOpen && (
                    <div className="flex">
                        <div className="bg-white shadow-xl rounded-xl w-full p-4 flex flex-col">
                            <div className="flex justify-between">
                                <div className="font-semibold text-xl text-gray-800">
                                    Create New Task
                                </div>
                                <div
                                    className="md:hidden font-semibold text-red-500 text-xl cursor-pointer ml-4"
                                    onClick={() => setNewTaskOpen(!newTaskOpen)}
                                >
                                    x
                                </div>
                            </div>

                            <div className="flex-1">
                                <NewTaskForm />
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white shadow-xl rounded-xl w-full p-4">
                    <div className="font-semibold text-xl text-gray-800">
                        Current Tasks
                    </div>
                </div>
            </div>
            <div className="col-span-1 md:col-span-1 md:pl-4">
                <button
                    className="hidden md:block bg-tertiary font-semibold shadow-xl rounded-xl w-full px-4 h-16 cursor-pointer text-gray-700 hover:text-tertiary hover:bg-secondary"
                    onClick={() => setNewTaskOpen(!newTaskOpen)}
                >
                    {newTaskOpen && <span className="text-xl">&#10005;</span>}
                    {!newTaskOpen && <span className="text-3xl">&#43;</span>}
                </button>
            </div>
        </div>
    )
}

export default HomePage
