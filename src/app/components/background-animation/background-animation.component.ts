import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { animate, stagger } from 'animejs';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css']
})
export class BackgroundAnimationComponent implements OnInit, AfterViewInit {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;
  @ViewChild('starsContainer') starsContainer!: ElementRef;
  @ViewChild('gridContainer') gridContainer!: ElementRef;

  constructor() { }

  private random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initParticleAnimation();
    this.initStarField();
    this.initGridAnimation();
  }

  private initParticleAnimation(): void {
    const particles = this.particlesContainer.nativeElement;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particles.appendChild(particle);
    }

    // Animate particles with anime.js
    animate('.particle', {
      translateX: () => this.random(-100, 100),
      translateY: () => this.random(-100, 100),
      scale: () => this.random(0.5, 2),
      opacity: [0, 1, 0],
      duration: () => this.random(3000, 8000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  }

  private initStarField(): void {
    const stars = this.starsContainer.nativeElement;
    
    // Create stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      stars.appendChild(star);
    }

    // Twinkling animation
    animate('.star', {
      opacity: [0.3, 1, 0.3],
      scale: [0.8, 1.2, 0.8],
      duration: () => this.random(2000, 4000),
      loop: true,
      easing: 'easeInOutSine'
    });
  }

  private initGridAnimation(): void {
    const grid = this.gridContainer.nativeElement;
    
    // Create grid lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line';
      line.style.left = (i * 5) + '%';
      grid.appendChild(line);
    }

    for (let i = 0; i < 20; i++) {
      const line = document.createElement('div');
      line.className = 'grid-line horizontal';
      line.style.top = (i * 5) + '%';
      grid.appendChild(line);
    }

    // Grid pulse animation
    animate('.grid-line', {
      opacity: [0.1, 0.3, 0.1],
      duration: 3000,
      loop: true,
      easing: 'easeInOutSine',
      delay: stagger(100)
    });
  }
} 