import clsx from "clsx"
import Link from "next/link"
import { Icon } from "shared/ui/icon"
import { paths } from "shared/routing"
import styles from './styles.module.scss'

export const Profile = () => {

    const ProfileLink = <Link href={paths.profile} className={clsx('btn-reset', styles.profile)}>
        <Icon type="common" name="profile" />
        Профиль
    </Link>

    const ProfileButton = <button className={clsx('btn-reset', styles.profile)}>
        <Icon type="common" name="profile" />
        Войти
    </button>

    return ProfileLink
}