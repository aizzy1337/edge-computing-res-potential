'use client';
import { useSearchParams } from 'next/navigation';

export default function Loading() {
    const searchParams = useSearchParams();

    return(
        <>
            <p>{searchParams.get('lat')}</p>
            <p>{searchParams.get('lng')}</p>
        </>
    );
}