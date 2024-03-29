import { Component } from '@angular/core';

@Component({
  selector: 'app-benevolat',
  templateUrl: './benevolat.component.html',
  styleUrls: ['./benevolat.component.scss'],
})
export class BenevolatComponent {
  list_benevolats: any[] = [
    {
      id: 1,
      title: 'زكاة الفطر',
      image: 'assets/imgs/zakat.jpg',
      description:
        'زكاة الفطر واجبة على كل مسلم يملك قوت نفسه ، ومن تلزمه نفقته يوم العيد وليلته فضلا عن حوائجه الأصلية ، ويلزمه إخراج صدقة زوجته وأولاده الصغار الذين لا مال لهم ، ولا يلزمه صدقة الفطر عن أولاده الذين لا تجب نفقتهم عليه .',
    },
    {
      id: 2,
      title: 'التبرع بلباس العيد',
      image: 'assets/imgs/lebsa.webp',
      description:
        'التبرع بكسوة العيد للأطفال النازحين والمهجرين ، من أفضل الأعمال الصالحة إسعاد قلوب الناس ، وتلبية اِحتياجاتهم ، وعن أبي سعيد الخدري عن النبي صلى الله عليه وسلم قال:(من لبس المسلم ثوباً في عريته غطاه الله بخضر الجنة) .',
    },
    {
      id: 3,
      title: 'كفارة العاجز عن الصيام',
      image: 'assets/imgs/التبرع.jpg',
      description:
        ' قيمة الكفارة بإطعام 60 مسكيناً،قال تعالى: ،“فَمَنْ لَمْ يَجِدْ فَصِيَامُ شَهْرَيْنِ مُتَتَابِعَيْنِ مِنْ قَبْلِ أَنْ يَتَمَاسَّا فَمَنْ لَمْ يَسْتَطِعْ فَإِطْعَامُ سِتِّينَ مِسْكِينًا ذَلِكَ لِتُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَتِلْكَ حُدُودُ اللَّهِ وَلِلْكَافِرِينَ عَذَابٌ أَلِيمٌ”.',
    },
  ];
}
