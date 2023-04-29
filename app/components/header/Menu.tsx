import { ILink } from '@/app/data/projects'
import { Link } from 'react-scroll'

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

                    <Link
                        key={item.link}
                        className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-200"
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                    >{item.name}</Link>

                )
            })}
        </ul>
    )
}

export default Menu