import gsap from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

const text1 = useRef(null);
const text2 = useRef(null);

const refLogo1 = useRef(null);
const refLogo2 = useRef(null);
const refLogo3 = useRef(null);
const refLogo4 = useRef(null);
const refLogo5 = useRef(null);
const refLogo6 = useRef(null);
const refLogo7 = useRef(null);
const refLogo8 = useRef(null);

const Laptop = useRef(null);
const qr = useRef(null);
const dates = useRef(null);

useEffect(() => {

  const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLScxSEV-ADCJ9EIcmSWhBNO8E9m-ko-P4NrHrs1E7j_k-TxfEw/viewform?usp=header';

  gsap.fromTo('.appear', {opacity: 0, y: 50 }, {opacity: 1, y: 0, duration: 0.5, delay: 1.5});

  gsap.fromTo(text1.current, {opacity: 0, scale: 0 }, {opacity: 1, scale: 1 , duration: 0.5, delay: 0});
  gsap.fromTo(text2.current, {opacity: 0, scale: 0 }, {opacity: 1, scale: 1 , duration: 0.5, delay: 0.1});

  gsap.fromTo(refLogo1.current, {opacity: 1, scale: 0, y:"200%" }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0});
  // gsap.fromTo(refLogo1.current, {opacity: 1, scale: 0 }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 1});
  gsap.fromTo(refLogo2.current, {opacity: 0, scale: 0,y: '-200%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.1+0.5});
  gsap.fromTo(refLogo3.current, {opacity: 0, scale: 0,y: '-300%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.2+0.5});
  gsap.fromTo(refLogo4.current, {opacity: 0, scale: 0,y: '-400%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.3+0.5});
  gsap.fromTo(refLogo5.current, {opacity: 0, scale: 0,y: '-400%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.4+0.5});
  gsap.fromTo(refLogo6.current, {opacity: 0, scale: 0,y: '-400%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.5+0.5});
  gsap.fromTo(refLogo7.current, {opacity: 0, scale: 0,y: '-400%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.6+0.5});
  gsap.fromTo(refLogo8.current, {opacity: 0, scale: 0,y: '-400%' }, {opacity: 1, scale: 1 , y:0, duration: 0.5, delay: 0.7+0.5});


  gsap.fromTo(Laptop.current, {opacity: 0, scale: 0 }, {opacity: 1, scale: 1 , duration: 0.5, delay: 0.5+0.5});

  // bobbing animation to laptop

  gsap.to(Laptop.current, {y: '-=10', duration: 1, repeat: -1, yoyo: true, delay: 1.5, ease: 'power2.inOut'});
  
  gsap.fromTo(qr.current, {opacity: 0, scale: 0 }, {opacity: 1, scale: 1 , duration: 0.5, delay: 1.5});
  gsap.to(qr.current, {y: '-=5', duration: 1, repeat: -1, yoyo: true, delay: 1.3, ease: 'power2.inOut'});

  gsap.fromTo(dates.current, {opacity: 0, scale: 0 }, {opacity: 1, scale: 1 , duration: 0.5, delay: 1.5});

}
, []);

  return (
    <div className="min-h-screen max-h-[150vh] maxw-screen flex flex-col items-center justify-center bg-neutral-800 relative overflow-clip m-0 p-0">
      <div className="logo h-max font-mono text-white flex flex-col items-center gap-2 text-xl z-0">
      <div className="flex items-center justify-center">
        <img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/CSEALogo.svg " alt=""  className="object-cover h-20 w-20 "/>
        <img src="/images/fosscell.svg " alt=""  className="object-cover h-16 "/>
      </div>
      <div  className="span font-pixeloperator ">Presents</div>
      </div>

      <div className="flex flex-col absolute w-full items-center justify-center h-max gap-1 z-0 text ">
        <div ref={refLogo1} className="w-[90%] lg:w-[80%] h-auto flex justify-center  "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo2} className="w-[90%] lg:w-[80%] h-auto flex justify-center  "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo3} className="w-[90%] lg:w-[80%] h-auto flex justify-center  "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo4} className="w-[90%] lg:w-[80%] h-auto flex justify-center  "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo5} className="w-[90%] lg:w-[80%] h-auto flex justify-center sm:hidden "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo6} className="w-[90%] lg:w-[80%] h-auto flex justify-center sm:hidden "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo7} className="w-[90%] lg:w-[80%] h-auto flex justify-center lg:hidden "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
        <div ref={refLogo8} className="w-[90%] lg:w-[80%] h-auto flex justify-center lg:hidden "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/LogoNoFill.svg" alt="" className="object-cover" /></div>
     </div>

     <div  className=" z-20 flex items-center justify-end">
        <img ref={Laptop} src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/Laptop2.png" alt="" className="" />
     </div>

    <div className="appear flex flex-col md:flex-row h-max w-full md:justify-between p-3 bottom-10 items-center z-10 gap-5">
      <a href={'https://docs.google.com/forms/d/e/1FAIpQLScxSEV-ADCJ9EIcmSWhBNO8E9m-ko-P4NrHrs1E7j_k-TxfEw/viewform?usp=header'} 
         className=" cursor-pointer hover:-translate-y-1 transition-transform h-max w-max origin-bottom bottom-8 left-2 ">
        <img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/QR2.svg" alt="" className="" />
      </a>
      <div ref={dates} className=" h-max w-max origin-bottom bottom-12 right-2 "><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/833adbae216c774e39572babc620a0b5ad75dfdd/public/images/Dates3.svg" alt="" className=" w-[250px] md:w-[350px]" /></div>
    </div>

     {/* <div className="bg-[#01FF68] w-full h-8 absolute bottom-0 z-0"></div> */}

     <div className="absolute left-5 md:w-[50%] w-[100%] z-0"><img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/code.svg" alt="" className="w-full -z-10 opacity-15" /></div>

      <div className=" md:px-2 px-0 rounded-full md:rounded-none font-pixeloperator text-black bg-[#42CF71] absolute top-0 right-0 flex items-center justify-center">
        <span className='hidden md:flex'>made with {'<3'} by </span>
        <a href='https://www.linkedin.com/in/vinitkeshri/' className='hidden md:flex text-green-800 items-start justify-center px-2 '> Vinit </a> 
        <a href="https://github.com/vinitkesh">
          <img src="https://raw.githubusercontent.com/vinitkesh/codeinit/26c7faa6b42fc08320e2bcfd8c714b295c74aed6/public/images/github.svg" alt="" className='h-full' />  
        </a>
      </div>
      
    </div>
  );
}

export default App;