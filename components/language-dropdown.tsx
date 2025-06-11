"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/contexts/translation-context";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "vi", name: "Tiếng Việt", flag: "fi-vn" },
  { code: "en", name: "English", flag: "fi-us" },
  { code: "zh", name: "中文", flag: "fi-cn" },
  { code: "ja", name: "日本語", flag: "fi-jp" },
  { code: "ko", name: "한국어", flag: "fi-kr" },
  { code: "th", name: "ไทย", flag: "fi-th" },
];

export default function LanguageDropdown() {
  const { currentLanguage, setCurrentLanguage } = useTranslation();
  
  const getCurrentLanguageData = (): Language => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language.code);
  };

  const currentLangData = getCurrentLanguageData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative dark:backdrop-blur-md dark:bg-white/10 dark:border-white/20 text-muted-foreground"
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex items-center gap-3 cursor-pointer",
              currentLanguage === language.code && "bg-accent"
            )}
          >
            <span className={`fi ${language.flag} w-4 h-3`}></span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 