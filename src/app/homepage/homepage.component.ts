import { Component, OnInit } from '@angular/core';
import { histoire } from 'data/notreHistoire';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
    coupleName = 'Marion & Matthieu';
    weddingDate = '14 Septembre 2024';
    notreHistoire = "";

    ngOnInit(): void {
      this.notreHistoire = histoire;
    }
}
