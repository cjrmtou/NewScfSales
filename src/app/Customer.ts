export class Customer{
  constructor(
    public Id: number,
    public OrgId: string,
    public Name: string,
    public AccountNumber: Array<string>,
    public ShipTo: Array<string>,
    public SelectedAccountNumber: string,
    public SelectedShipTo: string,
  ) {}
}

export class CustomerShipTo {
  constructor(
    public Id: number,
    public OrgId:string,
    public CustomerName: string,
    public AccountNumber: string,
    public ShipTo: Array<string>
  ) {}
}
