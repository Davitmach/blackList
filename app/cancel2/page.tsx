'use client';
import { useState } from "react";

export default function Page() {
        const [active,setActive] = useState(false);
    return(
        <>
         <div className="max-w-[500px] pb-[120px] mx-auto w-full px-[20px] flex flex-col items-center gap-[15px] mt-[30px]">
                    <div className="w-full flex justify-start"><h1 className="text-[#DDDDDD] text-[15px] font-[500]">Если вы временно не планируете пользоваться преимуществами подписки, вы можете её приостановить, а мы сохраним все оплаченные дни.</h1></div>
                    <div className="flex flex-col gap-[15px] items-center justify-center max-w-[269px] w-full">
                       
                       <button onClick={()=> {setActive(true)}} className="cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Приостановить подписку</button>
                   </div>
                    <div><p className="text-[#926C88] text-[14px] font-[400]">Подробнее о том, как работает услуга приостановки подписке можно узнать в Публичной Оферте и Тарифах.</p></div>
                    <div><p className="text-[#926C88] text-[14px] font-[400]">В соответствии с Публичной Офертой, функциональная возможность приостановки подписки производится 1 раз сроком на 7 календарных дней, после чего любой из выбранного ранее тарифов снова становится необходимым к оплате.</p></div>
               
                   
                   
                </div>
                {active && <div className="fixed left-0 top-0 w-full h-[100vh] bg-[#00000066] z-[9999999999999] flex items-center justify-center"><div className=" fadeIn max-w-[320px] w-full bg-[#2B0821] py-[20px] rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
            <h1 className="text-center text-[#DDDDDD] text-[18px] font-[400] max-w-[300px] w-full">Ваша подписка уже приостановлена</h1>
            <button onClick={()=> {
                setActive(false)
            }} className="max-w-[149px] w-full cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Окей</button>
            </div></div>}
                </>
    )
}