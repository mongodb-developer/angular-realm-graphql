import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers {
    customers {
      name
    }
  }
`;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.customers = this.apollo
      .watchQuery({query: GET_ALL_CUSTOMERS})
      .valueChanges.pipe(map((result: any) => result?.data?.customers));
  }
}
