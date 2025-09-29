// /* eslint-disable react/no-unescaped-entities */


// export const Contact = () => {
//     return (
//         <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
//             <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
//                 <h1 className="text-center text-5xl md:text-7xl">
//                     <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch</span>
//                 </h1>
//                 <p className="text-center text-lg font-semibold text-gray-500">
//                 Want to chat? Click this button to send me an email at satyajit_jbl@yahoo.com, or feel free to call me at +8801819864771(WhatsApp). I'll respond as soon as possible!
//                 </p>
//                 <a href="mailto:satyajit_jbl@yahoo.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600">Contact Me</a>
//             </div>
//         </div>
//     )
// }

/* eslint-disable react/no-unescaped-entities */

export const Contact = () => {
    return (
        <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
                <h1 className="text-center font-bold whitespace-nowrap text-[clamp(2rem,5vw,5rem)]">
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                        Get in Touch
                    </span>
                </h1>
                {/* <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1> */}
                <p className="text-center text-lg font-semibold text-gray-500">
                    Want to chat? Click a button below to reach me via email, WhatsApp, or Discord. I'll respond as soon as possible!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    {/* Email */}
                    <a
                        href="mailto:satyajit_jbl@yahoo.com"
                        className="rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600"
                    >
                        Email Me
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/8801819864771"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-green-600 bg-green-500 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-600"
                    >
                        WhatsApp
                    </a>

                    {/* Discord */}
                    <a
                        href="https://discord.com/users/1256318855937134744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-purple-600 bg-purple-500 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600"
                    >
                        Discord
                    </a>
                </div>
            </div>
        </div>
    );
};
