
export function createParallaxEffect(element: HTMLElement, speed: number = 0.5) {
  let initialOffset = element.getBoundingClientRect().top;
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const offset = (scrollPosition - initialOffset) * speed;
    element.style.transform = `translateY(${offset}px)`;
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}

export function useParallaxElements() {
  const elements = document.querySelectorAll('.parallax-element');
  elements.forEach((element, index) => {
    // Different speeds for different elements
    const speed = 0.1 + (index * 0.05);
    createParallaxEffect(element as HTMLElement, speed);
  });
}
