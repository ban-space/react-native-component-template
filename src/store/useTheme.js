import { create } from 'zustand'
import { themes } from '../utility/colors'
export const useTheme = create((set) => {
    return {
        themeMode: 'light',
        colors: themes.light,
        toggleTheme: () => set((currentState) => {
            if (currentState.themeMode === 'light')
                return {
                    themeMode: 'dark',
                    colors: themes.dark
                }
            else {
                return {
                    themeMode: 'light',
                    colors: themes.light
                }
            }
        })
    }
})