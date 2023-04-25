import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    // private logService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log(`A status change occured, the new status is ${status}`);
    // this.logService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }

  removeAccount() {
    this.accountsService.deleteAccount(this.id);
  }
}
