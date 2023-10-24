import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useStore, useEvent } from 'effector-react';
import { themeModel } from 'features/theme';
import { Icon } from 'shared/ui/icon';
import styles from "./styles.module.scss";

export const ChangeTheme = () => {
    const [mounted, setMounted] = useState(false)
    const currentTheme = useStore(themeModel.$currentTheme);
    const toggleTheme = useEvent(themeModel.toggleTheme);

    useEffect(() => {
        setMounted(true)
        document.documentElement.setAttribute('data-theme', currentTheme)
    }, [currentTheme])

    if (!mounted) {
        return null
    }

    return <button onClick={() => toggleTheme('dark')} className={clsx('btn-reset', styles.theme)}>
        <Icon type='common' name={currentTheme === "light" ? 'moon' : 'sun'} />
    </button>
}