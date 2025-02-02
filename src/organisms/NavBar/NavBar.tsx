import BrandNameContainer from '@/molecules/NavBar/BrandNameContainer'
import IconContainer from '@/molecules/NavBar/IconContainer'
import ItemsContainer from '@/molecules/NavBar/ItemsContainer'
import React from 'react'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({ }) => {
    return (
        <>
            <div id='akitomo-navbar' className='flex items-center justify-between'>
                    <BrandNameContainer />
                    <ItemsContainer />
                    <IconContainer />
            </div>
        </>
    )
}

export default NavBar