"use client";
import { useEffect, useState } from "react";
import { HistoryBox } from "../components/historyBox/historyBox";
export default function History() {
  interface HistoryItem {
    date: string;
    first_name: string;
    link_for_picture: string;
    link_for_profile: string;
    second_name: string;
  }
  const [history, setHistory] = useState<HistoryItem[]>([]);
  async function History() {
    const response = await fetch(
      "https://blacklistone.ru/api/user_data/search_history",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Telegram-InitData": window.Telegram.WebApp.initData, // Заголовок остается без изменений
        },
      }
    );

    const data = await response.json();
    console.log(data);
    localStorage.setItem("history", JSON.stringify(data[window.Telegram.WebApp.initDataUnsafe.user.id]));
    setHistory(data[window.Telegram.WebApp.initDataUnsafe.user.id]);
  
  }
  useEffect(() => {
   
     
    setTimeout(() => {
      History().then(console.log); 
    }, 1000);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const data = localStorage.getItem("history");
        if (data) {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed)) {
            console.log("Загруженная история:", parsed);
            setHistory(parsed);
          } else {
            console.warn("Ожидался массив, но получено:", parsed);
          }
        }
      } catch (error) {
        console.error("Ошибка при разборе localStorage:", error);
      }
    }
  }, []);
  
  
  return (
    <div className="max-w-[500px] mx-auto w-full px-[20px] flex flex-col gap-[10px] mt-[30px]">
      <div className="text-[#DDDDDD] text-[16px]">Ваша история поиска:</div>
      <div className="flex flex-col gap-[10px]  overflow-y-auto pb-[110px]">
      {Array.isArray(history) &&
  history.length > 0 &&
  history.map((item, index) => {
    const formattedDate = new Date(item.date).toLocaleDateString("ru-RU"); // Получим формат DD.MM.YYYY

    return (
      <HistoryBox
        key={index}
        img={item?.link_for_picture}
        date={formattedDate}
info="Только что" name={`${item?.first_name} ${item?.second_name}`}
link={item?.link_for_profile}
      />
    );
  })}

      </div>
    </div>
  );
}
