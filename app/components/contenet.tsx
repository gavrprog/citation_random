'use client'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import someImage from '../../public/photo.png'

const CITATION_URL = 'https://api.chucknorris.io/jokes/random'

export default function Content() {
    const [newCitation, setNewCitation] = useState('Citation is loaded...')
    const [updateCitation, setUpdateCitation] = useState(true)

    useEffect(() => {
        axios.get(CITATION_URL)
            .then((req) => setNewCitation(req.data.value))
            .catch((err) => alert(err))
    }, [updateCitation])

    const clickHandler = () => setUpdateCitation(!updateCitation)

    return(
        <div className="flex">
            <aside className="w-80">
                <Image src={someImage} width={250} alt="W&S face" />
            </aside>
            <main className="w-96">
                <div className="flex flex-col justify-center h-full">
                    <div className="flex flex-col flex-center text-center justify-center h-4/5">
                        <p>" {newCitation} "</p>                       
                    </div>
                    <div className="text-center">
                        <button className="py-2 px-3 bg-transparent border-solid border-2 border-white cursor-pointer rounded-lg 
                                            active:bg-white active:text-slate-700 active:border-slate-700" 
                                onClick={clickHandler}>
                            NEW CITATION
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}