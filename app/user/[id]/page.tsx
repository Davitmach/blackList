'use client';
import { Suspense } from 'react';
import Image from "next/image";
import { IUserInfo } from "../../types/userInfo";
import { IPerepiski, ISMS } from "../../types/perepiski";
import { IAktivnost } from "../../types/aktivnost";
import {useParams, useRouter, useSearchParams,  } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from '@/app/components/loading/loading';
export default function Page() {
  const [activeLimit,setActiveLimit] = useState(false);
  const [active,setActive] = useState(false);
  const [link,setLink] = useState<{url:string}>({url:''});
  const [info,setInfo] = useState<UserProfile|null>(null);
  const [loading,setLoading] =useState<boolean>(true);
interface IBox {
    img:string;
    name:string
}
interface IGroup {
    img:string;
    name:string;
    url:string
}
interface IResut{
    img:string;
    name:string;
    url:string;
    active:string;
    podozritelnost:string;
    blackList:number
}
const Tarif = {
  name: 'Пробный',
  price: 14,
  description: 'далее 999₽/10дн.',
     additionalInfo: 'Все функции Премиум на 2 дня!',
}
function getRandomByFriendsCount(friendsCount: number): number {
  if (friendsCount <= 0) return 0;

  // Максимум растёт с количеством друзей, можно задать формулу по желанию
  const max = Math.floor(friendsCount * 1.5); // или просто friendsCount
  return Math.floor(Math.random() * (max + 1)); // от 0 до max включительно
}
const UserInfo = (props: IUserInfo) => {
  const [presents,setPresents] = useState<string|number>(0);
  useEffect(()=> {
const CheckUser = localStorage.getItem(`${info?.first_name}${info?.last_name}`);
if(CheckUser) {
  setPresents(CheckUser);
}
else {
  if(info) {
  if(info.friends_count) {
  const randomValue = getRandomByFriendsCount(info.friends_count);
 localStorage.setItem(`${info?.first_name}${info?.last_name}`, randomValue.toString());
 setPresents(randomValue);
  }
}
}
  },[])


  return (
    <div className="w-full flex flex-col gap-[30px]  mt-[30px]">
      <div className="bg-[#8E237333] rounded-[20px] py-[10px] px-[15px] flex gap-[20px]">
        <div>
          {/* <Image
            alt="4"
            className="h-[48px] rounded-[50px]"
            quality={100}
            src={props.img}
            width={48}
            height={48}
          /> */}
          <img src={props.img}  width={48}
            height={48}  className="h-[48px] rounded-[50px]"/>
        </div>
        <div className="flex gap-[10px] flex-col">
          <div className="text-[#DDDDDD] font-[500] text-[14px]">
            {props.name}
          </div>
          <div className="flex gap-[25px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-[#926C88] text-[14px]">Посты</div>
              <div className="text-[#DDDDDD] text-[16px]">{props.posts}</div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="text-[#926C88] text-[14px]">Подписчики</div>
              <div className="text-[#DDDDDD] text-[16px]">{props.subs}</div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="text-[#926C88] text-[14px]">Друзья</div>
              <div className="text-[#DDDDDD] text-[16px]">{props.friends}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-7">
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">Лайки</div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {props.like}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">Посты</div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {props.posts}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">
                Просмотры
              </div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {props.views}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">
                Комментарии
              </div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {props.comments}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">
                Подарки
              </div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {presents}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8E237333] rounded-[20px] p-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5 18.875C4.32233 18.875 0.125 14.6777 0.125 9.5C0.125 4.32233 4.32233 0.125 9.5 0.125C14.6777 0.125 18.875 4.32233 18.875 9.5C18.875 14.6777 14.6777 18.875 9.5 18.875ZM9.50001 4.33333C8.94773 4.33333 8.50001 4.78105 8.50001 5.33333C8.50001 5.88562 8.94773 6.33333 9.50001 6.33333H9.51043C10.0627 6.33333 10.5104 5.88562 10.5104 5.33333C10.5104 4.78105 10.0627 4.33333 9.51043 4.33333H9.50001ZM7.9375 8.5C7.38522 8.5 6.9375 8.94771 6.9375 9.5C6.9375 10.0523 7.38522 10.5 7.9375 10.5H8.5V13.6667C8.5 14.219 8.94771 14.6667 9.5 14.6667H11.5833C12.1356 14.6667 12.5833 14.219 12.5833 13.6667C12.5833 13.1144 12.1356 12.6667 11.5833 12.6667H10.5V9.5C10.5 8.94771 10.0523 8.5 9.5 8.5H7.9375Z"
                  fill="#926C88"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[#926C88] font-[500] text-[14px]">
                Репосты
              </div>
              <div className="font-[700] text-[#DDDDDD] text-[22px]">
                {props.reposts}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SMS = (props: ISMS) => {
  return (
    <div onClick={()=> {
      window.open(props.link,'_blank')
    }} className="bg-[#DDDDDD] p-[10px] rounded-[10px] flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <div>
          <img   src={props.img}  width={32}
            height={32} className='w-[32px] h-[32px] rounded-[50px]'/>
         
        </div>
        <div className="underline text-[#222222] text-[14px]">{props.name}</div>
      </div>
      <div className="underline text-[#AAAAAA] text-[12px]">Переписка</div>
    </div>
  );
};
const Perepiski = (props: IPerepiski) => {
    const {push} = useRouter();
  if (props.active == false) {
    return (
      <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
        <div className="flex gap-[10px]">
          <div>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 5C9 2.23858 11.2386 0 14 0C16.7614 0 19 2.23858 19 5C19 7.76142 16.7614 10 14 10C11.2386 10 9 7.76142 9 5ZM14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2Z"
                fill="#926C88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 14C5 11.7909 6.79086 10 9 10C11.2091 10 13 11.7909 13 14C13 16.2091 11.2091 18 9 18C6.79086 18 5 16.2091 5 14ZM9 12C7.89543 12 7 12.8954 7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14C11 12.8954 10.1046 12 9 12Z"
                fill="#926C88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 3C1.567 3 0 4.567 0 6.5C0 8.433 1.567 10 3.5 10C5.433 10 7 8.433 7 6.5C7 4.567 5.433 3 3.5 3ZM2 6.5C2 5.67157 2.67157 5 3.5 5C4.32843 5 5 5.67157 5 6.5C5 7.32843 4.32843 8 3.5 8C2.67157 8 2 7.32843 2 6.5Z"
                fill="#926C88"
              />
            </svg>
          </div>
          <div className="text-[#DDDDDD] text-[14px]">Утекшие переписки</div>
        </div>
        <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px] overflow-hidden">
          <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
          <div className="text-[#DDDDDD] font-[500] text-[16px]">
            Проверить утекшие переписки!
          </div>
          <div>
            <button onClick={()=> {
                 const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                 push(`/pay?tarif=Пробный`);
            }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
              Проверить
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
        <div className="flex gap-[10px]">
          <div>
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 5C9 2.23858 11.2386 0 14 0C16.7614 0 19 2.23858 19 5C19 7.76142 16.7614 10 14 10C11.2386 10 9 7.76142 9 5ZM14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2Z"
                fill="#926C88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 14C5 11.7909 6.79086 10 9 10C11.2091 10 13 11.7909 13 14C13 16.2091 11.2091 18 9 18C6.79086 18 5 16.2091 5 14ZM9 12C7.89543 12 7 12.8954 7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14C11 12.8954 10.1046 12 9 12Z"
                fill="#926C88"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 3C1.567 3 0 4.567 0 6.5C0 8.433 1.567 10 3.5 10C5.433 10 7 8.433 7 6.5C7 4.567 5.433 3 3.5 3ZM2 6.5C2 5.67157 2.67157 5 3.5 5C4.32843 5 5 5.67157 5 6.5C5 7.32843 4.32843 8 3.5 8C2.67157 8 2 7.32843 2 6.5Z"
                fill="#926C88"
              />
            </svg>
          </div>
          <div className="text-[#DDDDDD] text-[14px]">Утекшие переписки</div>
        </div>
        <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
          {/* {Array.from({ length: 5 }, (e, _) => (
            <SMS
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
              key={_}
            />
          ))} */}
           {
                info?.random_friends.slice(0,12).map((e)=> {
                  return(
<SMS  link={e.profile_link} img={e.avatar} name={`${e?.last_name} ${e?.first_name}`} />
                  )
                })
              }
        </div>
      </div>
    );
  }
};
const AktivonstBox = (props:IAktivnost)=> {
return(
    <div onClick={()=> {
          if(props.link?.length !==0 && props.link) {
window.open(props.link,'_blank')
          }
        }} className="bg-[#DDDDDD] p-[10px] rounded-[10px] flex justify-between items-center">
    <div className="flex items-center gap-[10px]">
      <div>
        <img className='w-[16px] h-[16px] rounded-[50px]' width={16} height={16} src={props.img}/>
       
      </div>
      <div className="underline text-[#222222] text-[14px]">{props.name}</div>
    </div>
    <div className="flex gap-[10px] items-center">
        <div className="underline text-[#222222] text-[12px]">{props.count}</div>
        <div><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.10526 3.88889C7.10526 1.74111 8.87256 0 11.0526 0C13.2327 0 15 1.74111 15 3.88889C15 6.03666 13.2327 7.77778 11.0526 7.77778C8.87256 7.77778 7.10526 6.03666 7.10526 3.88889ZM11.0526 1.55556C9.74459 1.55556 8.68421 2.60022 8.68421 3.88889C8.68421 5.17755 9.74459 6.22222 11.0526 6.22222C12.3607 6.22222 13.4211 5.17755 13.4211 3.88889C13.4211 2.60022 12.3607 1.55556 11.0526 1.55556Z" fill="#AAAAAA"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3.94737 10.8889C3.94737 9.17067 5.36121 7.77778 7.10526 7.77778C8.84932 7.77778 10.2632 9.17067 10.2632 10.8889C10.2632 12.6071 8.84932 14 7.10526 14C5.36121 14 3.94737 12.6071 3.94737 10.8889ZM7.10526 9.33333C6.23323 9.33333 5.52632 10.0298 5.52632 10.8889C5.52632 11.748 6.23323 12.4444 7.10526 12.4444C7.97729 12.4444 8.68421 11.748 8.68421 10.8889C8.68421 10.0298 7.97729 9.33333 7.10526 9.33333Z" fill="#AAAAAA"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2.76316 2.33333C1.23711 2.33333 0 3.55211 0 5.05556C0 6.559 1.23711 7.77778 2.76316 7.77778C4.28921 7.77778 5.52632 6.559 5.52632 5.05556C5.52632 3.55211 4.28921 2.33333 2.76316 2.33333ZM1.57895 5.05556C1.57895 4.41122 2.10914 3.88889 2.76316 3.88889C3.41718 3.88889 3.94737 4.41122 3.94737 5.05556C3.94737 5.69989 3.41718 6.22222 2.76316 6.22222C2.10914 6.22222 1.57895 5.69989 1.57895 5.05556Z" fill="#AAAAAA"/>
</svg>
</div>
    </div>
  </div>    
)
}
const Aktivonst = (props:IPerepiski)=> {
    
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px]">
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 5C9 2.23858 11.2386 0 14 0C16.7614 0 19 2.23858 19 5C19 7.76142 16.7614 10 14 10C11.2386 10 9 7.76142 9 5ZM14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2Z"
                    fill="#926C88"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 14C5 11.7909 6.79086 10 9 10C11.2091 10 13 11.7909 13 14C13 16.2091 11.2091 18 9 18C6.79086 18 5 16.2091 5 14ZM9 12C7.89543 12 7 12.8954 7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14C11 12.8954 10.1046 12 9 12Z"
                    fill="#926C88"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 3C1.567 3 0 4.567 0 6.5C0 8.433 1.567 10 3.5 10C5.433 10 7 8.433 7 6.5C7 4.567 5.433 3 3.5 3ZM2 6.5C2 5.67157 2.67157 5 3.5 5C4.32843 5 5 5.67157 5 6.5C5 7.32843 4.32843 8 3.5 8C2.67157 8 2 7.32843 2 6.5Z"
                    fill="#926C88"
                  />
                </svg>
              </div>
              <div className="text-[#DDDDDD] text-[14px]">Анализ активности</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px]">
              <div>
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 5C9 2.23858 11.2386 0 14 0C16.7614 0 19 2.23858 19 5C19 7.76142 16.7614 10 14 10C11.2386 10 9 7.76142 9 5ZM14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2Z"
                    fill="#926C88"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 14C5 11.7909 6.79086 10 9 10C11.2091 10 13 11.7909 13 14C13 16.2091 11.2091 18 9 18C6.79086 18 5 16.2091 5 14ZM9 12C7.89543 12 7 12.8954 7 14C7 15.1046 7.89543 16 9 16C10.1046 16 11 15.1046 11 14C11 12.8954 10.1046 12 9 12Z"
                    fill="#926C88"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 3C1.567 3 0 4.567 0 6.5C0 8.433 1.567 10 3.5 10C5.433 10 7 8.433 7 6.5C7 4.567 5.433 3 3.5 3ZM2 6.5C2 5.67157 2.67157 5 3.5 5C4.32843 5 5 5.67157 5 6.5C5 7.32843 4.32843 8 3.5 8C2.67157 8 2 7.32843 2 6.5Z"
                    fill="#926C88"
                  />
                </svg>
              </div>
              <div className="text-[#DDDDDD] text-[14px]">Анализ активности</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {/* {Array.from({ length: 5 }, (e, _) => (
                <AktivonstBox
                count={3}
                img={info?.avatar_url || ''}
                name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))} */}
              {
                info?.random_friends.slice(0,30).map((e)=> {
                  return(
<AktivonstBox count={3} link={e.profile_link} img={e.avatar} name={`${e?.last_name} ${e?.first_name}`} />
                  )
                })
              }
            </div>
          </div>
        );
      }
}
const FriendsBox = (props:IBox)=> {
    return(
        <div className="bg-[#DDDDDD] p-[10px] rounded-[10px] flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <div>
          <img className='w-[16px] h-[16px] rounded-[50px]' width={16} height={16} src={props.img}/>
          </div>
          <div className="underline text-[#222222] text-[14px]">{props.name}</div>
        </div>
      
      </div> 
    )
}
const Friends = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.8893 6C13.8893 7.89355 12.148 9.42857 10 9.42857C7.85197 9.42857 6.11065 7.89355 6.11065 6C6.11065 4.10645 7.85197 2.57143 10 2.57143C12.148 2.57143 13.8893 4.10645 13.8893 6ZM11.9447 6C11.9447 6.94677 11.074 7.71429 10 7.71429C8.92599 7.71429 8.05533 6.94677 8.05533 6C8.05533 5.05323 8.92599 4.28571 10 4.28571C11.074 4.28571 11.9447 5.05323 11.9447 6Z" fill="#926C88"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 0C7.94843 0 6.10496 0.794975 4.6435 1.72187C3.17436 2.65363 2.00734 3.77164 1.28794 4.54159C1.26501 4.56614 1.2411 4.59138 1.2165 4.61736C0.911748 4.93915 0.5 5.37391 0.5 6C0.5 6.62609 0.91173 7.06083 1.21648 7.38263C1.24102 7.40853 1.26507 7.43393 1.28794 7.45841C2.00734 8.22836 3.17436 9.34637 4.6435 10.2781C6.10496 11.205 7.94843 12 10 12C12.0516 12 13.895 11.205 15.3565 10.2781C16.8256 9.34637 17.9927 8.22836 18.7121 7.45841C18.735 7.43386 18.7589 7.40861 18.7835 7.38263C19.0883 7.06084 19.5 6.62609 19.5 6C19.5 5.37391 19.0883 4.93917 18.7835 4.61737C18.7589 4.59141 18.735 4.56613 18.7121 4.54159C17.9927 3.77164 16.8256 2.65363 15.3565 1.72187C13.895 0.794976 12.0516 0 10 0ZM2.78901 5.63147C3.45041 4.92358 4.49658 3.9269 5.77921 3.11343C7.06952 2.29508 8.51641 1.71429 10 1.71429C11.4836 1.71429 12.9305 2.29508 14.2208 3.11343C15.5034 3.9269 16.5496 4.92358 17.211 5.63147C17.308 5.7353 17.3805 5.81297 17.4405 5.88128C17.488 5.93536 17.5183 5.97302 17.538 6C17.5183 6.02698 17.488 6.06464 17.4405 6.11872C17.3805 6.18703 17.308 6.2647 17.211 6.36853C16.5496 7.07642 15.5034 8.0731 14.2208 8.88657C12.9305 9.70492 11.4836 10.2857 10 10.2857C8.51641 10.2857 7.06952 9.70492 5.77921 8.88657C4.49658 8.0731 3.45041 7.07642 2.78901 6.36853C2.69199 6.2647 2.61954 6.18703 2.55952 6.11872C2.51201 6.06464 2.48174 6.02698 2.462 6C2.48174 5.97302 2.51201 5.93536 2.55952 5.88128C2.61954 5.81297 2.692 5.7353 2.78901 5.63147Z" fill="#926C88"/>
</svg>
              </div>
              <div className="text-[#DDDDDD] text-[14px]">Анализ активности</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=>{
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.8893 6C13.8893 7.89355 12.148 9.42857 10 9.42857C7.85197 9.42857 6.11065 7.89355 6.11065 6C6.11065 4.10645 7.85197 2.57143 10 2.57143C12.148 2.57143 13.8893 4.10645 13.8893 6ZM11.9447 6C11.9447 6.94677 11.074 7.71429 10 7.71429C8.92599 7.71429 8.05533 6.94677 8.05533 6C8.05533 5.05323 8.92599 4.28571 10 4.28571C11.074 4.28571 11.9447 5.05323 11.9447 6Z" fill="#926C88"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10 0C7.94843 0 6.10496 0.794975 4.6435 1.72187C3.17436 2.65363 2.00734 3.77164 1.28794 4.54159C1.26501 4.56614 1.2411 4.59138 1.2165 4.61736C0.911748 4.93915 0.5 5.37391 0.5 6C0.5 6.62609 0.91173 7.06083 1.21648 7.38263C1.24102 7.40853 1.26507 7.43393 1.28794 7.45841C2.00734 8.22836 3.17436 9.34637 4.6435 10.2781C6.10496 11.205 7.94843 12 10 12C12.0516 12 13.895 11.205 15.3565 10.2781C16.8256 9.34637 17.9927 8.22836 18.7121 7.45841C18.735 7.43386 18.7589 7.40861 18.7835 7.38263C19.0883 7.06084 19.5 6.62609 19.5 6C19.5 5.37391 19.0883 4.93917 18.7835 4.61737C18.7589 4.59141 18.735 4.56613 18.7121 4.54159C17.9927 3.77164 16.8256 2.65363 15.3565 1.72187C13.895 0.794976 12.0516 0 10 0ZM2.78901 5.63147C3.45041 4.92358 4.49658 3.9269 5.77921 3.11343C7.06952 2.29508 8.51641 1.71429 10 1.71429C11.4836 1.71429 12.9305 2.29508 14.2208 3.11343C15.5034 3.9269 16.5496 4.92358 17.211 5.63147C17.308 5.7353 17.3805 5.81297 17.4405 5.88128C17.488 5.93536 17.5183 5.97302 17.538 6C17.5183 6.02698 17.488 6.06464 17.4405 6.11872C17.3805 6.18703 17.308 6.2647 17.211 6.36853C16.5496 7.07642 15.5034 8.0731 14.2208 8.88657C12.9305 9.70492 11.4836 10.2857 10 10.2857C8.51641 10.2857 7.06952 9.70492 5.77921 8.88657C4.49658 8.0731 3.45041 7.07642 2.78901 6.36853C2.69199 6.2647 2.61954 6.18703 2.55952 6.11872C2.51201 6.06464 2.48174 6.02698 2.462 6C2.48174 5.97302 2.51201 5.93536 2.55952 5.88128C2.61954 5.81297 2.692 5.7353 2.78901 5.63147Z" fill="#926C88"/>
</svg>

              </div>
              <div className="text-[#DDDDDD] text-[14px]">Анализ активности</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {Array.from({ length: 5 }, (e, _) => (
                <FriendsBox
              
                img={info?.avatar_url || ''}
                name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))}
            </div>
          </div>
        );
      }
}
const LikeBox = (props:IAktivnost)=> {
    return(
        <div onClick={()=> {
          if(props.link?.length !==0 && props.link) {
window.open(props.link,'_blank')
          }
        }} className="bg-[#DDDDDD] p-[10px] rounded-[10px] flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <div>
          <img className='w-[16px] h-[16px] rounded-[50px]' width={16} height={16} src={props.img}/>
          </div>
          <div className="underline text-[#222222] text-[14px]">{props.name}</div>
        </div>
        <div className="flex gap-[10px] items-center">
            <div className="underline text-[#222222] text-[12px]">{props.count}</div>
          
        </div>
      </div>    
    )
} 
const Likes = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.19615 10.6427L10.3832 17.601C10.6307 17.8407 10.7545 17.9605 10.9005 17.99C10.9662 18.0033 11.0338 18.0033 11.0995 17.99C11.2455 17.9605 11.3693 17.8407 11.6168 17.601L18.8038 10.6427C20.826 8.6849 21.0715 5.46317 19.3708 3.20398L19.051 2.77919C17.0165 0.0765532 12.9327 0.529805 11.5031 3.61691C11.3011 4.05298 10.6989 4.05298 10.4969 3.61691C9.06734 0.529805 4.98349 0.0765572 2.94896 2.77919L2.62917 3.20399C0.928464 5.46318 1.17402 8.68489 3.19615 10.6427Z" stroke="#926C88" strokeWidth="2"/>
</svg>

              </div>
              <div className="text-[#DDDDDD] text-[14px]">Полученные лайки</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.19615 10.6427L10.3832 17.601C10.6307 17.8407 10.7545 17.9605 10.9005 17.99C10.9662 18.0033 11.0338 18.0033 11.0995 17.99C11.2455 17.9605 11.3693 17.8407 11.6168 17.601L18.8038 10.6427C20.826 8.6849 21.0715 5.46317 19.3708 3.20398L19.051 2.77919C17.0165 0.0765532 12.9327 0.529805 11.5031 3.61691C11.3011 4.05298 10.6989 4.05298 10.4969 3.61691C9.06734 0.529805 4.98349 0.0765572 2.94896 2.77919L2.62917 3.20399C0.928464 5.46318 1.17402 8.68489 3.19615 10.6427Z" stroke="#926C88" strokeWidth="2"/>
</svg>

              </div>
              <div className="text-[#DDDDDD] text-[14px]">Полученные лайки</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {Array.from({ length: 5 }, (e, _) => (
                <LikeBox
              count={4}
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))}
            </div>
          </div>
        );
      }
}
const OutLikes = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.85 6.65C2.85 7.17467 3.27533 7.6 3.8 7.6C4.32467 7.6 4.75 7.17467 4.75 6.65V4.75H6.65C7.17467 4.75 7.6 4.32467 7.6 3.8C7.6 3.27533 7.17467 2.85 6.65 2.85H4.75V0.95C4.75 0.425329 4.32467 0 3.8 0C3.27533 0 2.85 0.42533 2.85 0.95V2.85H0.95C0.425329 2.85 0 3.27533 0 3.8C0 4.32467 0.425329 4.75 0.95 4.75H2.85V6.65Z" fill="#926C88"/>
<path d="M10.45 1.9C15.172 1.9 19 5.72796 19 10.45V15.3139C19 15.6926 19 16.0193 18.9832 16.2902C18.9655 16.5752 18.9266 16.8609 18.8203 17.146C18.5314 17.9205 17.9205 18.5314 17.146 18.8203C16.8609 18.9266 16.5752 18.9655 16.2902 18.9832C16.0193 19 15.6926 19 15.3139 19H10.45C5.72796 19 1.9 15.172 1.9 10.45H3.8C3.8 14.1227 6.77731 17.1 10.45 17.1H15.2864C15.7003 17.1 15.9675 17.0996 16.1725 17.0869C16.3699 17.0746 16.4459 17.0536 16.482 17.0401C16.7402 16.9438 16.9438 16.7402 17.0401 16.482C17.0536 16.4459 17.0746 16.3699 17.0869 16.1725C17.0996 15.9675 17.1 15.7003 17.1 15.2864V10.45C17.1 6.77731 14.1227 3.8 10.45 3.8V1.9Z" fill="#926C88"/>
<path d="M6.65 9.5C6.65 8.97533 7.07533 8.55 7.6 8.55H13.3C13.8247 8.55 14.25 8.97533 14.25 9.5C14.25 10.0247 13.8247 10.45 13.3 10.45H7.6C7.07533 10.45 6.65 10.0247 6.65 9.5Z" fill="#926C88"/>
<path d="M10.45 12.35C9.92533 12.35 9.5 12.7753 9.5 13.3C9.5 13.8247 9.92533 14.25 10.45 14.25H13.3C13.8247 14.25 14.25 13.8247 14.25 13.3C14.25 12.7753 13.8247 12.35 13.3 12.35H10.45Z" fill="#926C88"/>
</svg>


              </div>
              <div className="text-[#DDDDDD] text-[14px]">Отправленные лайки</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.85 6.65C2.85 7.17467 3.27533 7.6 3.8 7.6C4.32467 7.6 4.75 7.17467 4.75 6.65V4.75H6.65C7.17467 4.75 7.6 4.32467 7.6 3.8C7.6 3.27533 7.17467 2.85 6.65 2.85H4.75V0.95C4.75 0.425329 4.32467 0 3.8 0C3.27533 0 2.85 0.42533 2.85 0.95V2.85H0.95C0.425329 2.85 0 3.27533 0 3.8C0 4.32467 0.425329 4.75 0.95 4.75H2.85V6.65Z" fill="#926C88"/>
<path d="M10.45 1.9C15.172 1.9 19 5.72796 19 10.45V15.3139C19 15.6926 19 16.0193 18.9832 16.2902C18.9655 16.5752 18.9266 16.8609 18.8203 17.146C18.5314 17.9205 17.9205 18.5314 17.146 18.8203C16.8609 18.9266 16.5752 18.9655 16.2902 18.9832C16.0193 19 15.6926 19 15.3139 19H10.45C5.72796 19 1.9 15.172 1.9 10.45H3.8C3.8 14.1227 6.77731 17.1 10.45 17.1H15.2864C15.7003 17.1 15.9675 17.0996 16.1725 17.0869C16.3699 17.0746 16.4459 17.0536 16.482 17.0401C16.7402 16.9438 16.9438 16.7402 17.0401 16.482C17.0536 16.4459 17.0746 16.3699 17.0869 16.1725C17.0996 15.9675 17.1 15.7003 17.1 15.2864V10.45C17.1 6.77731 14.1227 3.8 10.45 3.8V1.9Z" fill="#926C88"/>
<path d="M6.65 9.5C6.65 8.97533 7.07533 8.55 7.6 8.55H13.3C13.8247 8.55 14.25 8.97533 14.25 9.5C14.25 10.0247 13.8247 10.45 13.3 10.45H7.6C7.07533 10.45 6.65 10.0247 6.65 9.5Z" fill="#926C88"/>
<path d="M10.45 12.35C9.92533 12.35 9.5 12.7753 9.5 13.3C9.5 13.8247 9.92533 14.25 10.45 14.25H13.3C13.8247 14.25 14.25 13.8247 14.25 13.3C14.25 12.7753 13.8247 12.35 13.3 12.35H10.45Z" fill="#926C88"/>
</svg>


              </div>
              <div className="text-[#DDDDDD] text-[14px]">Отправленные лайки</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {/* {Array.from({ length: 5 }, (e, _) => (
                <LikeBox
              count={4}
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))} */}
              {
                info?.random_friends.slice(0,20).map(e=> {
                  return(
                    <LikeBox link={e.profile_link} count={3} img={e.avatar} name={`${info?.last_name} ${info?.first_name}`}/>
                  )
                })
              }
            </div>
          </div>
        );
      }
}
const Comments = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.554688 9.44444C0.554688 4.22842 4.78311 0 9.99913 0C15.2152 0 19.4436 4.22842 19.4436 9.44444V14.8182V14.8525C19.4436 15.3224 19.4436 15.7278 19.4191 16.0628C19.3934 16.4158 19.3366 16.7683 19.1823 17.1134C18.881 17.7872 18.3419 18.3263 17.6681 18.6276C17.3229 18.7819 16.9705 18.8387 16.6175 18.8645C16.2825 18.8889 15.877 18.8889 15.4071 18.8889H15.3729H9.99913C4.78311 18.8889 0.554688 14.6605 0.554688 9.44444ZM9.99913 2C5.88768 2 2.55469 5.33299 2.55469 9.44444C2.55469 13.5559 5.88768 16.8889 9.99913 16.8889H15.3729C15.8867 16.8889 16.2184 16.8883 16.4719 16.8698C16.7154 16.852 16.8073 16.8216 16.8518 16.8018C17.0764 16.7014 17.2561 16.5217 17.3565 16.2971C17.3763 16.2527 17.4067 16.1607 17.4245 15.9172C17.443 15.6638 17.4436 15.332 17.4436 14.8182V9.44444C17.4436 5.33299 14.1106 2 9.99913 2ZM5.83247 8.38889C5.83247 7.8366 6.28018 7.38889 6.83247 7.38889H13.1658C13.7181 7.38889 14.1658 7.8366 14.1658 8.38889C14.1658 8.94117 13.7181 9.38889 13.1658 9.38889H6.83247C6.28018 9.38889 5.83247 8.94117 5.83247 8.38889ZM9.99913 11.6111C9.44685 11.6111 8.99913 12.0588 8.99913 12.6111C8.99913 13.1634 9.44685 13.6111 9.99913 13.6111H13.1658C13.7181 13.6111 14.1658 13.1634 14.1658 12.6111C14.1658 12.0588 13.7181 11.6111 13.1658 11.6111H9.99913Z" fill="#926C88"/>
</svg>


              </div>
              <div className="text-[#DDDDDD] text-[14px]">Полученные комментарии</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.554688 9.44444C0.554688 4.22842 4.78311 0 9.99913 0C15.2152 0 19.4436 4.22842 19.4436 9.44444V14.8182V14.8525C19.4436 15.3224 19.4436 15.7278 19.4191 16.0628C19.3934 16.4158 19.3366 16.7683 19.1823 17.1134C18.881 17.7872 18.3419 18.3263 17.6681 18.6276C17.3229 18.7819 16.9705 18.8387 16.6175 18.8645C16.2825 18.8889 15.877 18.8889 15.4071 18.8889H15.3729H9.99913C4.78311 18.8889 0.554688 14.6605 0.554688 9.44444ZM9.99913 2C5.88768 2 2.55469 5.33299 2.55469 9.44444C2.55469 13.5559 5.88768 16.8889 9.99913 16.8889H15.3729C15.8867 16.8889 16.2184 16.8883 16.4719 16.8698C16.7154 16.852 16.8073 16.8216 16.8518 16.8018C17.0764 16.7014 17.2561 16.5217 17.3565 16.2971C17.3763 16.2527 17.4067 16.1607 17.4245 15.9172C17.443 15.6638 17.4436 15.332 17.4436 14.8182V9.44444C17.4436 5.33299 14.1106 2 9.99913 2ZM5.83247 8.38889C5.83247 7.8366 6.28018 7.38889 6.83247 7.38889H13.1658C13.7181 7.38889 14.1658 7.8366 14.1658 8.38889C14.1658 8.94117 13.7181 9.38889 13.1658 9.38889H6.83247C6.28018 9.38889 5.83247 8.94117 5.83247 8.38889ZM9.99913 11.6111C9.44685 11.6111 8.99913 12.0588 8.99913 12.6111C8.99913 13.1634 9.44685 13.6111 9.99913 13.6111H13.1658C13.7181 13.6111 14.1658 13.1634 14.1658 12.6111C14.1658 12.0588 13.7181 11.6111 13.1658 11.6111H9.99913Z" fill="#926C88"/>
</svg>



              </div>
              <div className="text-[#DDDDDD] text-[14px]">Полученные комментарии</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {/* {Array.from({ length: 5 }, (e, _) => (
                <LikeBox
              count={4}
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))} */}
              {
                info?.top_commenters.slice(0,5).map(e=> {
                  return(
                    <LikeBox link={e.profile_link} count={3} img={e.avatar} name={`${info?.last_name} ${info?.first_name}`}/>
                  )
                })
              }
            </div>
          </div>
        );
      }
}
const OutComments = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35 7.53892C3.35 8.06359 3.77533 8.48892 4.3 8.48892C4.82467 8.48892 5.25 8.06359 5.25 7.53892V5.63892H7.15C7.67467 5.63892 8.1 5.21359 8.1 4.68892C8.1 4.16425 7.67467 3.73892 7.15 3.73892H5.25V1.83892C5.25 1.31425 4.82467 0.888916 4.3 0.888916C3.77533 0.888916 3.35 1.31425 3.35 1.83892V3.73892H1.45C0.925329 3.73892 0.5 4.16425 0.5 4.68892C0.5 5.21359 0.925329 5.63892 1.45 5.63892H3.35V7.53892Z" fill="#926C88"/>
<path d="M10.95 2.78892C15.672 2.78892 19.5 6.61688 19.5 11.3389V16.2029C19.5 16.5815 19.5 16.9082 19.4832 17.1791C19.4655 17.4641 19.4266 17.7498 19.3203 18.0349C19.0314 18.8094 18.4205 19.4203 17.646 19.7092C17.3609 19.8156 17.0752 19.8544 16.7902 19.8721C16.5193 19.8889 16.1926 19.8889 15.8139 19.8889H10.95C6.22796 19.8889 2.4 16.061 2.4 11.3389H4.3C4.3 15.0116 7.27731 17.9889 10.95 17.9889H15.7864C16.2003 17.9889 16.4675 17.9885 16.6725 17.9758C16.8699 17.9635 16.9459 17.9425 16.982 17.929C17.2402 17.8327 17.4438 17.6291 17.5401 17.3709C17.5536 17.3348 17.5746 17.2588 17.5869 17.0614C17.5996 16.8564 17.6 16.5892 17.6 16.1753V11.3389C17.6 7.66622 14.6227 4.68892 10.95 4.68892V2.78892Z" fill="#926C88"/>
<path d="M7.15 10.3889C7.15 9.86425 7.57533 9.43892 8.1 9.43892H13.8C14.3247 9.43892 14.75 9.86425 14.75 10.3889C14.75 10.9136 14.3247 11.3389 13.8 11.3389H8.1C7.57533 11.3389 7.15 10.9136 7.15 10.3889Z" fill="#926C88"/>
<path d="M10.95 13.2389C10.4253 13.2389 10 13.6642 10 14.1889C10 14.7136 10.4253 15.1389 10.95 15.1389H13.8C14.3247 15.1389 14.75 14.7136 14.75 14.1889C14.75 13.6642 14.3247 13.2389 13.8 13.2389H10.95Z" fill="#926C88"/>
</svg>



              </div>
              <div className="text-[#DDDDDD] text-[14px]">Отправленные комментарии</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.35 7.53892C3.35 8.06359 3.77533 8.48892 4.3 8.48892C4.82467 8.48892 5.25 8.06359 5.25 7.53892V5.63892H7.15C7.67467 5.63892 8.1 5.21359 8.1 4.68892C8.1 4.16425 7.67467 3.73892 7.15 3.73892H5.25V1.83892C5.25 1.31425 4.82467 0.888916 4.3 0.888916C3.77533 0.888916 3.35 1.31425 3.35 1.83892V3.73892H1.45C0.925329 3.73892 0.5 4.16425 0.5 4.68892C0.5 5.21359 0.925329 5.63892 1.45 5.63892H3.35V7.53892Z" fill="#926C88"/>
<path d="M10.95 2.78892C15.672 2.78892 19.5 6.61688 19.5 11.3389V16.2029C19.5 16.5815 19.5 16.9082 19.4832 17.1791C19.4655 17.4641 19.4266 17.7498 19.3203 18.0349C19.0314 18.8094 18.4205 19.4203 17.646 19.7092C17.3609 19.8156 17.0752 19.8544 16.7902 19.8721C16.5193 19.8889 16.1926 19.8889 15.8139 19.8889H10.95C6.22796 19.8889 2.4 16.061 2.4 11.3389H4.3C4.3 15.0116 7.27731 17.9889 10.95 17.9889H15.7864C16.2003 17.9889 16.4675 17.9885 16.6725 17.9758C16.8699 17.9635 16.9459 17.9425 16.982 17.929C17.2402 17.8327 17.4438 17.6291 17.5401 17.3709C17.5536 17.3348 17.5746 17.2588 17.5869 17.0614C17.5996 16.8564 17.6 16.5892 17.6 16.1753V11.3389C17.6 7.66622 14.6227 4.68892 10.95 4.68892V2.78892Z" fill="#926C88"/>
<path d="M7.15 10.3889C7.15 9.86425 7.57533 9.43892 8.1 9.43892H13.8C14.3247 9.43892 14.75 9.86425 14.75 10.3889C14.75 10.9136 14.3247 11.3389 13.8 11.3389H8.1C7.57533 11.3389 7.15 10.9136 7.15 10.3889Z" fill="#926C88"/>
<path d="M10.95 13.2389C10.4253 13.2389 10 13.6642 10 14.1889C10 14.7136 10.4253 15.1389 10.95 15.1389H13.8C14.3247 15.1389 14.75 14.7136 14.75 14.1889C14.75 13.6642 14.3247 13.2389 13.8 13.2389H10.95Z" fill="#926C88"/>
</svg>




              </div>
              <div className="text-[#DDDDDD] text-[14px]">Отправленные комментарии</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {Array.from({ length: 5 }, (e, _) => (
                <LikeBox
              count={4}
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))}
            </div>
          </div>
        );
      }
}
const GroupsBox = (props:IGroup)=> {
    return(
        <div className="bg-[#DDDDDD] p-[10px] rounded-[10px] flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <div>
          <img className='w-[16px] h-[16px] rounded-[50px]' width={16} height={16} src={props.img}/>
          </div>
          <div className="underline text-[#222222] text-[14px]">{props.name}</div>
        </div>
        <div className="flex gap-[10px] items-center">
            <div><a className="text-[#222222] text-[14px] underline" href={props.url}>Ссылка</a></div>
          
        </div>
      </div>    
    )
}
const Groups = (props:IPerepiski)=> {
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 15.4601V2.56724C1.5 2.24736 1.5 2.08742 1.59436 1.98805C1.68872 1.88867 1.84059 1.88867 2.14433 1.88867H15.4083C16.0703 1.88867 16.4014 1.88867 16.4837 2.09812C16.5661 2.30757 16.332 2.55407 15.8639 3.04707L10.8851 8.29053C10.7133 8.47148 10.6273 8.56196 10.6273 8.67439C10.6273 8.78682 10.7133 8.87729 10.8851 9.05824L15.8639 14.3017C16.332 14.7947 16.5661 15.0412 16.4837 15.2507C16.4014 15.4601 16.0703 15.4601 15.4083 15.4601H1.5ZM1.5 15.4601V20.8887" stroke="#926C88" strokeWidth="2" strokeLinecap="round"/>
</svg>





              </div>
              <div className="text-[#DDDDDD] text-[14px]">Подозрительные группы</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=>{
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 15.4601V2.56724C1.5 2.24736 1.5 2.08742 1.59436 1.98805C1.68872 1.88867 1.84059 1.88867 2.14433 1.88867H15.4083C16.0703 1.88867 16.4014 1.88867 16.4837 2.09812C16.5661 2.30757 16.332 2.55407 15.8639 3.04707L10.8851 8.29053C10.7133 8.47148 10.6273 8.56196 10.6273 8.67439C10.6273 8.78682 10.7133 8.87729 10.8851 9.05824L15.8639 14.3017C16.332 14.7947 16.5661 15.0412 16.4837 15.2507C16.4014 15.4601 16.0703 15.4601 15.4083 15.4601H1.5ZM1.5 15.4601V20.8887" stroke="#926C88" strokeWidth="2" strokeLinecap="round"/>
</svg>





              </div>
              <div className="text-[#DDDDDD] text-[14px]">Подозрительные группы</div>
            </div>
            <div className="w-full aspect-square flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
              {Array.from({ length: 5 }, (e, _) => (
                <GroupsBox
              url="frffarfsfsr"
              img={info?.avatar_url || ''}
              name={`${info?.last_name} ${info?.first_name}`}
                  key={_}
                />
              ))}
            </div>
          </div>
        );
      }
}
const Result = (props:IPerepiski)=> {
  
    const {push} = useRouter();
    if (props.active == false) {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.24759 20.8887L1.02817 17.2751C0.556362 9.50535 6.06774 2.84711 13.3692 1.89433C13.9634 1.81679 14.2287 2.55543 13.7607 2.94077C10.9862 5.22539 9.37101 8.68426 9.37101 12.3414C9.37101 14.8962 7.08234 16.8006 4.65527 16.2653L1.24759 15.5137" stroke="#926C88" strokeWidth="2"/>
</svg>
              </div>
              <div className="text-[#DDDDDD] text-[14px]">Результат проверки</div>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square relative gap-[20px] w-full rounded-[10px]">
            <div style={{backgroundImage:"url('/spo.png')"}} className="bg-black -z-[50] img absolute w-full h-full"></div>
              <div className="text-[#DDDDDD] font-[500] text-[16px] text-center max-w-[264px]">
              Активируйте пробный тариф за 14₽, чтобы посмотреть, с кем аккаунт взаимодействует чаще всего!
              </div>
              <div>
                <button onClick={()=> {
                  const tarifData = encodeURIComponent(JSON.stringify(Tarif));
                  push(`/pay?tarif=Пробный`);
                }} className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]">
                Активировать
                </button>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
            <div className="flex gap-[10px] items-center">
              <div>
              <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.24759 20.8887L1.02817 17.2751C0.556362 9.50535 6.06774 2.84711 13.3692 1.89433C13.9634 1.81679 14.2287 2.55543 13.7607 2.94077C10.9862 5.22539 9.37101 8.68426 9.37101 12.3414C9.37101 14.8962 7.08234 16.8006 4.65527 16.2653L1.24759 15.5137" stroke="#926C88" strokeWidth="2"/>
</svg>


              </div>
              <div className="text-[#DDDDDD] text-[14px]">Результат проверки</div>
            </div>
            <div className="w-full  flex flex-col gap-[10px] overflow-y-auto bg-[#000000]">
           <ResultBox active="Средняя" blackList={54} podozritelnost="Низкая" img={info?.avatar_url ||''} name={`${info?.first_name} ${info?.last_name}`} url={link.url ||''}  />
            </div>
          </div>
        );
      } 
}
const ResultBox = (props:IResut)=> {
    const percent = props.blackList;
return(
    <div className="py-[10px] px-[20px] flex flex-col gap-[20px] justify-between h-full">
        <div className="flex w-full gap-[10px] ">
            <div><img src={props.img} width={48} height={48} className="rounded-[50px] h-[48px] w-[48px]"  /></div>
            <div >
                <div className="text-[#DDDDDD] text-[14px] font-[500]">{props.name}</div>
                <div className="text-[12px] text-[#AAAAAA]">{props.url}</div>
            </div>
        </div>
        <div>
            <div className="text-[#DDDDDD] text-[14px]">Активность: <span className={`text-[#8E6123]`}>{props.active}</span></div>
            <div className="text-[#DDDDDD] text-[14px]">Подозрительность: <span className="text-[#238E33]">{props.podozritelnost}</span></div>
            <div className="text-[#DDDDDD] text-[14px]">БлэкЛист: <span className="text-[#238E33]">{props.blackList}%</span></div>
        </div>
        <div className="bg-[#DDDDDD] w-full p-[5px] rounded-[10px]">
            <div style={{width:`${percent}%`}} className={` bg-[#27238E] h-[8px] rounded-[10px]`}></div>
        </div>
    </div>
)
}
const Up = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button 
            onClick={scrollToTop} 
            className="mb-[61px] w-[135px] h-[44px] cursor-pointer mx-auto text-[#FFFFFF] text-[16px] bg-[#926C88] rounded-[50px]"
        >
            Наверх
        </button>
    );
};
const PoslaniaBox = (props:{text:string})=> {

return(
  <div className="relative flex bg-[#DDDDDD] rounded-[20px] gap-[10px] p-[10px] h-[86px] flex-shrink-0">
  <div className=""><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="21" fill="#222222"/>
<path d="M26.06 22.5011C24.2 22.5011 22.64 23.8311 22.24 25.6011C21.29 25.1911 20.42 25.3011 19.76 25.5911C19.35 23.8111 17.79 22.5011 15.94 22.5011C13.77 22.5011 12 24.2911 12 26.5011C12 28.7111 13.77 30.5011 15.94 30.5011C18 30.5011 19.68 28.8811 19.84 26.8211C20.18 26.5811 21.07 26.1311 22.16 26.8411C22.34 28.8911 24 30.5011 26.06 30.5011C28.23 30.5011 30 28.7111 30 26.5011C30 24.2911 28.23 22.5011 26.06 22.5011ZM15.94 29.3611C14.38 29.3611 13.13 28.0811 13.13 26.5011C13.13 24.9211 14.39 23.6411 15.94 23.6411C17.5 23.6411 18.75 24.9211 18.75 26.5011C18.75 28.0811 17.5 29.3611 15.94 29.3611ZM26.06 29.3611C24.5 29.3611 23.25 28.0811 23.25 26.5011C23.25 24.9211 24.5 23.6411 26.06 23.6411C27.62 23.6411 28.88 24.9211 28.88 26.5011C28.88 28.0811 27.61 29.3611 26.06 29.3611ZM31 20.0011H11V21.5011H31V20.0011ZM24.53 12.1311C24.31 11.6411 23.75 11.3811 23.22 11.5511L21 12.2911L18.77 11.5511L18.72 11.5411C18.19 11.3911 17.63 11.6711 17.43 12.1811L15 18.5011H27L24.56 12.1811L24.53 12.1311Z" fill="#DDDDDD"/>
</svg>


</div>
  <div><p className="text-[12px] text-[#222222] font-[400]">{props.text}</p></div>
  <div className="absolute right-[10px] bottom-[10px]"><h1>недавно</h1></div>
</div>
)
}
const Poslania = (props:IPerepiski)=> {
  const {push} = useRouter();
  if (props.active == false) {
      return (
        <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
          <div className="flex gap-[10px] items-center">
            <div>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.054 9.84288C12.38 9.84288 10.976 11.0328 10.616 12.6163C9.761 12.2495 8.978 12.3479 8.384 12.6073C8.015 11.0149 6.611 9.84288 4.946 9.84288C2.993 9.84288 1.4 11.4443 1.4 13.4214C1.4 15.3986 2.993 17 4.946 17C6.8 17 8.312 15.5507 8.456 13.7077C8.762 13.493 9.563 13.0904 10.544 13.7256C10.706 15.5596 12.2 17 14.054 17C16.007 17 17.6 15.3986 17.6 13.4214C17.6 11.4443 16.007 9.84288 14.054 9.84288ZM4.946 15.9801C3.542 15.9801 2.417 14.835 2.417 13.4214C2.417 12.0079 3.551 10.8628 4.946 10.8628C6.35 10.8628 7.475 12.0079 7.475 13.4214C7.475 14.835 6.35 15.9801 4.946 15.9801ZM14.054 15.9801C12.65 15.9801 11.525 14.835 11.525 13.4214C11.525 12.0079 12.65 10.8628 14.054 10.8628C15.458 10.8628 16.592 12.0079 16.592 13.4214C16.592 14.835 15.449 15.9801 14.054 15.9801ZM18.5 7.60629H0.5V8.94825H18.5V7.60629ZM12.677 0.565474C12.479 0.127101 11.975 -0.105505 11.498 0.0465833L9.5 0.708616L7.493 0.0465833L7.448 0.0376369C6.971 -0.096559 6.467 0.15394 6.287 0.610206L4.1 6.26433H14.9L12.704 0.610206L12.677 0.565474Z" fill="#926C88"/>
</svg>

            </div>
            <div className="text-[#DDDDDD] text-[14px]">Тайные послания для пользователя</div>
          </div>
          <div className="flex flex-col items-center justify-between aspect-square relative gap-[20px] w-full">
            <div className="relative flex bg-[#DDDDDD] rounded-[20px] gap-[10px] p-[10px] h-[86px] flex-shrink-0">
              <div className=""><svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="21" fill="#222222"/>
<path d="M26.06 22.5011C24.2 22.5011 22.64 23.8311 22.24 25.6011C21.29 25.1911 20.42 25.3011 19.76 25.5911C19.35 23.8111 17.79 22.5011 15.94 22.5011C13.77 22.5011 12 24.2911 12 26.5011C12 28.7111 13.77 30.5011 15.94 30.5011C18 30.5011 19.68 28.8811 19.84 26.8211C20.18 26.5811 21.07 26.1311 22.16 26.8411C22.34 28.8911 24 30.5011 26.06 30.5011C28.23 30.5011 30 28.7111 30 26.5011C30 24.2911 28.23 22.5011 26.06 22.5011ZM15.94 29.3611C14.38 29.3611 13.13 28.0811 13.13 26.5011C13.13 24.9211 14.39 23.6411 15.94 23.6411C17.5 23.6411 18.75 24.9211 18.75 26.5011C18.75 28.0811 17.5 29.3611 15.94 29.3611ZM26.06 29.3611C24.5 29.3611 23.25 28.0811 23.25 26.5011C23.25 24.9211 24.5 23.6411 26.06 23.6411C27.62 23.6411 28.88 24.9211 28.88 26.5011C28.88 28.0811 27.61 29.3611 26.06 29.3611ZM31 20.0011H11V21.5011H31V20.0011ZM24.53 12.1311C24.31 11.6411 23.75 11.3811 23.22 11.5511L21 12.2911L18.77 11.5511L18.72 11.5411C18.19 11.3911 17.63 11.6711 17.43 12.1811L15 18.5011H27L24.56 12.1811L24.53 12.1311Z" fill="#DDDDDD"/>
</svg>


</div>
              <div><p className="text-[12px] text-[#222222] font-[400]">“Я про тебя такое знаю... дай бог, чтобы никто случайно не узнал)”</p></div>
              <div className="absolute right-[10px] bottom-[10px]"><h1>недавно</h1></div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full rounded-[10px] overflow-hidden relative">
  <div style={{backgroundImage:"url('/spo2.png')"}} className="bg-black -z-[50] absolute w-full h-full"></div>
  <div>
    <button
      onClick={() => {
        const tarifData = encodeURIComponent(JSON.stringify(Tarif));
        push(`/pay?tarif=Пробный`);
      }}
      className="bg-[#8E2373B2] rounded-[50px] text-[#FFFFFF] text-[16px] py-[10px] px-[40px]"
    >
      Узнать, кто это
    </button>
  </div>
</div>

        
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-[10px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center">
          <div className="flex gap-[10px] items-center">
            <div>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.054 9.84288C12.38 9.84288 10.976 11.0328 10.616 12.6163C9.761 12.2495 8.978 12.3479 8.384 12.6073C8.015 11.0149 6.611 9.84288 4.946 9.84288C2.993 9.84288 1.4 11.4443 1.4 13.4214C1.4 15.3986 2.993 17 4.946 17C6.8 17 8.312 15.5507 8.456 13.7077C8.762 13.493 9.563 13.0904 10.544 13.7256C10.706 15.5596 12.2 17 14.054 17C16.007 17 17.6 15.3986 17.6 13.4214C17.6 11.4443 16.007 9.84288 14.054 9.84288ZM4.946 15.9801C3.542 15.9801 2.417 14.835 2.417 13.4214C2.417 12.0079 3.551 10.8628 4.946 10.8628C6.35 10.8628 7.475 12.0079 7.475 13.4214C7.475 14.835 6.35 15.9801 4.946 15.9801ZM14.054 15.9801C12.65 15.9801 11.525 14.835 11.525 13.4214C11.525 12.0079 12.65 10.8628 14.054 10.8628C15.458 10.8628 16.592 12.0079 16.592 13.4214C16.592 14.835 15.449 15.9801 14.054 15.9801ZM18.5 7.60629H0.5V8.94825H18.5V7.60629ZM12.677 0.565474C12.479 0.127101 11.975 -0.105505 11.498 0.0465833L9.5 0.708616L7.493 0.0465833L7.448 0.0376369C6.971 -0.096559 6.467 0.15394 6.287 0.610206L4.1 6.26433H14.9L12.704 0.610206L12.677 0.565474Z" fill="#926C88"/>
</svg>


            </div>
            <div className="text-[#DDDDDD] text-[14px]">Тайные послания для пользователя</div>
          </div>
          <div className="w-full  flex flex-col gap-[10px] overflow-y-auto bg-[#000000] aspect-square">
       <PoslaniaBox text="“Я про тебя такое знаю... дай бог, чтобы никто случайно не узнал)”"/>
       <PoslaniaBox text="“Я про тебя такое знаю... дай бог, чтобы никто случайно не узнал)”"/>
       <PoslaniaBox text="“Я про тебя такое знаю... дай бог, чтобы никто случайно не узнал)”"/>
       <PoslaniaBox text="“Я про тебя такое знаю... дай бог, чтобы никто случайно не узнал)”"/>
          </div>
        </div>
      );
    } 
}
const Analiz = () => {
  const { push } = useRouter();
  const [man, setMan] = useState(0);
  const [woman, setWoman] = useState(0);

  // Пример массива возрастов
  useEffect(() => {
    if(info) {
    if(info.friends_female && info.friends_male) {
    const total = info.friends_male + info.friends_female;
    if (total > 0) {
      const manPercent = Math.round((info.friends_male / total) * 100);
      const womanPercent = 100 - manPercent; // или точно так же рассчитать через female
      setMan(manPercent);
      setWoman(womanPercent);
    } else {
      setMan(0);
      setWoman(0);
    }
  }}
  }, []);

  const [ageStats, setAgeStats] = useState([
    { label: "До 18", value: 0 },
    { label: "19-25", value: 0 },
    { label: "26-35", value: 0 },
    { label: "Больше 36", value: 0 },
  ]);

  useEffect(() => {
    const total = info?.friends_age_list?.length ||0;
    const groups = {
      "До 18": 0,
      "19-25": 0,
      "26-35": 0,
      "Больше 36": 0,
    };

    info?.friends_age_list?.forEach((age) => {
      if (age < 18) groups["До 18"]++;
      else if (age <= 25) groups["19-25"]++;
      else if (age <= 35) groups["26-35"]++;
      else groups["Больше 36"]++;
    });

    const stats = Object.entries(groups).map(([label, count]) => ({
      label,
      value: Math.round((count / total) * 100),
    }));

    setAgeStats(stats);
  }, [info?.friends_age_list]);

  return (
    <div className="flex flex-col gap-[19px] bg-[#8E237333]  rounded-[20px] p-[15px] items-center relative">
      <div className="flex gap-[10px] items-center">
        <div className="absolute left-[15px] top-[15px]">
          {/* иконка */}
        </div>
        <div className="text-[#DDDDDD] text-[14px]">Анализ друзей</div>
      </div>

      <div className="flex flex-col items-center justify-between relative gap-[15px] w-full">
        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full flex  items-center gap-[5px]">
            <div
              style={{ width: `${man}%` }}
              className="bg-[#27238E] h-[8px] rounded-[10px]"
            ></div>
            <div className="text-[#DDDDDD] text-[14px] font-[400] text-nowrap">
              {man}% М
            </div>
          </div>
          <div className="w-full flex  items-center gap-[5px]">
            <div
              style={{ width: `${woman}%` }}
              className="bg-[#8E2383] h-[8px] rounded-[10px]"
            ></div>
            <div className="text-[#DDDDDD] text-[14px] font-[400] text-nowrap">
              {woman}% Ж
            </div>
          </div>
        </div>

        <div className="h-full w-full flex flex-col gap-[15px]">
          <div className="text-[#DDDDDD] text-[14px] font-[400]">Возраст</div>
          <div className="flex flex-col gap-[10px]">
            {ageStats.map((item, index) => (
              <div
                key={index}
                className="flex w-full bg-[#DDDDDD] rounded-[100px] justify-between px-[10px] h-[26px] items-center"
              >
                <div className="text-[#444444] text-[14px] font-[400]">
                  {item.label}
                </div>
                <div className="text-[#444444] text-[14px] font-[400]">
                  {item.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface UserProfile {
  avatar_url: string;
  is_closed_profile: boolean;
  total_posts: number;
  followers_count: number;
  friends_count: number | null; // null если профиль закрыт
  friends_male: number;
  friends_female: number;
  friends_unknown_gender: number;
  friends_average_age: number;
  friends_age_list: number[];
  total_likes: number;
  total_views: number;
  total_comments: number;
  total_reposts: number;
  first_name: string;
  last_name: string;
   top_commenters: 
        {
            first_name: string,
            last_name:string,
            avatar:string,
            profile_link: string,
            comments: number
        }[];
         random_friends:{
           first_name: string,
            last_name: string,
            profile_link: string
             avatar:string,
         }[]
}

  const [tarif,setTarif] = useState<any>('');

async function Analyz(url:{url:string}) {



  const response = await fetch("https://blacklistone.ru/api/vk/analyze", { 
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData 
      },
      body: JSON.stringify(url)
  });
const data = await response.json();
 if(data) {

if(data?.detail =='Запросов не осталось') {
setLoading(false)
  setActiveLimit(true)
  return
}
  setInfo(data);
  localStorage.setItem('data',JSON.stringify(data))
  setLoading(false)
 }
}

const { push} = useRouter()
async function CheckTarif() {
const response = await fetch("https://blacklistone.ru/api/subs/current_subscription", { 
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData 
      },

  });
  if(response.ok) {
    const text = await response.text()
    if(text) {
      console.log(text,'qaqem vret');
      
      setTarif(text)
      return text;
    }
   
  }
  

}


  useEffect(()=> {
const act = localStorage.getItem('active');
if(act == 'true') {
  setActive(true)
}
else {
  setActive(false);
}
  },[])


  const searchParams = useParams()
  useEffect(() => {
 
    const id = searchParams.id as string; // Получаем параметр 'id'
    
    if (id) {
      setLink({ url: `https://vk.com/${id}` }); // Если id существует, устанавливаем его в состояние
    
    } else {
      setLink({ url: '' }); // Если id нет, устанавливаем пустую строку
    }
  }, []);

useEffect(()=> {

if(link.url !=='') {
  setTimeout(() => {
    Analyz(link)    
    CheckTarif()
  }, 1000);

}

},[link])
  
useEffect(()=> {

console.log(tarif);

},[info,tarif])


  useEffect(()=> {
console.log(tarif,'qaqaqem');

  },[tarif])
     async function Cancel() {
            const response = await fetch(
              "https://blacklistone.ru/api/subs/cancel_subscription",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "X-Telegram-InitData": window.Telegram.WebApp.initData, // Заголовок остается без изменений
                },
              }
            );
        
            const data = await response.json();
        
           
           
          
          }
  if(activeLimit ==true) return(
     <div className='max-w-[500px] flex flex-col justify-center items-center gap-[40px] w-[91%]  fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[999999999] bg-[#2B0821] rounded-[20px] p-[15px] '>
      <div className='flex flex-col gap-[15px] justify-'>
        <div className='flex items-center justify-center'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM12.2265 8.83234C15.4777 6.305 19.5631 4.8 24 4.8C34.6039 4.8 43.2 13.3961 43.2 24C43.2 28.4369 41.695 32.5223 39.1677 35.7735L12.2265 8.83234ZM8.83234 12.2265C6.305 15.4777 4.8 19.5631 4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C28.4369 43.2 32.5223 41.695 35.7735 39.1677L8.83234 12.2265Z" fill="#926C88"/>
</svg>
</div>
        <div className="text-[#926C88] text-[20px]">У вас исчерпан лимит проверок</div>
      </div>
      <div><button className='bg-[#8E2373B2] rounded-[50px] py-[10px] px-[60px] text-[16px] text-white' onClick={async()=> {
   await Cancel()
   push('/')
        
      }}>На Главную</button></div>
    </div>
  )
if(loading == true) return <Loading/>
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="max-w-[500px] mx-auto w-full flex flex-col gap-[30px] px-[20px]">
  
      <UserInfo
        name={`${info?.first_name} ${info?.last_name}`}
        comments={info?.total_comments ?? 0}
        friends={info?.friends_count ?? 0}
        img={info?.avatar_url||''}
        like={info?.total_likes?? 0}
        posts={info?.total_posts?? 0}
        
        reposts={info?.total_reposts?? 0}
        subs={info?.followers_count?? 0}
        views={info?.total_views?? 0}
      />
      <Perepiski active={tarif !== "null" ? true:false} />
      <Poslania active={tarif !== "null" ? true :false}/>
      <Analiz/>
      <Aktivonst active={tarif !== "null" ? true :false }/>
      <Friends active={tarif !== "null" ? true :false }/>
      <Likes active={tarif !== "null" ? true :false}/>
      <OutLikes active={tarif !== "null" ? true :false}/>x
      <Comments active={tarif !== "null" ? true :false}/>
      <OutComments active={tarif !== "null" ? true :false}/>
      <Groups active={tarif !== "null" ? true :false }/>
      <Result active={tarif !== "null" ? true :false}/>
      <Up/>
    </div>
    </Suspense>
  );
}
