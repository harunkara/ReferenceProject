export interface ILocalizeLanguages {
  tr: string;
  en: string;
}

export interface ILocalizeData {
  name: ILocalizeLanguages;
  surname: ILocalizeLanguages;
  username: ILocalizeLanguages;
  password: ILocalizeLanguages;
}

export const localizeData: ILocalizeData = {
  name: { tr: "isim", en: "name" },
  surname: { tr: "soyisim", en: "surname" },
  username: { tr: "kullanıcı adı", en: "username" },
  password: { tr: "şifre", en: "password" },
};
