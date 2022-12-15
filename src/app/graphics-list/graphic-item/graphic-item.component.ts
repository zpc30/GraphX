import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Graphic } from 'src/app/model/graphic.model';
import { GraphicService } from 'src/app/service/graphic.service';

@Component({
  selector: 'app-graphic-item',
  templateUrl: './graphic-item.component.html',
  styleUrls: ['./graphic-item.component.css']
})
export class GraphicItemComponent implements OnInit {
  @Input() graphicCard: Graphic = new Graphic()
  @Output() vote: EventEmitter<boolean> = new EventEmitter()
  showDesc = '(Show More)'
  numOfChar = 130
  constructor(private graphicService: GraphicService) { }

  ngOnInit(): void {
    
  }

  onPlus() {
    this.graphicCard.grade = this.graphicCard.grade + 1
    this.graphicService.putGrade(this.graphicCard._id, this.graphicCard).subscribe({})
  }
  onMinus() {
    this.graphicCard.grade = this.graphicCard.grade - 1
    this.graphicService.putGrade(this.graphicCard._id, this.graphicCard).subscribe({})
  }

  showMore() {
    if(this.showDesc == '(Show More)') {
      this.showDesc = '(Show Less)'
      this.numOfChar = this.graphicCard.description.length
    } else {
      this.showDesc = '(Show More)'
      this.numOfChar = 130
    }
  }
}
