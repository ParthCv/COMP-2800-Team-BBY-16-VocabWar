import React from 'react'
import Letter from './letter'

export default function RandLetters( {letters}) {
    return (
        letters.map(letters => {
            return <Letter key={letters.id} letters={letters} />
        })
    )
}
