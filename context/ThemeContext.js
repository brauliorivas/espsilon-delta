"use client";

import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    isDarkTheme: true,
    toggleThemeHandler: () => {},
});

export function ThemeContextProvider(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => initialThemeHandler());

    function isLocalStorageEmpty() {
        return !localStorage.getItem("isDarkTheme");
    }

    function initialThemeHandler() {
        if (isLocalStorageEmpty()) {
            localStorage.setItem("isDarkTheme", true);
            document.querySelector("body").classList.add("dark");
            setIsDarkTheme(true);
        } else {
            const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
            isDarkTheme && document.querySelector("body").classList.add("dark");
            setIsDarkTheme(() => {
                return isDarkTheme;
            });
        }
    }

    function toggleThemeHandler() {
        const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));

        setIsDarkTheme(!isDarkTheme);
        toggleDarkClassToBody();
        setValueToLocalStorage();
    }

    function toggleDarkClassToBody() {
        document.getElementById("contenido_tema").classList.toggle("dark");
    }

    function setValueToLocalStorage() {
        localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;