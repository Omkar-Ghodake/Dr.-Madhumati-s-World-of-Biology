import { NavListType } from '@/types/componentTypes'
import NavItem from './NavItem'

const NavList: NavListType = ({ navLinksArray }) => {
  return (
    <>
      <div className='relative h-full flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 w-full'>
        {navLinksArray.map((link, index) => (
          <NavItem key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </>
  )
}

export default NavList
