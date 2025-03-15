'use client';
import { usePathname, useRouter } from 'next/navigation';
import './style.scss'
import { PageConfig } from '@/app/config/page';
import { useEffect, useLayoutEffect, useState } from 'react';
export const Menu = ()=> {
    const pathname = usePathname();
    const { push } = useRouter();
    const [activePage, setActivePage] = useState<string>(pathname);
    const [hide,setHide] = useState<boolean>(false);

    const HandleChangePage = (page: string) => {
        push(page);
        setActivePage(page); // Обновляем активную страницу
    };

    useLayoutEffect(() => {
        if(pathname == PageConfig.tarif) {
        setHide(true)
        } 
        else {
            setHide(false);
        }
        setActivePage(pathname); // Обновляем активную страницу при изменении pathname
    }, [pathname]);
    if(hide == false) {
    return(
        <div className={` fixed bottom-0 left-[50%] translate-x-[-50%] Menu_container w-full max-w-[500px] mx-auto flex justify-between bg-[#00000080] rounded-t-[20px] p-[20px]`}>
            <div onClick={()=>HandleChangePage(PageConfig.home)} className={`${activePage === '/' ? 'Active' :''} flex flex-col items-center justify-center gap-[8px] cursor-pointer group`}>
                <div>
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.9577 18.75C15.9848 18.75 19.2493 15.4854 19.2493 11.4584C19.2493 7.43128 15.9848 4.16669 11.9577 4.16669C7.93061 4.16669 4.66602 7.43128 4.66602 11.4584C4.66602 15.4854 7.93061 18.75 11.9577 18.75ZM11.9577 6.29169C11.2792 6.29169 10.6073 6.42533 9.98048 6.68498C9.35364 6.94463 8.78407 7.3252 8.3043 7.80497C7.82453 8.28474 7.44395 8.85431 7.1843 9.48116C6.92466 10.108 6.79102 10.7799 6.79102 11.4584C6.79102 12.0106 7.23873 12.4584 7.79102 12.4584C8.3433 12.4584 8.79102 12.0106 8.79102 11.4584C8.79102 11.0425 8.87292 10.6307 9.03206 10.2465C9.1912 9.86233 9.42446 9.51323 9.71851 9.21918C10.0126 8.92513 10.3617 8.69187 10.7459 8.53274C11.13 8.3736 11.5418 8.29169 11.9577 8.29169C12.51 8.29169 12.9577 7.84397 12.9577 7.29169C12.9577 6.7394 12.51 6.29169 11.9577 6.29169Z" fill="#BBBBBB"/>
<path d="M21.3333 20.8333L19.25 18.75" stroke="#BBBBBB" strokeWidth="2" strokeLinecap="round"/>
</svg>

                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.9577 18.75C15.9848 18.75 19.2493 15.4854 19.2493 11.4584C19.2493 7.43128 15.9848 4.16669 11.9577 4.16669C7.93061 4.16669 4.66602 7.43128 4.66602 11.4584C4.66602 15.4854 7.93061 18.75 11.9577 18.75ZM11.9577 6.29169C11.2792 6.29169 10.6073 6.42533 9.98048 6.68498C9.35364 6.94463 8.78407 7.3252 8.3043 7.80497C7.82453 8.28474 7.44395 8.85431 7.1843 9.48116C6.92466 10.108 6.79102 10.7799 6.79102 11.4584C6.79102 12.0106 7.23873 12.4584 7.79102 12.4584C8.3433 12.4584 8.79102 12.0106 8.79102 11.4584C8.79102 11.0425 8.87292 10.6307 9.03206 10.2465C9.1912 9.86233 9.42446 9.51323 9.71851 9.21918C10.0126 8.92513 10.3617 8.69187 10.7459 8.53274C11.13 8.3736 11.5418 8.29169 11.9577 8.29169C12.51 8.29169 12.9577 7.84397 12.9577 7.29169C12.9577 6.7394 12.51 6.29169 11.9577 6.29169Z" fill="#868686"/>
<path d="M21.3333 20.8333L19.25 18.75" stroke="#868686" strokeWidth="2" strokeLinecap="round"/>
</svg>

</div>
                <div className="text-[#868686]">Поиск</div>
            </div>
            <div onClick={()=>HandleChangePage(PageConfig.history)} className={`${activePage == PageConfig.history ? 'Active' :''} flex flex-col items-center justify-center gap-[8px] cursor-pointer group`}>
                <div>
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.21 6.97C6.54994 6.51675 7.08344 6.25 7.65 6.25H18.35C18.9166 6.25 19.4501 6.51675 19.79 6.97L22.015 9.93667C22.2487 10.2482 22.375 10.6272 22.375 11.0167V17.9917C22.375 18.9858 21.5691 19.7917 20.575 19.7917H5.425C4.43089 19.7917 3.625 18.9858 3.625 17.9917V11.0167C3.625 10.6272 3.75132 10.2482 3.985 9.93667L6.21 6.97Z" stroke="#BBBBBB" strokeWidth="2"/>
<path d="M3.625 10.4167H8.2153C8.59407 10.4167 8.94033 10.6307 9.10973 10.9695L9.59861 11.9472C9.768 12.286 10.1143 12.5 10.493 12.5H15.507C15.8857 12.5 16.232 12.286 16.4014 11.9472L16.8903 10.9695C17.0597 10.6307 17.4059 10.4167 17.7847 10.4167H22.375V17.7917C22.375 18.8963 21.4796 19.7917 20.375 19.7917H5.625C4.52043 19.7917 3.625 18.8963 3.625 17.7917V10.4167Z" fill="#BBBBBB"/>
</svg>


                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.21 6.97C6.54994 6.51675 7.08344 6.25 7.65 6.25H18.35C18.9166 6.25 19.4501 6.51675 19.79 6.97L22.015 9.93667C22.2487 10.2482 22.375 10.6272 22.375 11.0167V17.9917C22.375 18.9858 21.5691 19.7917 20.575 19.7917H5.425C4.43089 19.7917 3.625 18.9858 3.625 17.9917V11.0167C3.625 10.6272 3.75132 10.2482 3.985 9.93667L6.21 6.97Z" stroke="#868686" strokeWidth="2"/>
<path d="M3.625 10.4167H8.2153C8.59407 10.4167 8.94033 10.6307 9.10973 10.9695L9.59861 11.9472C9.768 12.286 10.1143 12.5 10.493 12.5H15.507C15.8857 12.5 16.232 12.286 16.4014 11.9472L16.8903 10.9695C17.0597 10.6307 17.4059 10.4167 17.7847 10.4167H22.375V17.7917C22.375 18.8963 21.4796 19.7917 20.375 19.7917H5.625C4.52043 19.7917 3.625 18.8963 3.625 17.7917V10.4167Z" fill="#868686"/>
</svg>
</div>
                <div className="text-[#868686]">История</div>
            </div>
            <div onClick={()=>HandleChangePage(PageConfig.tarif)} className={` ${activePage == PageConfig.tarif ? 'Active' :''} flex flex-col items-center justify-center gap-[8px] cursor-pointer group`}>
                <div><svg  width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  fillRule="evenodd" clipRule="evenodd" d="M6.50802 0.125H5.72494C4.27273 0.125 3.54662 0.125 3.01195 0.528303C2.47728 0.931605 2.2778 1.62978 1.87885 3.02611L1.20774 5.375H5.52364L6.50802 0.125ZM0.736328 7.28785C0.738702 7.32268 0.743324 7.35672 0.750333 7.39065C0.800058 7.63135 0.962369 7.82973 1.28699 8.22649L7.35812 15.6468L5.54867 7.375H1.14524C0.99956 7.375 0.861157 7.34385 0.736328 7.28785ZM10.0139 18.2957C10.0091 18.2958 10.0043 18.2958 9.9994 18.2958C9.99455 18.2958 9.9897 18.2958 9.98487 18.2957L7.59597 7.375H12.4028L10.0139 18.2957ZM12.6407 15.6468L18.7118 8.2265C19.0364 7.82973 19.1988 7.63135 19.2485 7.39065C19.2555 7.35672 19.2601 7.32268 19.2625 7.28785C19.1376 7.34385 18.9992 7.375 18.8536 7.375H14.4501L12.6407 15.6468ZM18.7911 5.375L18.12 3.02612C17.721 1.62978 17.5215 0.931605 16.9869 0.528303C16.4522 0.125 15.7261 0.125 14.2739 0.125H13.4908L14.4752 5.375H18.7911ZM11.4559 0.125H8.54287L7.5585 5.375H12.4403L11.4559 0.125Z" fill="#868686"/>
</svg>
</div>
                <div className="text-[#868686]">Тарифы</div>
            </div>
            <div onClick={()=>HandleChangePage(PageConfig.info)} className={`${activePage == PageConfig.info || activePage == PageConfig.analiz ? 'Active' :''} flex flex-col items-center justify-center gap-[8px] cursor-pointer group`}>
                <div>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 18.875C4.82233 18.875 0.625 14.6777 0.625 9.5C0.625 4.32233 4.82233 0.125 10 0.125C15.1777 0.125 19.375 4.32233 19.375 9.5C19.375 14.6777 15.1777 18.875 10 18.875ZM10 4.33333C9.44773 4.33333 9.00001 4.78105 9.00001 5.33333C9.00001 5.88562 9.44773 6.33333 10 6.33333H10.0104C10.5627 6.33333 11.0104 5.88562 11.0104 5.33333C11.0104 4.78105 10.5627 4.33333 10.0104 4.33333H10ZM8.4375 8.5C7.88522 8.5 7.4375 8.94771 7.4375 9.5C7.4375 10.0523 7.88522 10.5 8.4375 10.5H9V13.6667C9 14.219 9.44771 14.6667 10 14.6667H12.0833C12.6356 14.6667 13.0833 14.219 13.0833 13.6667C13.0833 13.1144 12.6356 12.6667 12.0833 12.6667H11V9.5C11 8.94771 10.5523 8.5 10 8.5H8.4375Z" fill="#BBBBBB"/>
</svg>

                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 18.875C4.82233 18.875 0.625 14.6777 0.625 9.5C0.625 4.32233 4.82233 0.125 10 0.125C15.1777 0.125 19.375 4.32233 19.375 9.5C19.375 14.6777 15.1777 18.875 10 18.875ZM10 4.33333C9.44773 4.33333 9.00001 4.78105 9.00001 5.33333C9.00001 5.88562 9.44773 6.33333 10 6.33333H10.0104C10.5627 6.33333 11.0104 5.88562 11.0104 5.33333C11.0104 4.78105 10.5627 4.33333 10.0104 4.33333H10ZM8.4375 8.5C7.88522 8.5 7.4375 8.94771 7.4375 9.5C7.4375 10.0523 7.88522 10.5 8.4375 10.5H9V13.6667C9 14.219 9.44771 14.6667 10 14.6667H12.0833C12.6356 14.6667 13.0833 14.219 13.0833 13.6667C13.0833 13.1144 12.6356 12.6667 12.0833 12.6667H11V9.5C11 8.94771 10.5523 8.5 10 8.5H8.4375Z" fill="#868686"/>
</svg>
</div>
                <div className="text-[#868686]">Инфо</div>
            </div>
        </div>
       

    )
}
else {
    return(
        <></>
    )
}
}