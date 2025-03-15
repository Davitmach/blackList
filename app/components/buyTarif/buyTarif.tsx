import { TarifInfo } from "@/app/tarif/page";
interface BuyTarifProps {
    activeTarif: TarifInfo;
}
export const BuyTarif = (props:BuyTarifProps)=> {
    return(
        <div className="w-full max-w-[500px] mx-auto   bg-[#00000080]  py-[20px] px-[30px] fixed bottom-0 rounded-t-[20px]">
            <button className="border-[2px] rounded-[50px] w-full py-[10px] cursor-pointer border-[#BBBBBB] text-[#BBBBBB] font-[700] text-[12px]">Подписаться за {props.activeTarif.description.includes('/') && props.activeTarif.name!=='Пробный' ? props.activeTarif.description : props.activeTarif.price}₽</button>
        </div>
    )
}