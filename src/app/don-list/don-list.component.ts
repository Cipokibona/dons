import { Component, OnInit } from '@angular/core';
import { donsData } from '../../assets/data';

@Component({
  selector: 'app-don-list',
  imports: [],
  templateUrl: './don-list.component.html',
  styleUrl: './don-list.component.scss'
})
export class DonListComponent implements OnInit{
  data = donsData;
  question! : number;
  idListDon!: number;
  idQuestion!: number;
  endQuestion!: boolean;
  donDominants!: typeof donsData;

  ngOnInit(): void {
    this.question = 1;
    this.idListDon = 0;
    this.idQuestion = 0;
    this.endQuestion = false;
    this.donDominants = [];
  }

  nextQuestion(){
    this.question++;
    this.idListDon++;
    if(this.idListDon >= this.data.length){
      this.idListDon = 0;
      this.idQuestion++;
      if(this.idQuestion >= this.data[this.idListDon].questions.length){
        this.endQuestion = true;
        this.findDonDominant();
      }
    }
  }

  findDonDominant(){
    const maxPoints = Math.max(...this.data.map(don => don.points));
    this.donDominants = this.data.filter(don => don.points === maxPoints);
  }

  onJamais(){
    this.data[this.idListDon].points += 1 ;
    this.nextQuestion();
  }

  onRarement(){
    this.data[this.idListDon].points += 2 ;
    this.nextQuestion();
  }

  onParfois(){
    this.data[this.idListDon].points += 3 ;
    this.nextQuestion();
  }

  onSouvent(){
    this.data[this.idListDon].points += 4 ;
    this.nextQuestion();
  }

  onToujours(){
    this.data[this.idListDon].points += 5 ;
    this.nextQuestion();
  }

  recommencer(){
    location.reload();
  }
}
