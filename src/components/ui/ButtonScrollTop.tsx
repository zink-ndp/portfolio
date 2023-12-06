import { useState, useEffect } from 'react';

export const ButtonScrollTop = () => {

    const [btnScrollShow, setBtnScrollShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 200 ? setBtnScrollShow(true) : setBtnScrollShow(false)
        })  
      }, []);
      const scrollToElement = (id?: any) => {
        const element = document.getElementById('hero');
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setBtnScrollShow(false)
        }
      };
      
  return<>
    <button onClick={scrollToElement} className={` ${btnScrollShow ? 'flex' : 'hidden'} flex-col items-center justify-center group transition-opacity duration-500 fixed bottom-5 right-5 md:bottom-10 md:right-10 animate-bounce z-40 bg-white hover:bg-blue-50 rounded-full p-3 md:p-4`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black group-hover:text-blue-500 z-40"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <p className="text-sm text-black group-hover:text-blue-500" >TOP</p>
      </button>
  </>
}
