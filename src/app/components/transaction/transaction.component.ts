import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regions, Currencies } from "../../model/enums";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.sass']
})
export class TransactionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  txForm: FormGroup;
  keys = Object.keys;
  regionsEnum = Regions;
  currenciesEnum = Currencies;
  referenceNum = this.getReference()


  ngOnInit(): void {
    this.txForm = this.formBuilder.group({
      newTx: [null, [Validators.required]],
      reference: [this.referenceNum, [Validators.required]],
      customerNumber: [null, [Validators.required]],
      customerName: [null, [Validators.required]],
      customerAddress: [null, [Validators.required]],
      customerPhoneNumber: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      ammount: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      currency: [null, [Validators.required]],
      beneficiaryBank: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      beneficiaryAccountNumer: [null, [Validators.required]],
      paymentDetails: [null, [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      cardDetails: [null, [Validators.required]],
      region: [null, [Validators.required]]
    });
  }

  @Input() error: string | null;

  onSave(){
    if(this.txForm.valid){
      //TODO save
    }else{
      this.error = "Invalid transaction data"
    }
  }

  getReference():string {
    var sequence = Math.floor(Math.random() * (9999 + 1));
    var currentDate = new Date();
    var dd = String(currentDate.getDate()). padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1). padStart(2, '0');
    var yyyy = currentDate. getFullYear();
    return 'CUS' + yyyy + mm + dd + sequence;
  }

}
