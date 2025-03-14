export default function NotFound({ error }: { error: Error }) {
    return (
        <>
            <div>Something went wrong - Root</div>
            <div>{JSON.stringify(error)}</div>
        </>
    )
}