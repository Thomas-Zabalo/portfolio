import React from 'react'
import Icon from '@/atoms/NavBar/Icon'

interface IconContainerProps {

}

const IconContainer: React.FC<IconContainerProps> = ({ }) => {
    return (
        <>
            <div>
                <ul className='flex'>
                    <li className='pr-1'>
                        <Icon href='' src='/instagram.svg' alt='Logo Instagram' />
                    </li>
                    <li className='pr-1'>
                        <Icon href='' src='/linkedin.svg' alt='Logo LinkedIn' />
                    </li>
                    <li className='pr-1'>
                        <Icon href='' src='/github.svg' alt='Logo Github' />
                    </li>
                    <li className='pr-1'>
                        <Icon href='' src='/discord.svg' alt='Logo Discord' />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default IconContainer