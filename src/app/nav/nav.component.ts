import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy {

  activeSection: string = 'hero';
  isMobileMenuOpen: boolean = false;
  isScrolled: boolean = false;
  private observer: IntersectionObserver | null = null;

  constructor() { }

  ngOnInit(): void {
    this.setupScrollSpy();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    this.closeMobileMenu();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  setupScrollSpy() {
    if (typeof window !== 'undefined') {
      // Use Intersection Observer for better performance
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              if (sectionId && this.activeSection !== sectionId) {
                this.activeSection = sectionId;
                console.log('Active section changed to:', sectionId);
              }
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px', // Adjust these values for better detection
          threshold: 0
        }
      );

      // Observe all sections
      const sections = ['hero', 'about', 'experience', 'education', 'certifications', 'projects', 'articles', 'contact'];
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element && this.observer) {
          this.observer.observe(element);
        }
      });

      // Fallback: also use scroll event for immediate updates
      window.addEventListener('scroll', () => {
        this.updateActiveSectionFallback();
      });
    }
  }

  updateActiveSectionFallback() {
    const sections = ['hero', 'about', 'experience', 'education', 'certifications', 'projects', 'articles', 'contact'];
    const scrollPosition = window.scrollY + 100;

    let currentSection = 'hero';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        
        if (scrollPosition >= elementTop) {
          currentSection = section;
          break;
        }
      }
    }

    if (this.activeSection !== currentSection) {
      this.activeSection = currentSection;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Add/remove active class to nav-toggle button
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
      navToggle.classList.toggle('active', this.isMobileMenuOpen);
    }
    
    if (navLinks) {
      navLinks.classList.toggle('active', this.isMobileMenuOpen);
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
      navToggle.classList.remove('active');
    }
    
    if (navLinks) {
      navLinks.classList.remove('active');
    }
  }

  // Handle keyboard navigation
  onKeyDown(event: KeyboardEvent, action: () => void) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const navbar = document.querySelector('.navbar');
    
    if (navbar && !navbar.contains(target) && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
