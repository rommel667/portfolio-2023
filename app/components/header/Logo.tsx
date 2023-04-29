
import { FC } from 'react'
import ScrollLink from '../ScrollLink'

interface LogoProps {

}

const Logo: FC<LogoProps> = ({ }) => {
    return (
        <div className="">
            <ScrollLink
                className="text-gray-600 text-lg font-bold dark:text-gray-400 cursor-pointer"
                href='#home'
            >Rommel V.</ScrollLink>

        </div>
    )
}

export default Logo