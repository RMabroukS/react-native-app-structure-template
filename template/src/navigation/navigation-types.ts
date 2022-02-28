import { IconsName } from "../assets/svgs";



export type MainAppStackTypes = {
  Splash: undefined,
  HomeStack: undefined
}


export type HomeStackTypes = {
  Home: undefined,
  TabButtonsStack: undefined
};
export type TabButtonStackTypes = {
  Home: { icon: IconsName, text: string },
  Home2: { icon: IconsName, text: string },
  Home3: { icon: IconsName, text: string },
  Home4: { icon: IconsName, text: string },
  Home5: { icon: IconsName, text: string },
};



export type MainNavigationTypes = HomeStackTypes | MainAppStackTypes