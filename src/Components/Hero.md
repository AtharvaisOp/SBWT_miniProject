import '../App.css';
export default function Hero() {
    return (
        <>
       <section
              className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center py-20 px-4"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg")',
                backgroundSize: 'cover', // Ensures the image covers the entire container
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                backgroundPosition: 'center', // Centers the background image   
              }}
            >
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">Calculate Your Carbon Footprint</h1>
                <p className="mt-4 text-lg font-normal leading-relaxed text-gray-300">
                  Understand your environmental impact and take steps towards a sustainable future with EcoFootprint.
                </p>
                <button onClick={() => setIsModalOpen(true)} className="mt-8 flex min-w-[84px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-green-500 text-white text-base font-bold shadow-lg hover:bg-green-500/90 transition-all transform hover:scale-105">
                  <span className="truncate">Start Calculating</span>
                </button>
              </div>
            </section>
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center">
                  <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Why EcoFootprint?</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
                    Our app provides a comprehensive and user-friendly way to estimate your carbon footprint, offering personalized insights and actionable steps to reduce your impact.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-green-500/20 dark:border-green-500/30 p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 dark:bg-green-500/20 text-green-500">
                      <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M198.1,62.6a76,76,0,0,0-140.2,0A72.27,72.27,0,0,0,16,127.8C15.89,166.62,47.36,199,86.14,200A71.68,71.68,0,0,0,120,192.49V232a8,8,0,0,0,16,0V192.49A71.45,71.45,0,0,0,168,200l1.86,0c38.78-1,70.25-33.36,70.14-72.18A72.26,72.26,0,0,0,198.1,62.6ZM169.45,184a55.61,55.61,0,0,1-32.52-9.4q-.47-.3-.93-.57V132.94l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94V174q-.47.27-.93.57A55.7,55.7,0,0,1,86.55,184a56,56,0,0,1-22-106.86,15.9,15.9,0,0,0,8.05-8.33,60,60,0,0,1,110.7,0,15.9,15.9,0,0,0,8.05,8.33,56,56,0,0,1-22,106.86Z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Accurate Calculation</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Utilize advanced algorithms to accurately estimate your carbon footprint based on your lifestyle.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-green-500/20 dark:border-green-500/30 p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 dark:bg-green-500/20 text-green-500">
                     <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Personalized Insights</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive tailored recommendations and insights to help you make informed decisions.</p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-gray-900 border border-green-500/20 dark:border-green-500/30 p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 dark:bg-green-500/20 text-green-500">
                      <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Community Support</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Join a community of like-minded individuals committed to reducing their environmental impact.</p>
                  </div>
                </div>
              </div>
            </section>
            </>
    );
}