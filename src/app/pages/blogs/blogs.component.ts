import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  

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
        window.open("https://stackoverflow.com/users/23102941/gaurav-nandankar?tab=answers&sort=newest", '_blank');
        break
      
      case 5 :
        window.open("https://dev.to/i_a_m_g_a_u_r_a_v", '_blank');
        break
    
      case 6 :
        window.open("https://dribbble.com/gaurav_dev", '_blank');
        break
          
    }
  }

}
