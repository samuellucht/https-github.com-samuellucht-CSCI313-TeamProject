import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
// import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService],
})
export class NewAccountComponent {
  para: string = '';

  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  // logService: LoggingService;

  // constructor(logServ: LoggingService) {
  //   this.logService = logServ;
  // }

  constructor(
    // private logService: LoggingService,
    private accountService: AccountsService
  ) {}

  ngOnInit() {
    this.accountService.statusUpdated.subscribe((data) => {
      this.para = data;
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // console.log(`A status change occured, the new status is ${accountStatus}`);
    // this.logService.logStatusChange(accountStatus);
  }
}
