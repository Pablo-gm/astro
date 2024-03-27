import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-32 mx-auto container">
        <div className="h4 text-3xl mt-4 font-semibold">Micro design system</div>
        <h1>A H1 title</h1>
        <button className="btn btn-primary">Button primary</button>
        <button className="btn" disabled>Button disabled</button>

        <div className="mt-3">
          <input type="text" placeholder="email" />
        </div>
        <input type="text"  disabled placeholder="email"  />

        <div>
          <input type="date"   />
        </div>

        <div>
          <label><input type="checkbox" /> Checkbox</label>
        </div>

        <div className="flex items-baseline w-32">
          <input type="checkbox" /> <label> Checkbox with flex</label>
        </div>

        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <div className="h4 text-3xl mt-4 font-semibold">Text basics</div>

        <h1 className="text-3xl font-bold underline text-lime-800 bg-violet-200 ">
          Hello world!
        </h1>
        <p className="text-custom text-sm md:text-lg lg:text-3xl">Lorem, ipsum.</p>
        <p className="text-[#22A29F] p-1">Texto con valor</p>
        <p className="text-base decoration-2 decoration-wavy underline capitalize">Texto base</p>

        <div className="">
          <p className="bg-blue-200 min-w-min">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="bg-yellow-200 max-w-max">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className="text-base decoration-2 decoration-wavy underline capitalize">Texto base</p>

        <div className="mt-3 p-2 bg-white flex">
          <div className="w-16 h-16 bg-red-400"></div>
          <div className="w-16 h-16 bg-orange-400"></div>
        </div>

        <div className="mt-3 p-2 bg-white flex">
          <div className="w-1/4 h-16 bg-green-400"></div>
          <div className="w-1/4 h-16 bg-violet-400"></div>
        </div>

        <div className="mt-3 py-2 bg-amber-100 flex space-x-2">
          <div className="w-4 h-4 bg-blue-400"></div>
          <div className="w-4 h-4 bg-pink-400"></div>
          <div className="w-4 h-4 bg-red-400"></div>
          <div className="w-4 h-4 bg-yellow-400"></div>
        </div>

        <div className="mt-3 p-tiny bg-neutral-400 flex">
          <div className="w-2 h-2 bg-rose-400"></div>
          <div className="w-2 h-2 bg-purple-400"></div>
        </div>

        <h3 className="h4 ">Flex</h3>
        <div className="p-3 bg-neutral-200">
          <div className="">Header</div>
          <div className="flex flex-col md:flex-row">
            <div className="basis-1/4 bg-red-300">Main content</div>
            <div className="basis-3/4 bg-orange-200">Sidebar</div>
            <div className="basis-1/4 bg-orange-400">Menu</div>
          </div>
        </div>

        <div className="flex flex-nowrap w-20 space-x-2 bg-lime-100 p-3 overscroll-x-auto">
          <div className="bg-blue-300 w-8">01</div>
          <div className="bg-blue-300 w-8">02</div>
          <div className="bg-blue-300 w-8">03</div>
        </div>

        <div className="flex flex-wrap w-20 space-x-2 bg-lime-100 p-3 mt-3 overscroll-x-auto">
          <div className="bg-blue-300 w-8">01</div>
          <div className="bg-blue-300 w-8">02</div>
          <div className="bg-blue-300 w-8">03</div>
        </div>

        <div className="flex flex-wrap w-36  bg-green-300 p-3 mt-3 overscroll-x-auto items-baseline">
          <div className="bg-lime-200 w-10 pt-2 pb-6">01</div>
          <div className="bg-lime-400 w-10 pt-8 pb-12">02</div>
          <div className="bg-lime-600 w-10 pt-12 pb-4">03</div>
        </div>

        <div className="h4">Grids</div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3">
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50">1</div>
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50">2</div>
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50 col-span-2">3 double span</div>
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50">4</div>
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50">5</div>
          <div className="bg-sky-500 p-3 rounded-lg text-center text-yellow-50">6</div> 
        </div>

        <div className="grid grid-cols-6 gap-4 mt-5">
          <div className="col-start-2 col-span-4 text-yellow-50 bg-orange-700">01</div>
          <div className="col-start-1 col-end-3 text-yellow-50 bg-orange-700">02</div>
          <div className="col-end-7 col-span-2 text-yellow-50 bg-orange-700">03</div>
          <div className="col-start-1 col-end-7 text-yellow-50 bg-orange-700">04</div>
        </div>

        <div className="grid grid-rows-4 grid-flow-col gap-4 mt-5">
          <div className="bg-red-500 text-center text-slate-100">01</div>
          <div className="bg-red-500 text-center text-slate-100">02</div>
          <div className="bg-red-500 text-center text-slate-100">03</div>
          <div className="bg-red-500 text-center text-slate-100">04</div>
          <div className="bg-red-500 text-center text-slate-100">05</div>
          <div className="bg-red-500 text-center text-slate-100">06</div>
          <div className="bg-red-500 text-center text-slate-100">07</div>
          <div className="bg-red-500 text-center text-slate-100">08</div>
          <div className="bg-red-500 text-center text-slate-100">09</div>
        </div>

        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
          <div className="row-span-3 text-center text-slate-100 bg-violet-700">01</div>
          <div className="col-span-2 text-slate-100 bg-violet-700">02</div>
          <div className="row-span-2 col-span-2 text-slate-100 bg-violet-700">03</div>
        </div>

        <div className="h4 text-3xl mt-4 font-semibold">Layout</div>
        <div className="container px-2">
          <div className="relative w-32 h-32 p-8 bg-red-500 rounded-lg mr-4 inline-block">
            <div className="absolute w-24 h-24 bg-green-500 rounded-lg inset-2"></div>
          </div>
          <div className="relative w-32 h-32 p-8 bg-yellow-500 rounded-lg inline-block">
            <div className="absolute w-24 h-24 bg-pink-500 rounded-lg -top-2 -left-2"></div>
          </div>
        </div>

        <div className="flex justify-start -space-x-3 bg-zinc-300 p-3">
          <div className="z-40 w-16 h-16 bg-red-700 text-white text-xl border-4 border-sky-100 border-3 flex justify-center rounded-full items-center">05</div>
          <div className="z-30 w-16 h-16 bg-red-700 text-white text-xl border-4 border-sky-100 border-3 flex justify-center rounded-full items-center">04</div>
          <div className="z-20 w-16 h-16 bg-red-700 text-white text-xl border-4 border-sky-100 border-3 flex justify-center rounded-full items-center">03</div>
          <div className="z-10 w-16 h-16 bg-red-700 text-white text-xl border-4 border-sky-100 border-3 flex justify-center rounded-full items-center">02</div>
          <div className="z-0 w-16 h-16 bg-red-700 text-white text-xl ring-sky-300 ring-4 flex justify-center rounded-full items-center">01</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 font-mono font-bold">
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">box-decoration-slice</p>
            <div className="text-5xl font-extrabold leading-none tracking-tight font-sans">
              <span className="box-decoration-slice text-white bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2">
                Hello <br/>
                World
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">box-decoration-clone</p>
            <div className="text-5xl font-extrabold leading-none tracking-tight font-sans">
              <span className="box-decoration-clone text-white bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2">
                Hello<br/>
                World
              </span>
            </div>
          </div>
        </div>

        <div className="h4 text-3xl mt-4 font-semibold">Borders</div>
        <div className="grid grid-cols-1 divide-y text-center border-zinc-700 border-2 w-64 rounded-b-md mx-4">
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>

        <button className="m-3 px-4 py-2 font-semibold text-sm bg-white text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-sm ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-dotted">Button A</button>

        <div className="h4 text-3xl mt-4 font-semibold">Effects and filters</div>

        <div className="container p-5 bg-neutral-100 grid grid-flow-col auto-cols-max gap-5">
          <div className="shadow-md bg-white h-24 w-24"></div>
          <div className="shadow-lg bg-white h-24 w-24"></div>
          <div className="shadow-xl bg-white h-24 w-24"></div>
          <div className="shadow-2xl bg-white h-24 w-24"></div>
        </div>

        <div className="container p-5 bg-neutral-100 grid grid-flow-col auto-cols-max gap-5">
          <div className="shadow-md bg-white h-24 w-24 shadow-orange-600"></div>
          <div className="shadow-lg bg-white h-24 w-24 shadow-orange-600/50"></div>
          <div className="shadow-xl bg-white h-24 w-24 opacity-50"></div>
          <div className="shadow-2xl bg-white h-24 w-24 opacity-75"></div>
        </div>

        <div className="flex justify-center -space-x-14">
          <div className="mix-blend-multiply bg-blue-400 w-32 h-32 rounded-full"></div>
          <div className="mix-blend-multiply bg-pink-400 w-32 h-32 rounded-full"></div>
        </div>

        <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-none</p>
            <div className="relative blur-none">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-sm</p>
            <div className="relative blur-sm">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-lg</p>
            <div className="relative blur-lg">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">blur-2xl</p>
            <div className="relative blur-2xl">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="h4 text-3xl mt-4 font-semibold">Animations</div>

        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white rounded-lg p-2 m-3">
          Save Changes
        </button>

        <div className="flex items-center justify-center">
          <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </button>
        </div>

        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto my-4">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around gap-12 sm:gap-4 font-mono font-bold shrink-0 p-8">
          <div className="flex flex-col items-center shrink-0 bg-zinc-200">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rotate 45</p>
            <div className="relative">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl rotate-45" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-2 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0 bg-zinc-200">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rotate 45 and transform origin</p>
            <div className="relative">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl rotate-45 origin-top-left" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-2 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0 bg-zinc-200">
            <p className="font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400">rotate 45, transform origin and hover rotate</p>
            <div className="relative">
              <img className="w-24 h-24 object-cover rounded-lg shadow-xl rotate-45 hover:rotate-90 origin-top-left" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80"/>
              <div className="absolute inset-0 ring-2 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>


    </div>
    

  );
}
