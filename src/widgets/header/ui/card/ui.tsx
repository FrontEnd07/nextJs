import clsx from "clsx";
import Link from "next/link";
import { Icon } from "shared/ui/icon";
import { paths } from "shared/routing";
import styles from "./styles.module.scss";

export const Card = () => <Link href={paths.card} className={clsx('btn-reset', styles.card)}>
    <Icon type="common" name="bag" />
    Корзина
</Link>