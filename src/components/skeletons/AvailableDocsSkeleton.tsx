import DocSkeleton from "../cards/DocSkeleton";
const AvailableDocsSkeleton = () => {
    return (
        // fetching available documents skeleton
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <DocSkeleton />
            <DocSkeleton />
            <DocSkeleton />
            <DocSkeleton />
            <DocSkeleton />
            <DocSkeleton />
        </section>
    );
}
export default AvailableDocsSkeleton;

