import Items from '@/atoms/NavBar/Items'
import React from 'react'

interface ItemsContainerProps {

}

const ItemsContainer: React.FC<ItemsContainerProps> = ({ }) => {
    return (
        <>
            <div className='flex'>
                <nav>
                    <ul className='flex'>
                        <Items value='Accueil' />
                        <Items value='A propos' />
                        <Items value='Projets' />
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default ItemsContainer