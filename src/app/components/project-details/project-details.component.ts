import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
    @Input() project: any;
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

    // Helper to process tech stack string into array if needed
    get techStackArray(): string[] {
        if (!this.project?.technologies) return [];
        return this.project.technologies.split(',').map((t: string) => t.trim());
    }
}
