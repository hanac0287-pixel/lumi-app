"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  onSave: () => void;
}

export default function Header({ onSave }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between py-4">
      {/* 뒤로가기 */}
      <button
        onClick={() => router.back()}
        className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <Image
          src="/images/icons/back.svg"
          alt="Back"
          width={22}
          height={22}
        />
      </button>

      {/* 로고 */}
      <div className="text-center">
        <h1 className="text-xl font-extrabold text-orange-500">
          LUMI
        </h1>

        <p className="text-xs text-gray-400">
          Your Lucky Mate
        </p>
      </div>

      {/* 저장 */}
      
      <button
        onClick={onSave}
        className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
      >
        <Image
          src="/images/icons/save.svg"
          alt="Save"
          width={20}
          height={20}
        />
      </button>
    </header>
  );
}