import { reset } from 'patronum/reset';
import { navigationModel } from "shared/navigation"

reset({
    clock: navigationModel.$router,
    target: []
})