
import React from 'react';
import Section from '../components/Section';

const Home = () => {
    const items = [
        {
            id: 1,
            title: 'Kod yazarken dinlediklerim ',
            artist_Name: 'Dedüblüman',
            description: 'Kod yazarken dinlediklerim',
            image: 'https://mosaic.scdn.co/300/ab67616d00001e023e08f3d018674bf8cf5fdc56ab67616d00001e0261d6750a0251c9499570e586ab67616d00001e0267268e8f713f8e2fedbcb27dab67616d00001e02decb39445b0d6e16fb91e03b',
            src: 'https://blue.az/uploads/tracks/2050241064_728044686_1014534640.mp3'
        },
        {
            id: 2,
            title: 'Yılbaşı Özel',
            artist_Name: 'Semicenk',
            description: 'Yeni yılınız kutlu olsun',
            image: 'https://i.scdn.co/image/ab67706f00000002ce208a4bb4b5a6f35b119564',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Dedubluman/Bir-Ihtimal-Halim/Dedubluman-Belki.mp3'
        },
        {
            id: 3,
            title: '2000ler Mix',
            description: 'Ayla Dikmen İlhan Şeşen ve daha fazlası Ümit Besen, Cengiz Kurtoğlu',
            image: 'https://i.scdn.co/image/ab6761610000f178b2b839eece9cc94de13269c8',
            type: 'artist',
            artist_Name: 'Uzı',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Billie-Eilish/When-I-Was-Older/Billie-Eilish-Lovely.mp3'
        },
        {
            id: 4,
            title: '2000ler Mix',
            artist_Name: 'Mert Demir, Mabel Matiz',
            description: 'Ayla Dikmen İlhan Şeşen ve daha fazlası',
            image: 'https://i.scdn.co/image/ab67706f000000022a66f07450f6b4f9f8c60d10',
            src: 'https://mp3indirdurum.com/mp3dosyalari/cw==/bA==/slower-brindar-belalim.mp3'
        },
        {
            id: 5,
            title: '2000ler Mix',
            artist_Name: 'Güneş',
            description: 'Ayla Dikmen İlhan Şeşen ve daha fazlası',
            image: 'https://i.scdn.co/image/ab67706f00000002ef908f9ab18def3e59c1da70',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Semicenk/Dayan/Semicenk-Unutmak-Oyle-Kolay-mi-Sandin.mp3'
        },
        {
            id: 6,
            title: 'Oysa herkes öldürür sevdiğini',
            artist_Name: 'Köfn',
            description: 'Ayla Dikmen İlhan Şeşen ve daha fazlası',
            image: 'https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1',
            src: 'https://www.mp3indirdur.info/mp3/indirdurArsiv333/Tekir/Vaveyla/Tekir-Aglaya-Aglaya.mp3'
        }
    ]
    return (
        <div className='grid gap-y-6'>
            <Section
                title="En çok dinlediğin mix'ler"
                more="/blabla"
                items={items}
            />
            <Section
                title="Sana özel bölümler"
                more="/blabla"
                items={items}
            />
            <Section
                title="Yakınlarda Çalınanlar"
                more="/blabla"
                items={items}
            />
        </div>
    );
};

export default Home;