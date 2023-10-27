import { NextSeo } from 'next-seo';
import { ComponentType } from 'react';

export const withSeo =
    <T extends object>(Component: ComponentType<T>) =>
        (props: T) =>
        (
            <>
                <NextSeo
                    nofollow
                    noindex
                    title="Онлайн-магазин Amid - доставка продуктов на дом в Хуҷанд и Душанбе, заказать онлайн продукты на дом"
                    description="Доставка продуктов на дом в Душанбе и Хуҷанд от интернет-магазина Амид. Онлайн продажа продуктов питания и товаров для дома с доставкой в день заказа. Уникальный ассортимент, акции, бонусы!"
                    openGraph={{
                        title: 'Амид - Интернет-магазин продуктов Амид',
                        description: 'Амид - Интернет-магазин продуктов Амид',
                    }}
                    additionalMetaTags={[
                        {
                            name: 'keywords',
                            content: 'Доставка продуктов на дом в Душанбе и Хуҷанд от интернет-магазина Амид. Онлайн продажа продуктов питания и товаров для дома с доставкой в день заказа. Уникальный ассортимент, акции, бонусы!',
                        },
                        {
                            name: 'viewport',
                            content: 'width=device-width,initial-scale=1',
                        },
                        {
                            name: 'apple-mobile-web-app-capable',
                            content: 'yes',
                        },
                    ]}
                    additionalLinkTags={[
                        {
                            rel: 'icon',
                            href: '/AmidLogo.png',
                        },
                    ]}
                />
                <Component {...props} />
            </>
        );