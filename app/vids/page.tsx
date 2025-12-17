function Page() {
    return (  
        <div className="flex min-h-screen items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-3xl text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-semibold">Your downloads</h1>
                <p className="text-base md:text-lg text-gray-200">
                    Open the sidebar to see the videos you have fetched. Everything is saved there so you can access it on any screen size.
                </p>
            </div>
        </div>
    );
}

export default Page;