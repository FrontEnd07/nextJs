import clsx from "clsx"
import { Logo } from "./logo";
import { useHeaderFixed } from "../lib";
import styles from "./styles.module.scss";
import { ChangeTheme } from "./changeTheme";

export const Header = () => {
    const { isFixed } = useHeaderFixed()

    return <header className={clsx(styles.header, {
        [styles.fixed]: isFixed,
    })}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.row}>
                <Logo />
            </div>
            <div className={styles.row}>
                <ChangeTheme />
            </div>
        </div>
    </header>
}