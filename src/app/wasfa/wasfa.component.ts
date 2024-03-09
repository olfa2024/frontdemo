import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wasfa',
  templateUrl: './wasfa.component.html',
  styleUrls: ['./wasfa.component.css']
})
export class WasfaComponent implements OnInit {
  meals = [
    { name: 'مصلي دجاج تونسي', description: 'مصلي دجاج تونسي', photoUrl: 'assets/imgs/3.jpg', videoUrl: 'https://www.youtube.com/embed/F_qyzYJkkxA', showVideo: false },
    { name: 'دويدة مفورة بالخضرة و الدجاج', description: 'دويدة مفورة بالخضرة و الدجاج', photoUrl: 'assets/imgs/dwida.gif', videoUrl: 'https://www.youtube.com/embed/I9Q6W38-Q0g', showVideo: false },
    { name: 'كسكسي تونسي', description: 'كسكسي تونسي بلحم العلوش', photoUrl: 'assets/imgs/koskous.jpg', videoUrl: 'https://www.youtube.com/embed/h-xgC0SzdNs', showVideo: false },
    { name: 'طاجين تونسي', description: 'أروع وصفة طاجين تونسي دجاج وجبن', photoUrl: 'assets/imgs/tajin.jpg', videoUrl: 'https://www.youtube.com/embed/k8LFjsfYYDk0', showVideo: false },
    { name: 'بيتزا', description: 'بيتزا', photoUrl: 'assets/imgs/pizza.jpg', videoUrl: 'https://www.youtube.com/watch?v=cNdHF4dHSEg', showVideo: false },
    { name: 'نواصر تونسية بالدجاج ', description: 'نواصر تونسية بالدجاج ', photoUrl: 'assets/imgs/nwaser.jpg', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=qXdo5s8mnGc', showVideo: false },
    { name: 'كفتاجي تونسي', description: 'كفتاجي تونسي', photoUrl: 'assets/imgs/kaf.jpg', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=y6h6F-yI3yE', showVideo: false },
    { name: 'مقرونة بالبشاميل في الفرن', description: 'مقرونة بالبشاميل في الفرن', photoUrl: 'assets/imgs/11.webp', videoUrl: 'https://www.youtube.com/watch?v=uZCaAnnmrBQ', showVideo: false },
{ name: 'كمونية تونسية بالكبدة ', photoUrl: 'assets/imgs/kamouniya.jpg', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=anOL1DWA7l8', showVideo: false, description: 'كمونية تونسية بالكبدة ' },
  ];


  ngOnInit(): void {
    
  }

  toggleVideo(meal: any) {
    meal.showVideo = !meal.showVideo;
  }
}