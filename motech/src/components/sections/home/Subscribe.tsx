"use client"
export default function Subscribe(){
    return(
        <>
        <section className="w-full flex items-center justify-center flex-col gap-2 py-10 bg-white">
            <div className="flex items justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            </div>
            <div className="w-full text-center">
                <h1 className="text-4xl font-extrabold text-black capitalize">Stay connected</h1>
                <p className="text-xl text-black text-center max-w-5xl mx-auto">Subscribe to our newsletter and be the first to know about new programs, events, research breakthroughs, and campus updates.</p>
            </div>
            <form action="" className="w-full flex items-center justify-center gap-4">
                <input type="text" className="text-black p-3 rounded-md border w-[30%]" placeholder="Email" />
                <button className="bg-red-600 p-3 text-white rounded-md font-extrabold px-6">Subscribe</button>
            </form>
        </section>
        </>
    )
}