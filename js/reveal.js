export function scrollReveal() {
  window.sr = ScrollReveal({reset: true})

  ScrollReveal().reveal('.col-a', {
    Delay: 200
  });
  ScrollReveal().reveal('.col-b', {
    Delay: 200
  });
  ScrollReveal().reveal('.stats', {
    Delay: 200
  });
  ScrollReveal().reveal('.card', {
    Delay: 200
  });
  ScrollReveal().reveal('h2', {
    Delay: 200
  });
  ScrollReveal().reveal('h4', {
    Delay: 200
  });
}