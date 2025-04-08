'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export const useTelegramButtons = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const WebApp = window.Telegram?.WebApp;
    if (!WebApp) return;

    const BackButton = WebApp.BackButton;

    // Сброс предыдущих обработчиков
    BackButton.offClick();

    if (pathname === '/') {
      // На корневой странице Telegram показывает крестик сам, скрываем BackButton
      BackButton.hide();
    } else {
      // Показываем кнопку "Назад"
      BackButton.show();
      BackButton.onClick(() => {
        router.back();
      });
    }
  }, [pathname, router]);
};
