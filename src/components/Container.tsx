 
import Numero from "./Number";

 function Container() {

    return(
        <div className="grid grid-cols-4 gap-0">
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={2} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative bg-blue-500 text-white px-5 py-2.5 group">
                       <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-0.5 bg-white left-0 top-0"/>
                       <span className="relative">Button Text</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={2} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative bg-blue-500 text-white px-5 py-2.5 group">
                       <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"/>
                       <span className="relative">Button Text</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={3} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
                       <span className="absolute w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"/>
                       <span className="relative">Button Text</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={4} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative bg-blue-500 rounded-lg overflow-hiden text-white px-5 py-2.5 group">
                       <span className="absolute w-32 h-32 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-out duration-300 bg-blue-700 left-0 top-0"/>
                       <span className="relative">Button Text hiden</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={5} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative bg-blue-500 rounded-lg overflow-hidden text-white px-5 py-2.5 group">
                       <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-out duration-1000 bg-pink-700 left-0 top-0"/>
                       <span className="relative">Button Text hidden</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={6} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#" className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-white rounded-lg group-hover:text-blue-500">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-blue-500"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                            <span className="relative">Button Text</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={7} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-blue-500 group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-blue-500">Button Text</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={8} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-500 bg-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-blue-500 transition duration-300 group-hover:text-white ease">Button Text</span>
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={9} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-white rounded-full shadow-md group bg-white">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
                        <span className="relative invisible">Button Text</span>
                    </a>    
                </div>
            </div>
            
            <div className="flex flex-col border border-black h-[195px] w-[370px]">
                <Numero numero={10} />
                <div className="flex basis-4/5 items-center justify-center">
                    <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                        <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-cyan-500 rounded-full blur-md ease"></span>
                        <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-400 rounded-full blur-md"></span>
                            <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-blue-900 rounded-full blur-md"></span>
                        </span>
                        <span className="relative text-white">Button Text</span>
                    </a>
                </div>
            </div>
        </div>
    )
 }

 export default Container;