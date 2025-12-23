import { useState } from "react";

export default function useLanguage() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = [
    { label: "English", flag: "🇬🇧" },
    { label: "Hindi", flag: "🇮🇳" },
    { label: "Tamil", flag: "🇮🇳" },
    { label: "Telugu", flag: "🇮🇳" },
  ];

  return {
    open,
    setOpen,
    language,
    setLanguage,
    languages,
  };
}
