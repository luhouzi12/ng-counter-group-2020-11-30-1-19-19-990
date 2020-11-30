export class Counter {
  public account: number = 0;
  constructor(account: number = 0)
  {
    this.account = account;
  }

  public increase(): void
  {
    this.account ++;
  }

  public decrease(): void
  {
    this.account --;
  }
}