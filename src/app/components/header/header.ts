import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() menuToggle = new EventEmitter<void>();
  notificationCount = 5;

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  openNotifications(): void {
    console.log('Open notifications');
  }

  openMessages(): void {
    console.log('Open messages');
  }

  openCalendar(): void {
    console.log('Open calendar');
  }
  
  openProfile(): void {
    console.log('Open profile');
  }
}
