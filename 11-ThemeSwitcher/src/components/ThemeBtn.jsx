import React from 'react'
import { useTheme } from '../context/Theme';

export default function ThemeBtn() {
    const {themeMode,lightTheme,darkTheme} = useTheme();

    function onSwitchToggle(e){
        if(e.currentTarget.checked){
            darkTheme();
        }
        else lightTheme();
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onSwitchToggle}
                checked={themeMode === "dark"} // ✅ make it controlled
                
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white">Dark Theme</span>
        </label>
    );
}

/**
 * Why this line is required : checked={themeMode === "dark"}
 * => ✅ make it controlled
 * If it is not present :Your checkbox input will not be controlled by theme Selector 
 * it helps to bind themeSelector and your toggle switch
 * 
 * ✅ Jab tu checked={themeMode === "dark"} likhta hai

    Toh ab React ko clearly batata hai:

    “Agar themeMode ‘dark’ hai to checkbox checked hona chahiye, warna unchecked.”

    Matlab ab checkbox ka ON/OFF state directly context ke themeMode ke according control hota hai.
    Isse 2 fayde milte hain:

    Toggle click karte hi UI turant update hoga.

    Agar context se theme badal jaaye (maan le user ne manually theme change kiya), to checkbox bhi sync mein rahega.


 */