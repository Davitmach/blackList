'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
interface IHistory {
    img:string,
    name:string,
    date:string,
    info:string,
    link:string
}
export const HistoryBox = (props:IHistory)=> {
    const {push} = useRouter()
     const HandleFind = () => {
        const vkId = props?.link?.split("/").pop(); // даст "id464240"
push(`/user/${vkId}`)
             
            }
        
    return(
        <div onClick={HandleFind}  className="bg-[#8E237333] rounded-[20px] p-[10px] flex gap-[10px]  items-end justify-between">
            <div className="flex gap-[10px]">
            <div className="w-[48px] h-[48px]"><Image alt="Img" src={props.img} className="flex flex-shrink-0 rounded-[100px] w-[48px] h-[48px] " quality={100}   width={48} height={48}/></div>
            <div className=" flex flex-col justify-between">
                <div className="text-[#DDDDDD] font-[500] text-[14px]">{props.name}</div>
                <div className="text-[#AAAAAA] text-[14px]">{props.date}</div>
            </div>
            </div>
            <div className="text-[#AAAAAA] text-[12px]">Обновлено: {props.info}</div>
        </div>
    )
}