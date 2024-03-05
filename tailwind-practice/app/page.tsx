import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-32">
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

    </div>
    

  );
}
