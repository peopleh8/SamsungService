const overlay = document.querySelector('.overlay--desktop-menu'),
      menuItems = document.querySelectorAll('.menu-list-item--has-children')

export const menuHover = () => {
  menuItems.forEach((item) => {
    if (innerWidth <= 1160) return
    
    item.addEventListener('mouseenter', () => {
      overlay.classList.add('visible')
    })
    item.addEventListener('mouseleave', () => {
      overlay.classList.remove('visible')
    })
  })
}


menuItems && menuItems.length !== 0 && menuHover()