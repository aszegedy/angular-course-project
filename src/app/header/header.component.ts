import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() onSelectFired = new EventEmitter<string>();

  onSelect(compName: string) {
    this.onSelectFired.emit(compName);
  }
}
