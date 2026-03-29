"use client";

import {
  IconHome,
  IconCurrencyEuro,
  IconClipboardList,
  IconReceipt,
  IconScale,
  IconBuildingBank,
  IconHash,
  IconTrendingUp,
  IconBuildingMonument,
  IconFileText,
  IconRuler,
  IconCake,
  IconCalendar,
  IconGasStation,
  IconCar,
  IconBabyCarriage,
  IconApple,
  IconBarbell,
  IconChartBar,
  IconFlower,
  IconCalculator,
  IconCoins,
  IconHeartbeat,
  IconLock,
  IconCircleCheck,
  IconBolt,
  IconDeviceMobile,
  IconUmbrella,
  IconUsers,
  IconGavel,
  IconClock,
  IconWallet,
  IconPig,
  IconCreditCard,
  IconRefresh,
  IconBriefcase,
} from "@tabler/icons-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ size?: number; stroke?: number; className?: string }>> = {
  home: IconHome,
  "currency-euro": IconCurrencyEuro,
  "clipboard-list": IconClipboardList,
  receipt: IconReceipt,
  scale: IconScale,
  "building-bank": IconBuildingBank,
  hash: IconHash,
  "trending-up": IconTrendingUp,
  "building-columns": IconBuildingMonument,
  "file-text": IconFileText,
  ruler: IconRuler,
  cake: IconCake,
  calendar: IconCalendar,
  "gas-station": IconGasStation,
  car: IconCar,
  "baby-carriage": IconBabyCarriage,
  apple: IconApple,
  barbell: IconBarbell,
  "chart-bar": IconChartBar,
  flower: IconFlower,
  calculator: IconCalculator,
  coins: IconCoins,
  heartbeat: IconHeartbeat,
  lock: IconLock,
  "circle-check": IconCircleCheck,
  bolt: IconBolt,
  "device-mobile": IconDeviceMobile,
  umbrella: IconUmbrella,
  users: IconUsers,
  gavel: IconGavel,
  clock: IconClock,
  wallet: IconWallet,
  pig: IconPig,
  "credit-card": IconCreditCard,
  refresh: IconRefresh,
  briefcase: IconBriefcase,
};

interface TablerIconProps {
  name: string;
  size?: number;
  stroke?: number;
  className?: string;
}

export default function TablerIcon({ name, size = 24, stroke = 1.5, className }: TablerIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} stroke={stroke} className={className} />;
}
