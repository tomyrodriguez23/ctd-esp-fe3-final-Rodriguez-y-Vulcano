import { createContext, useContext, useState } from "react";

export const initialState = {
    themes: {
        claro: {
            bgHome: "white",
            bgNavbarFooter: "rgb(172, 224, 231)",
            color: "black"
        },
        oscuro: {
            bgNavbarFooter: "#161616",
            bgHome: "#7f7f7f",
            color: "white"
        }
    },
}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [Theme, setTheme] = useState(initialState.themes.claro)
    const handleThemeChange = () => {
        if (Theme === initialState.themes.oscuro) setTheme(initialState.themes.claro)
        if (Theme === initialState.themes.claro) setTheme(initialState.themes.oscuro)
    }

    const [favs, setfavs] = useState([])

    return (
        <ContextGlobal.Provider value=
            {{
                Theme,
                handleThemeChange,
                favs,
                setfavs
            }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(ContextGlobal)
}

