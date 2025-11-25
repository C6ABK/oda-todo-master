const DevListPage = () => {
    return (
        <div className="container w-full">
            <div className="bg-white mt-4 max-w-xl mx-auto p-4 rounded-xl shadow-xl">
                <div className="text-3xl text-gray-800 font-bold">
                    Dev Tasks
                </div>
                <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Custom colours schema and interface</li>
                    <li>Review and focus function</li>
                    <li>Subtasks and notes</li>
                </ul>
            </div>
        </div>
    )
}
export default DevListPage
