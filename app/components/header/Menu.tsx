import { ILink } from '@/app/data/projects'
import ScrollLink from '../ScrollLink'

export const links: ILink[] = [
    { name: "Projects", link: "projects" },
    { name: "Technologies", link: "tech" },
    { name: "Contacts", link: "contacts" }
]

const Menu = () => {
    return (
        <ul className="flex space-x-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
            {links.map(item => {
                return (
                    <ScrollLink
                        className='btn'
                        key={item.link}
                        href={`#${item.link}`}
                    >{item.name}</ScrollLink>

                )
            })}
        </ul>
    )
}

export default Menu