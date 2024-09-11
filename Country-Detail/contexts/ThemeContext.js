import { createContext,useState} from "react";
//context create karne ke liye hook

//we can;t use usestate here but we try below last
export const ThemeContext = createContext()

// console.log(ThemeContext)

export function ThemeProvider ({children}){
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem('isDarkMode')))

    return (
        <ThemeContext.Provider value={[isDark,setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}