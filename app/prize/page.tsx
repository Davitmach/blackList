'use client';
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [active,setActive] = useState<boolean>(false);
    return(
        <>
        <div className="max-w-[500px] mx-auto w-full mt-[30px] flex flex-col items-center gap-[30px] fixed top-[50%] translate-y-[-50%]">
            <div><Image src={'/image.png'} quality={100} alt="Iphone" width={174} height={209}/></div>
            <div className="text-[#926C88] text-[16px] font-[400] max-w-[320px] w-full text-center">Получи шанс выиграть iPhone 16 любого цвета, просто проверив любую страничку ВК через наш сервис!</div>
            <div><button onClick={()=> setActive(!active)} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] font-[400] w-[217px] h-[44px] cursor-pointer">Учасьвовать</button></div>
            <div className="text-[#AAAAAA] font-[300] text-[14px]">Дата окончания розыгрыша 20.03.2025</div>
        </div>
        {active == true && 
        <div className="w-full h-[100vh] fixed left-[0] top-[0] bg-[#00000066] flex justify-center">
            <div className="max-w-[500px] mx-auto w-full flex justify-center items-center">
                <div className="max-w-[320px] w-full bg-[#2B0821] p-[20px] gap-[20px] flex flex-col rounded-[10px] items-center">
                    <div className="text-center text-[#DDDDDD] text-[18px]">Для участия в розыгрыше, необходимо сделать полную проверку любого аккаунта!</div>
                    <div><button className="cursor-pointer border-[2px] border-[#BBBBBB] rounded-[50px] w-[182px] h-[34px] text-[#BBBBBB] text-[12px] font-[700]">Проверить</button></div>
                </div>
            </div>
        </div>
        }
        </>
    )
}