import { Component, ElementRef ,ViewChild,Renderer2} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  isclick:boolean=true;
  @ViewChild('val') val: ElementRef<HTMLDivElement> = {} as ElementRef; 
  constructor(private renderer:Renderer2) {}

  showDetails(num:number){
    if(this.isclick && num==1){
      
                                             
    }else{
     
      this.isclick=true;              
    } 
  }

}
