export function mobileMenu() {
  const buttonOpenMenu = document.querySelector('.open-menu')
  const buttonCloseMenu = document.querySelector('.close-menu')
  const links = document.querySelector('.menu')

  function openMenu() {
    document.body.classList.add('menu-expended')
  }

  function closeMenu() {
    document.body.classList.remove('menu-expended')
  }

  buttonOpenMenu.addEventListener('click', () => {
    openMenu()
  })

  buttonCloseMenu.addEventListener('click', () => {
    closeMenu()
  })

  links.onclick = () => {
    closeMenu()
  }
}