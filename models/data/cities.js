import { configDotenv } from "dotenv";
import 'dotenv/config.js'
import '../../config/database.js';
import City from "../City.js";

let cities = [
    {
      name: "Neuquen",
      image: "https://elviajerofeliz.com/wp-content/uploads/2015/09/ruta-de-los-7-lagos-1.jpg",
      country: "Argentina",
      description: "Neuquén, an Argentine province, showcases diverse landscapes from Andean peaks to Patagonian steppe. Rich in natural resources, it's a hub for oil, gas, and renewable energy production. The city of Neuquén offers modern amenities, while the province's wilderness invites outdoor enthusiasts to explore lakes, mountains, and fossil sites.",
      coin: "Argentine peso - ARS ($)"
    },
    {
      name: "Iguazu",
      image: "https://elviajerofeliz.com/wp-content/uploads/2015/07/ushuaia-6.jpg",
      country: "Argentina",
      description: "Iguazu Falls, located on the Argentina-Brazil border, is a breathtaking natural wonder. A system of 275 waterfalls within lush rainforest creates a mesmerizing spectacle. The awe-inspiring cascade of water, including the iconic Devil's Throat, makes it one of the world's most stunning and visited natural attractions.",
      coin: "Argentine peso - ARS ($)"
    },
    {
      name: "Mendoza",
      image: "https://elviajerofeliz.com/wp-content/uploads/2019/12/Qu%C3%A9-ver-en-Mendoza-Parque-Central.jpg",
      country: "Argentina",
      description: "Mendoza, a province in western Argentina, stands out for its mountainous landscape with the Andes range and Aconcagua. Renowned for wine production, particularly Malbec, and its wineries. Appeals to adventure tourism and hiking. Semi-arid climate with agricultural oases.",
      coin: "Argentine peso - ARS ($)"
    },
    {
      name: "Ushuaia",
      image: "https://elviajerofeliz.com/wp-content/uploads/2015/10/Iguazu.jpg",
      country: "Argentina",
      description: "Ushuaia, situated at the southern tip of Argentina, is renowned as the world's southernmost city. It boasts dramatic landscapes of snow-capped mountains, glaciers, and Beagle Channel's pristine waters. A gateway to Antarctica, Ushuaia offers unique adventure opportunities, wildlife encounters, and a blend of rugged nature and charming city life.",
      coin: "Argentine peso - ARS ($)"
    },
    {
      name: "Barcelona",
      image: "https://elviajerofeliz.com/wp-content/uploads/2023/05/cosas-interesantes-que-hacer-esta-primavera-en-barcelona-1.jpg",
      country: "Spain",
      description: "Barcelona, a Spanish gem on the Mediterranean coast, is a fusion of architecture, culture, and beachside charm. Gaudí's masterpieces, like Sagrada Família, adorn the cityscape. La Rambla's bustling promenade, Gothic Quarter's history, and vibrant markets highlight its character. A dynamic arts scene and Catalonian spirit contribute to its captivating allure.",
      coin: "Euro - EUR(€)"
    },
    {
      name: "London",
      image: "https://elviajerofeliz.com/wp-content/uploads/2019/05/Londres-3.jpg",
      country: "England and UK",
      description: "London, the vibrant UK capital, harmonizes history and modernity. The Tower of London, Buckingham Palace, and Big Ben symbolize its rich heritage. The Thames River flows through a diverse cityscape, hosting cultural institutions like the British Museum. The multicultural hub thrives with theater, markets, and a dynamic cosmopolitan energy.",
      coin: "Euro - EUR(€)"
    },
    {
      name: "Venice",
      image: "https://elviajerofeliz.com/wp-content/uploads/2020/12/venice-picture-id121009706.jpg",
      country: "Italy",
      description: "Venecia, a captivating Italian city, is a masterpiece of architecture and culture set on a network of canals. Historic palaces, including St. Mark's Basilica, line the iconic Grand Canal. Gondola rides, vibrant festivals like Carnevale, and intricate bridges contribute to its romantic allure, making it a globally acclaimed destination.",
      coin: "Euro - EUR(€)"
    },
    {
      name: "Paris",
      image: "https://elviajerofeliz.com/wp-content/uploads/2018/06/jardines-de-luxemburgo.jpg",
      country: "France",
      description: "Paris, the enchanting capital of France, is a timeless city of art, fashion, and history. The Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral grace its iconic skyline. Charming cafes, the River Seine's beauty, and renowned cuisine create a unique atmosphere. Paris remains a global center for culture, romance, and sophistication.",
      coin: "Euro - EUR(€)"
    },
    {
      name: "Doha",
      image: "https://elviajerofeliz.com/wp-content/uploads/2019/10/qatar1-min.jpg",
      country: "Qatar",
      description: "Qatar, una nación del Medio Oriente en la Península Arábiga, combina la herencia tradicional con un rápido desarrollo. Doha, su capital, cuenta con rascacielos futuristas, incluida la icónica Biblioteca Nacional de Qatar. Rico en reservas de gas natural, Qatar ha adoptado la diversidad cultural, organizando eventos mundiales y espectáculos deportivos mientras preserva sus tradiciones árabes.",
      coin: "Rial - QAR (ر.ق)"
    },
    {
      name: "Seul",
      image: "https://elviajerofeliz.com/wp-content/uploads/2020/04/Haedong-Yonggungsa.jpg",
      country: "South Korea",
      description: "Seúl, the dynamic capital of South Korea, is a blend of ancient history and modern trends. Historic palaces like Gyeongbokgung stand beside futuristic architecture. Myeongdong's shopping mecca and Gangnam's upscale district highlight the city's diverse lifestyle. A rich culinary scene, K-pop influence, and cultural heritage make Seoul a captivating global destination.",
      coin: "Won - KRW (₩)"
    },
    {
      name: "Taj Mahal",
      image: "https://elviajerofeliz.com/wp-content/uploads/2022/11/consejos-al-viajar-a-la-india.jpg",
      country: "India",
      description: "The Taj Mahal, a UNESCO World Heritage site in Agra, India, is a stunning white marble mausoleum. Built in the 17th century by Emperor Shah Jahan in memory of his wife, it combines intricate Islamic and Persian architecture. Its ethereal beauty, symmetrical gardens, and reflection in the pool create an iconic masterpiece.",
      coin: "Indian rupee - INR (₹)"
    },
    {
      name: "Shangai",
      image: "https://elviajerofeliz.com/wp-content/uploads/2015/10/china.jpg",
      country:"China",
      description: "Shanghai, China's global metropolis, marries tradition and modernity. Its futuristic skyline along the Huangpu River includes the Oriental Pearl Tower. The Bund showcases colonial-era architecture. Yu Garden preserves classic charm, while Pudong's financial hub symbolizes progress. The city pulsates with commerce, culture, and a fusion of Eastern and Western influences.",
      coin: "Yuan - CNY (¥)"
    },
    {
      name: "Tokyo",
      image: "https://elviajerofeliz.com/wp-content/uploads/2016/03/que-ver-en-Asakusa-10.jpg",
      country:"Japan",
      description: "Tokio, Japan's bustling capital, merges ancient heritage with cutting-edge innovation. Skyscrapers like Tokyo Tower dominate the skyline, while historic temples and shrines offer serenity. A center of pop culture and technology, Akihabara and Shibuya Crossing epitomize modern vibrancy. The city's harmony between tradition and modernity captivates visitors from around the world.",
      coin: "Yen - JPY (¥)"
    },
    {
      name: "Miami",
      image: "https://elviajerofeliz.com/wp-content/uploads/2015/09/playas-de-Miami-10.jpg",
      country: "USA",
      description: "Miami, a dynamic city in Florida, embodies sun-soaked beaches, vibrant nightlife, and multicultural flair. Art Deco architecture lines the iconic South Beach, while neighborhoods like Little Havana and Wynwood offer cultural diversity and street art. A hub for entertainment, shopping, and water sports, Miami exudes a lively and tropical atmosphere.",
      coin: "Dollar - USA($)"
    },
    {
      name: "Rio de Janeiro",
      image: "https://elviajerofeliz.com/wp-content/uploads/2017/10/cristo-redentor.jpg",
      country: "Brazilian",
      description: "Rio de Janeiro, Brazil's bustling coastal metropolis, is renowned for its vibrant culture and stunning natural beauty. Iconic landmarks like Christ the Redeemer and Copacabana Beach captivate visitors. Carnival, the world's largest festival, showcases samba and colorful parades. This dynamic city melds rich history with a lively contemporary atmosphere.",
      coin: "Real - BRL(R$)"
    }
  ];

  City.insertMany(cities);