import React from 'react'
import Name from '@/atoms/NavBar/Name'

interface BrandNameContainerProps {

}

const BrandNameContainer: React.FC<BrandNameContainerProps> = ({ }) => {
    return (
        <>
            <div><Name /></div>
        </>
    )
}

export default BrandNameContainer