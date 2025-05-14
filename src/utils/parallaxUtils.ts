
export function createParallaxEffect(element: HTMLElement, speed: number = 0.5) {
  if (!element) return () => {};
  
  const initialOffset = window.scrollY + element.getBoundingClientRect().top;
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementHeight = element.getBoundingClientRect().height;
    
    // Check if element is in viewport
    if (elementTop < windowHeight && elementTop + elementHeight > 0) {
      const offset = (scrollPosition - initialOffset) * speed;
      element.style.transform = `translateY(${offset}px)`;
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Run once to set initial position
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
}

export function useParallaxElements() {
  const elements = document.querySelectorAll('.parallax-element');
  const cleanupFunctions: Array<() => void> = [];
  
  elements.forEach((element, index) => {
    // Different speeds for different elements
    const speed = 0.1 + (index * 0.05);
    const cleanup = createParallaxEffect(element as HTMLElement, speed);
    cleanupFunctions.push(cleanup);
  });
  
  return () => cleanupFunctions.forEach(cleanup => cleanup());
}

export function createMouseParallaxEffect(container: HTMLElement) {
  if (!container) return () => {};
  
  const elements = container.querySelectorAll('.parallax-mouse');
  
  const handleMouseMove = (e: MouseEvent) => {
    const containerRect = container.getBoundingClientRect();
    
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    elements.forEach((element) => {
      const depth = parseFloat((element as HTMLElement).dataset.depth || '0.05');
      const moveX = (mouseX - centerX) * depth;
      const moveY = (mouseY - centerY) * depth;
      
      (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}
