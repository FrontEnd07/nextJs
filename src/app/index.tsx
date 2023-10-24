import { useRouter } from 'next/router';
import { AppGate } from 'shared/config';
import { useGate } from 'effector-react';
import type { AppProps } from 'next/app';
import { withProviders } from './providers';
import { BaseLayout } from 'widgets/layouts';
import NextNProgress from 'nextjs-progressbar';
import { navigationModel } from 'shared/navigation';

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    useGate(navigationModel.RouterGate, { router });

    useGate(AppGate);

    return (
        <>
            <NextNProgress color="var(--color-primary)" height={3} options={{ showSpinner: false }} />
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </>
    );
};

export default withProviders(App);