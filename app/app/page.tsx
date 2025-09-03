import Image from "next/image";

export default function Home() {

  const baraoLogo = {borderRadius: '50%', margin: 'auto'}

  const gridItemStyle= 'border-2 border-solid border-white p-4 rounded-xl'

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
     <span className='w-[200px] h-[200px] overflow-hidden'>
      
     <Image alt='' src='/barao.jpg' width={200} height={200} style={baraoLogo} /> 
     </span>
        <ul className='grid grid-cols-2 w-100% gap-4'>
          <ul className={gridItemStyle} >
            @lopsbea
            <p>bullet:</p>            
            <p>rapid:</p>
            <p>blitz:</p>
            <p>puzzle:</p>
          </ul>
          <ul className={gridItemStyle} >
            <p></p>@marcusvrpereira
            <p>bullet:</p>            
            <p>rapid:</p>
            <p>blitz:</p>
            <p>puzzle:</p>
          </ul>          
          <ul className={gridItemStyle} >@mavi10
            <p>bullet:</p>            
            <p>rapid:</p>
            <p>blitz:</p>
            <p>puzzle:</p>
          </ul>
        </ul>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          rel="noopener noreferrer"
        >
         Feito por Bia - T33 :)
        </a>
  
       
      </footer>
    </div>
  );
}
