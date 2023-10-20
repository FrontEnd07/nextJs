import clsx from 'clsx';
import { Icon } from 'shared/ui/icon';
import styles from "./styles.module.scss";

export const ChangeTheme = () => {
    return <button className={clsx('btn-reset', styles.theme)}>
        <Icon type='common' name='moon' />
    </button>
}