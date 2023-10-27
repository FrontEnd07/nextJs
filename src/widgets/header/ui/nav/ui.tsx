import clsx from "clsx";
import Link from "next/link";
import { items } from "./config";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export const Nav = () => {
    const { pathname } = useRouter();

    return <nav className={styles.nav}>
        <ul className={clsx('list-reset', styles.list)}>
            {items.map((item) => {
                const isCurrentPage = pathname === item.href;

                return <li key={item.text}>
                    <Link className={clsx(styles.link, { [styles.isCurrent]: isCurrentPage })} href={item.href}>
                        {item.text}
                    </Link>
                </li>
            })}
        </ul>
    </nav >
}