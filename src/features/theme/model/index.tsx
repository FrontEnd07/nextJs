import { createEvent, createStore, sample } from 'effector';
import { atom } from 'shared/factory';
import { Theme } from '../type';

export const themeModel = atom(() => {

    const $currentTheme = createStore((typeof localStorage !== "undefined" && localStorage.theme) ? localStorage.theme : 'light');

    const toggleTheme = createEvent<Theme>();

    sample({
        clock: toggleTheme,
        source: $currentTheme,
        fn: (currentTheme) => currentTheme === 'light' ? 'dark' : 'light',
        target: $currentTheme,
    });

    if (typeof localStorage !== 'undefined') {
        $currentTheme.watch(currentTheme => localStorage.setItem('theme', currentTheme))
    }


    return {
        $currentTheme,
        toggleTheme
    }
})