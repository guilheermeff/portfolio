export function scrollMenu() {
  const page = document.querySelector('body')

  const scroll = window.addEventListener('scroll', () => {
    if(scrollY > 25) {
      page.classList.add('scroll')
    } else {
      page.classList.remove('scroll')
    }
  })
}