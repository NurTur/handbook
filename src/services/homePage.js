export default async () => {
    const data = await import(/* webpackChunkName: 'HomePage' */ '../components/table/table.jsx');
    return data.default;
};