export function scrollReveal() {
  window.sr = ScrollReveal({reset: true})

  ScrollReveal().reveal('.col-a', {
    Delay: 300
  });
  ScrollReveal().reveal('.col-b', {
    Delay: 300
  });
  ScrollReveal().reveal('.stats', {
    Delay: 300
  });
  ScrollReveal().reveal('.card', {
    Delay: 300
  });
  ScrollReveal().reveal('h2', {
    Delay: 300
  });
  ScrollReveal().reveal('h4', {
    Delay: 300
  });
}