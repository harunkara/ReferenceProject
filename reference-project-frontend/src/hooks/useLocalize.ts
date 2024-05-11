import { useContext } from "react";
import {
  ILocalizeData,
  ILocalizeLanguages,
  localizeData,
} from "../data/localizeData";
import { StringCases } from "../utils/Cases";
import { LanguageContext } from "../contexts/LanguageContext";

export const useLocalize = (
  localizeWord: keyof ILocalizeData,
  stringCase?: StringCases
): string => {
  const localizedString = localizeData[localizeWord];
  const projectLanguage: keyof ILocalizeLanguages =
    useContext(LanguageContext).projectLanguage;

  switch (stringCase) {
    case StringCases.camelCase: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) =>
        index == 0
          ? value
          : value.charAt(0).toUpperCase() + value.slice(1, value.length)
      );
      return tempArray.join("");
    }
    case StringCases.PascalCase: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map(
        (value) => value.charAt(0).toUpperCase() + value.slice(1, value.length)
      );
      return tempArray.join("");
    }
    case StringCases.snake_case: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) =>
        index < tempArray.length - 1 ? value + "_" : value
      );
      return tempArray.join("");
    }
    case StringCases.SCREAMING_SNAKE_CASE: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) =>
        index < tempArray.length - 1
          ? value.toUpperCase() + "_"
          : value.toUpperCase()
      );
      return tempArray.join("");
    }
    case StringCases["kebab-case"]: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) =>
        index < tempArray.length - 1 ? value + "-" : value
      );
      return tempArray.join("");
    }
    case StringCases["Train-Case"]: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) => {
        const tempValue =
          value.charAt(0).toUpperCase() +
          value.slice(1, value.length).toUpperCase();
        return index < tempArray.length - 1 ? tempValue + "-" : tempValue;
      });
      return tempArray.join("");
    }
    case StringCases["Title Case"]: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map(
        (value) => value.charAt(0).toUpperCase() + value.slice(1, value.length)
      );
      return tempArray.join(" ");
    }
    case StringCases.UPPERCASE:
      return localizedString[projectLanguage].toUpperCase();
    case StringCases.lowercase:
      return localizedString[projectLanguage].toLowerCase();
    case StringCases["Capital case"]: {
      let tempArray = localizedString[projectLanguage].split(" ");
      tempArray = tempArray.map((value, index) =>
        index == 0
          ? value.charAt(0).toUpperCase() + value.slice(1, value.length)
          : value.toLowerCase()
      );
      return tempArray.join(" ");
    }
    default:
      return localizedString[projectLanguage];
  }
};
