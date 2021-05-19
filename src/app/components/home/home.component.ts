import { Component, OnInit } from '@angular/core';
import { CoinData } from 'src/app/models/coin-data';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: CoinData[] = [];

  constructor(private cryptoService: CryptocurrenciesService) {}

  loadData(): void {
    this.cryptoService.loadTableData();
    this.dataSource = this.cryptoService.loadedData;
  }

  ngOnInit(): void {
    this.loadData();
  }

}
