"use client";

import { useEffect } from 'react';

export default function NotFound({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <>
            <div>Something went wrong - Root</div>
            <div>{JSON.stringify(error)}</div>
        </>
    )
}