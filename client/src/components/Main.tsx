import { url } from "inspector";

function Main(): JSX.Element {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/hero.jpg')" }}
        className="h-screen flex flex-column items-center justify-center bg-no-repeat bg-cover bg-bottom"
      >
        <div>
          <h1 className="mb-5 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Transmission Line Design
          </h1>
          <a
            href="#select-design"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
          >
            Select Geometry
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div
        id="select-design"
        className="w-3/5 mt-5 mx-auto flex flex-column justify-center items-center"
      >
        <ul className="grid gap-6 w-full md:grid-cols-2">
          <li className="group min-h-[25vmin]">
            <a
              style={{ backgroundImage: "url('/66.jfif')" }}
              href="/tower/66"
              className="after:content-[''] relative after:absolute after:rounded-lg after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 inline-flex justify-between items-center min-h-full bg-cover bg-opacity-20 bg-center bg-no-repeat p-5 w-full text-white bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block z-10 relative">
                <div className="w-full text-lg font-semibold">
                  66 KV Single Circuit
                </div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6 group-hover:animate-vibrate  z-10 relative"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group min-h-[25vmin]">
            <a
              style={{ backgroundImage: "url('/66.jfif')" }}
              href="/tower/662"
              className="after:content-[''] relative after:absolute after:rounded-lg after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 inline-flex justify-between items-center min-h-full bg-cover bg-opacity-20 bg-center bg-no-repeat p-5 w-full text-white bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block z-10 relative">
                <div className="w-full text-lg font-semibold">
                  66 KV Double Circuit
                </div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6 group-hover:animate-vibrate z-10 relative"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group min-h-[25vmin]">
            <a
              style={{ backgroundImage: "url('/132.jfif')" }}
              href="/tower/220"
              className="after:content-[''] relative after:absolute after:rounded-lg after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 inline-flex justify-between items-center min-h-full bg-cover bg-opacity-20 bg-center bg-no-repeat p-5 w-full text-white bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block z-10 relative">
                <div className="w-full text-lg font-semibold">
                  220 KV Single Circuit
                </div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6 group-hover:animate-vibrate z-10 relative"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group min-h-[25vmin]">
            <a
              style={{ backgroundImage: "url('/400.jfif')" }}
              href="/tower/400"
              className="after:content-[''] relative after:absolute after:rounded-lg after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 inline-flex justify-between items-center min-h-full bg-cover bg-opacity-20 bg-center bg-no-repeat p-5 w-full text-white bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block z-10 relative">
                <div className="w-full text-lg font-semibold">
                  400 KV Single Circuit
                </div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6 group-hover:animate-vibrate z-10 relative"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="group min-h-[25vmin]">
            <a
              style={{ backgroundImage: "url('/500.jfif')" }}
              href="/tower/500"
              className="after:content-[''] relative after:absolute after:rounded-lg after:w-full after:h-full after:inset-0 after:bg-black after:bg-opacity-50 inline-flex justify-between items-center min-h-full bg-cover bg-opacity-20 bg-center bg-no-repeat p-5 w-full text-white bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block z-10 relative">
                <div className="w-full text-lg font-semibold">
                  500 KV Single Circuit
                </div>
              </div>
              <svg
                aria-hidden="true"
                className="ml-3 w-6 h-6 group-hover:animate-vibrate z-10 relative"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
