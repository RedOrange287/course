const dogsGallery = document.querySelector('.dogsGallery');

const galleryBlock = [
	[
		{
			image: 'public/gallery/alabai.jpg',
			breed: 'Алабай'
		},
		{
			image: 'public/gallery/Basenji.jpg',
			breed: 'Басенджи'
		},
		{
			image: 'public/gallery/beagle.jpg',
			breed: 'Бигль'
		},
		{
			image: 'public/gallery/beauceron.jpeg',
			breed: 'Босерон'
		},
	],
	[
		{
			image: 'public/gallery/bergamasco.jpg',
			breed: 'Бергамаско'
		},
		{
			image: 'public/gallery/bernard.jpg',
			breed: 'Сенбернар'
		},
		{
			image: 'public/gallery/border_collie.jpeg',
			breed: 'Бордер-колли'
		},
		{
			image: 'public/gallery/briar.jpg',
			breed: 'Бриар'
		},		
	],
	[
		{
			image: 'public/gallery/bull_terrier.jpg',
			breed: 'Бульдог'
		},
		{
			image: 'public/gallery/cane corso.jpg',
			breed: 'Кане-корсо'
		},
		{
			image: 'public/gallery/Cao_de_Castro-laboreiro.jpg',
			breed: 'Као де Кастро-Леборьеро'
		},
		{
			image: 'public/gallery/caucasian_shepherd_dog.jpeg',
			breed: 'Кавказская овчарка'
		},		
	],
	[
		{
			image: 'public/gallery/chow_chow.jpg',
			breed: 'Чау-чау'
		},
		{
			image: 'public/gallery/dachshund.jpg',
			breed: 'Такса'
		},
		{
			image: 'public/gallery/dalmatian.jpg',
			breed: 'Далматин'
		},
		{
			image: 'public/gallery/doberman.jpg',
			breed: 'Доберман'
		},		
	],
	[
		{
			image: 'public/gallery/dog.jpg',
			breed: 'Дог'
		},
		{
			image: 'public/gallery/giant_Schnauzer.jpg',
			breed: 'Ризеншнаудцер'
		},
		{
			image: 'public/gallery/grunendal.jpg',
			breed: 'Грюнендаль'
		},
		{
			image: 'public/gallery/karelian_bear_dog.jpg',
			breed: 'Карельская медвежья собака'
		},		
	],
	[
		{
			image: 'public/gallery/keeshond.jpg',
			breed: 'Кеесхонд'
		},
		{
			image: 'public/gallery/korgi.jpg',
			breed: 'Корги'
		},
		{
			image: 'public/gallery/laika.jpg',
			breed: 'Лайка'
		},
		{
			image: 'public/gallery/malamute.jpg',
			breed: 'Маламут'
		},		
	],
	[
		{
			image: 'public/gallery/malinua.jpg',
			breed: 'Малинуа'
		},
		{
			image: 'public/gallery/mastif.jpg',
			breed: 'Мастиф'
		},
		{
			image: 'public/gallery/metis.jpg',
			breed: 'Метис'
		},
		{
			image: 'public/gallery/mops.jpg',
			breed: 'Мопс'
		},		
	],
	[
		{
			image: 'public/gallery/mountain_dog.jpg',
			breed: 'Зенненхунд'
		},
		{
			image: 'public/gallery/newfoundland.jpeg',
			breed: 'Ньюфаундленд'
		},
		{
			image: 'public/gallery/retriever.jpeg',
			breed: 'Ретривер'
		},
		{
			image: 'public/gallery/ridjbek.jpg',
			breed: 'Риджбек'
		},		
	],
	[
		{
			image: 'public/gallery/rottweiler.jpg',
			breed: 'Ротвейлер'
		},
		{
			image: 'public/gallery/samoyed_dog.jpg',
			breed: 'Самоедская собака'
		},
		{
			image: 'public/gallery/siberian.jpg',
			breed: 'Хаски'
		},
		{
			image: 'public/gallery/spaniel.jpg',
			breed: 'Спаниэль'
		},		
	],
	[
		{
			image: 'public/gallery/spitz.png',
			breed: 'Померанский шпиц'
		},
		{
			image: 'public/gallery/Swedish_vallhund.jpg',
			breed: 'Шведский вальхунд'
		},
		{
			image: 'public/gallery/swiss_hound.jpg',
			breed: 'Гончая'
		},
		{
			image: 'public/gallery/vizsla.jpeg',
			breed: 'Выжла'
		},		
	],
	[
		{
			image: 'public/gallery/wolf_dog.jpg',
			breed: 'Волчья собака'
		},
		{
			image: 'public/gallery/wolfhound.jpeg',
			breed: 'Волкодав'
		},
		{
			image: 'public/gallery/xoloitzcuintli.jpg',
			breed: 'Ксолоитцкуинтли'
		},
		{
			image: 'public/gallery/yorkshire_terrier.jpg',
			breed: 'Йоркшерский терьер'
		},		
	],
];

for (let i = 0; i < 11; i++) {	
	for (let j = 0; j < 4; j++) {	
		dogsGallery.insertAdjacentHTML('beforeend', `
	      <div class="responsive">
	        <div class="gallery">
	            <img src="${galleryBlock[i][j].image}" alt="Cinque Terre" width="600" height="400">
	          <div class="desc">${galleryBlock[i][j].breed}</div>
	        </div>
	      </div>
		`);
	}
	dogsGallery.insertAdjacentHTML('beforeend', `
	      <div class="clearfix"></div>
	      <div style="padding:6px;"></div>
	`);
}

let block1 = document.querySelector('.blok1').scrollHeight;

window.onresize = () => {
	block1 = document.querySelector('.blok1').scrollHeight;
	document.querySelector('.blok1').style.height = `${block1}px;`;
}
