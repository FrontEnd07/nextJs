import clsx from "clsx";
import Link from "next/link";
import { paths } from "shared/routing";
import { Icon } from "shared/ui/icon";
import styles from "./styles.module.scss";

export const Favorites = () => {

    return <Link href={paths.favorites} className={clsx('btn-reset', styles.favorites)}>
        <Icon type='common' name="like" />
        Избранное
    </Link>
}