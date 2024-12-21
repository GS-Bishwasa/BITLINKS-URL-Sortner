import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 h-[60vh]">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center bg-purple-100  text-center">
          <h1 className="text-4xl font-bold text-black">
            The Best URL Sortner In The Market 😅
          </h1>
          <p className="text-xl text-gray-900">
            We are the most straightforward URL shortener in the world!
          </p>

         <div>
         <Link href={"/sorten"}><button type="button" className="my-2 mx-3 md:m-2 shadow-lg focus:outline-none text-white bg-purple-700 hover:bg-blue-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-blue-400 dark:focus:ring-purple-900">Try Now</button></Link>


<Link href={"https://github.com/GS-Bishwasa?tab=repositories"}><button type="button" className="my-2 mx-3 md:m-2 shadow-lg focus:outline-none text-white bg-purple-700 hover:bg-blue-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-blue-400 dark:focus:ring-purple-900">github</button></Link>
         </div>

        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center bg-purple-100  relative">
        <Image
  src="/work.jpg"
  fill={true}
  alt="An Office Vector"
  className="rounded-lg mix-blend-darken"
  priority // Ensures the image loads early for better performance
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" // Define image sizes based on viewport width
/>

        </div>
      </section>
    </>
  );
}
