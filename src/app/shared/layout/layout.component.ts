import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  showSpinner: boolean = false;
  userName: string = '';
  isAdmin: boolean = false;

  private autoLogoutSubscription: Subscription = new Subscription();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
