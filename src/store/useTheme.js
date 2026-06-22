import { create } from 'zustand'
import { themes } from '../utility/colors'
import { Size } from '../utility/size'
import { scale } from '../utility/size'
export const useTheme = create((set) => {
    return {
        themeMode: 'light',
        colors: themes.light,
        fontSizes: Size.fontSizes,
        spacing: Size.spacing,
        borderRadii: Size.borderRadii,
        iconSizes: Size.iconSizes,
        verticalScale: scale.Vscale,
        horizontalScale: scale.Hscale,
        moderateScale: scale.moderateScale,
        fontScale: scale.fontScale,
        toggleTheme: () => set((currentState) => {
            if (currentState.themeMode == 'light') {
                return {
                    themeMode: 'dark',
                    colors: themes.dark
                }
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