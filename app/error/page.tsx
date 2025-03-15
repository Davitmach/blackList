export default function Error() {
    return(
        <>
        <div className="w-[90%] max-w-[460px] mx-auto bg-[#8E237333] rounded-[20px]  fixed left-[50%] py-[15px]
        top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-start items-center gap-[40px] h-[318px]">
            <div className="inline-flex gap-[10px]">
                <div><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.5 5C9.5 2.23858 11.7386 0 14.5 0C17.2614 0 19.5 2.23858 19.5 5C19.5 7.76142 17.2614 10 14.5 10C11.7386 10 9.5 7.76142 9.5 5ZM14.5 2C12.8431 2 11.5 3.34315 11.5 5C11.5 6.65685 12.8431 8 14.5 8C16.1569 8 17.5 6.65685 17.5 5C17.5 3.34315 16.1569 2 14.5 2Z" fill="#926C88"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.5 14C5.5 11.7909 7.29086 10 9.5 10C11.7091 10 13.5 11.7909 13.5 14C13.5 16.2091 11.7091 18 9.5 18C7.29086 18 5.5 16.2091 5.5 14ZM9.5 12C8.39543 12 7.5 12.8954 7.5 14C7.5 15.1046 8.39543 16 9.5 16C10.6046 16 11.5 15.1046 11.5 14C11.5 12.8954 10.6046 12 9.5 12Z" fill="#926C88"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.067 3 0.5 4.567 0.5 6.5C0.5 8.433 2.067 10 4 10C5.933 10 7.5 8.433 7.5 6.5C7.5 4.567 5.933 3 4 3ZM2.5 6.5C2.5 5.67157 3.17157 5 4 5C4.82843 5 5.5 5.67157 5.5 6.5C5.5 7.32843 4.82843 8 4 8C3.17157 8 2.5 7.32843 2.5 6.5Z" fill="#926C88"/>
</svg>
</div>
                <div className="text-[#DDDDDD] text-[14px]">Название</div>
            </div>
            <div className="flex flex-col items-center gap-[5px]">
                <div className="mb-[10px]"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM12.2265 8.83234C15.4777 6.305 19.5631 4.8 24 4.8C34.6039 4.8 43.2 13.3961 43.2 24C43.2 28.4369 41.695 32.5223 39.1677 35.7735L12.2265 8.83234ZM8.83234 12.2265C6.305 15.4777 4.8 19.5631 4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C28.4369 43.2 32.5223 41.695 35.7735 39.1677L8.83234 12.2265Z" fill="#926C88"/>
</svg>
</div>
                <div className="text-[#926C88] text-[20px]">Информация обновляется</div>
                <div className="text-[#926C88] text-[16px] max-w-[290px] text-center">Если ничего не происхдит, то данных не найдено</div>
            </div>
            </div>
            </>
    )
}