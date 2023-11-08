import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme(){
    let context = useContext(ThemeContext);
    if(context === undefined){
        new Error('theme context should be only used in themecontextprovider!!!')
    }
    return context;
}