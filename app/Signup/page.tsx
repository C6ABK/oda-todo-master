const SignupPage = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-white mx-4 rounded-xl mt-4 pb-4 px-4 shadow-xl">
                <div className="text-center font-semibold text-gray-800 text-2xl py-12">
                    Sign Up
                </div>
                <form action="" className="space-y-4">
                    <input
                        type="text"
                        className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2 focus:border-primary focus:outline-none"
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2 focus:border-primary focus:outline-none"
                        placeholder="Last Name"
                    />

                    <input
                        type="text"
                        className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2 focus:border-primary focus:outline-none"
                        placeholder="Email Address"
                    />

                    <input
                        type="password"
                        className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2 focus:border-primary focus:outline-none"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        className="border-2 border-secondary rounded-md pl-2 text-md w-full py-2 focus:border-primary focus:outline-none"
                        placeholder="Confirm Password"
                    />

                    <button className="bg-primary text-white w-full rounded-xl py-4 hover:bg-secondary cursor-pointer">Create Account</button>
                </form>
            </div>
        </div>
    )
}
export default SignupPage
