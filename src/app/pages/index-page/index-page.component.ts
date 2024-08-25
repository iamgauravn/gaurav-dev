import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {

  totalExperienceStartDate = new Date('2022-06-01');
 
  getTotalExperience(): string {
    const now = new Date();
    const experience = this.calculateExperience(this.totalExperienceStartDate, now);

    return `${experience.years} years, ${experience.months} months, ${experience.days} days, ${experience.hours} hours, ${experience.minutes} minutes, ${experience.seconds} seconds`;
  }

  private calculateExperience(startDate: Date, endDate: Date): { years: number, months: number, days: number, hours: number, minutes: number, seconds: number } {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();
    let hours = endDate.getHours() - startDate.getHours();
    let minutes = endDate.getMinutes() - startDate.getMinutes();
    let seconds = endDate.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      minutes--;
      seconds += 60;
    }

    if (minutes < 0) {
      hours--;
      minutes += 60;
    }

    if (hours < 0) {
      days--;
      hours += 24;
    }

    if (days < 0) {
      months--;
      days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days, hours, minutes, seconds };
  }

  get totalExperience(): string {
    return this.getTotalExperience();
  }

  open(position:number) {

    switch(position) {
      case 1 :
        window.open("https://www.linkedin.com/in/iamgaurav110/", '_blank');
        break

      case 2 :
        window.open("https://github.com/iamgauravn", '_blank');
        break
      
      case 3 :
        window.open('mailto:gaurav110dev@gmail.com', '_blank');
        break
      
      case 4 :
        window.open("https://stackoverflow.com/users/23102941/gaurav-nandankar", '_blank');
        break
      
      case 5 :
        window.open("https://dev.to/i_a_m_g_a_u_r_a_v", '_blank');
        break
    
      case 6 :
        window.open("https://dribbble.com/gaurav_dev", '_blank');
        break

      case 7 :
        window.open("https://drive.google.com/file/d/1HhjgAqZ3HrBdXiCCsRQxBPr6EurMTlfD/view", '_blank');
        break
          
    }

  }

}
