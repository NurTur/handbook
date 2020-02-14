export default async () => {
    const data = await import(/* webpackChunkName: 'HomePage' */ '../pages/homePage/homePage.jsx');
    return data.default;
};