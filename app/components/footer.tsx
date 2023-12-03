import React from 'react'
import CountVisitors from './countVisitors'

export default function Footer() {

    return(
        <footer className="flex justify-between text-center w-full">
            <p className="w-max my-0 mt-auto mb-0">2023, W&S Digitalagentur GmbH</p>
            <CountVisitors />
        </footer>
    )
}