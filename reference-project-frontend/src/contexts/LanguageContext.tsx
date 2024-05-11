import { createContext, useState, ReactNode } from "react";
import { ILocalizeLanguages } from "../data/localizeData";

interface ILanguageContext {
  projectLanguage: keyof ILocalizeLanguages;
  setProjectLanguage: (newLanguage: keyof ILocalizeLanguages) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  projectLanguage: "tr",
  setProjectLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<keyof ILocalizeLanguages>("tr");

  const updateLanguage = (newLanguage: keyof ILocalizeLanguages) => {
    setLanguage(newLanguage);
  };

  const contextValue: ILanguageContext = {
    projectLanguage: language,
    setProjectLanguage: updateLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
