import Image from 'next/image';
import Link from 'next/link';
import { paths } from "shared/routing";
import styles from "./styles.module.scss";

export const Logo = () => {
    return <Link href={paths.home} className={styles.logo}>
        <Image priority className={styles.image} alt="Амид" width="131" height="26" src='/logo.png' />
    </Link>
}