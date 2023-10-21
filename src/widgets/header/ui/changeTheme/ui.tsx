import clsx from 'clsx';
import { useEffect } from 'react';
import { useStore, useEvent } from 'effector-react';
import { themeModel } from 'features/theme';
import { Icon } from 'shared/ui/icon';
import styles from "./styles.module.scss";

export const ChangeTheme = () => {

    const currentTheme = useStore(themeModel.$currentTheme);
    const toggleTheme = useEvent(themeModel.toggleTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme)
    }, [currentTheme])

    return <button onClick={() => toggleTheme('dark')} className={clsx('btn-reset', styles.theme)}>
        <Icon type='common' name={currentTheme === 'light' ? 'moon' : 'sun'} />
    </button>
}