'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import loadingProps from '../types/loading-props';

function Location(): loadingProps {
    const searchParams = useSearchParams();
    let location: loadingProps = { lat: 0, lng: 0 };

    if(searchParams.get('lat') != null && searchParams.get('lng') != null) {
        location = {
            lat: parseFloat(searchParams.get('lat') as string),
            lng: parseFloat(searchParams.get('lng') as string),
        }   
    }
    return location;
}

export default function Loading() {
    return(
        <Suspense>
            <p>{Location().lat}</p>
            <p>{Location().lng}</p>
        </Suspense>
    );
}