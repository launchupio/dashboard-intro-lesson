import { BsClock } from "../utils/icons"

export default function GraphCard({source, alternate, boldText, detailText, updateText}) {
  return(
    <div className='card w-[48.5%] shadow-md rounded-xl bg-white p-6 min-w-[300px] h-[327px] relative'>
            <div className='w-[calc(100%-48px)] h-3/5 absolute -top-4 z-index-2'>
              <img className='rounded-xl shadow-md object-fill h-full w-full' src={source} alt={alternate}/>
            </div>
            <div className='w-[calc(100%-48px)] absolute bottom-12 z-index-2'>
              <h6 className='font-semibold text-base text-[#344767]'>{boldText}</h6>
              <p className='text-sm mb-4 text-[#7b809a]'>{detailText}</p>
              <hr className='dark horizontal h-px opacity-25 m-4 color-inherit'/>
            </div>
            <div className='flex w-[calc(100%-48px)] absolute bottom-6 z-index-2'>
              <BsClock className="w-[14px] h-[21px] mr-1 fill-[#7b809a]"/>
              <p className='text-sm text-[#7b809a]'>{updateText}</p>
            </div>
          </div>
  )
}