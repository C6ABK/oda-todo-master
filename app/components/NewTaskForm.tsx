const NewTaskForm = () => {
    return (
        <div className="w-full">
            
            <form action="" className="flex flex-col w-full mt-4">
                <input
                    type="text"
                    className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2"
                    placeholder="Task Title"
                />
                <div className="mt-4 flex flex-col lg:flex-row justify-between">
                    <div className="flex justify-between lg:w-3/4 text-xs md:text-sm pb-4 lg:pb-0">
                        <div>
                            Review Date:
                            <input
                                type="date"
                                className="ml-2 border-2 border-secondary rounded-md pl-2 py-2"
                            />
                        </div>
                        <div>
                            Due Date:
                            <input
                                type="date"
                                className="ml-2 border-2 border-secondary rounded-md pl-2 py-2"
                            />
                        </div>
                    </div>
                    <button className="bg-primary text-white font-semibold rounded-md py-2 lg:py-0 px-0 lg:px-8 hover:bg-secondary cursor-pointer">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}
export default NewTaskForm
