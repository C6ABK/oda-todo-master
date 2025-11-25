const TaskCard = () => {
    return (
        <div className="flex flex-col shadow-xl border-2 border-secondary rounded-lg p-2 hover:bg-gray-50">
            <div className="flex justify-between font-semibold">
                <div>Task Title</div>
                <div className="text-xs">ID: 123</div>
            </div>
            <div className=" flex justify-between text-xs">
                <div>Created On</div>
                <div>Review Date</div>
                <div>Due Date</div>
                <input type="checkbox" name="" id="" />
            </div>
        </div>
    )
}
export default TaskCard
