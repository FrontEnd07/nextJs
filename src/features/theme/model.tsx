import { createEvent, createStore, sample } from 'effector';
import { atom } from 'shared/factory';
import { Theme } from './types';


export const themeModel = atom(() => {

    const $currentTheme = createStore('light');

    const toggleTheme = createEvent<Theme>();

    sample({
        clock: toggleTheme,
        source: $currentTheme,
        fn: (currentTheme) => currentTheme === 'light' ? 'dark' : 'light',
        target: $currentTheme,
    });

    return {
        $currentTheme,
        toggleTheme
    }
})