export default function NotFound({ error }: { error: Error }) {
    return (
        <>
            <div>Something went wrong - Courses</div>
            <div>{JSON.stringify(error)}</div>
        </>
    )
}