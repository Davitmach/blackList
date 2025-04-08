'use client';

import { useTelegramButtons } from '@/app/hooks/btn';

export default function TelegramControlsClient() {
  useTelegramButtons();
  return null; // ничего не рендерим, просто хук
}
