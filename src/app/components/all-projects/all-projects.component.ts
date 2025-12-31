import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent {
    @Input() projects: any[] = [];
    @Output() close = new EventEmitter<void>();
    @Output() selectProject = new EventEmitter<any>();

    closeOverlay() {
        this.close.emit();
    }

    onProjectClick(project: any) {
        this.selectProject.emit(project);
    }
}
