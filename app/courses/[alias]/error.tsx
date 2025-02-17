"use client";

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <>
            <div>Something went wrong - Courses</div>
            <div>{JSON.stringify(error)}</div>
        </>
    )
}