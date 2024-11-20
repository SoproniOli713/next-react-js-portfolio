export type PhotoStructure = {
  src: string;
  title: string;
  location: string;
  description: string;
};

const photos = [
  {
    src: "/img/photos/pinatubo.jpg",
    title: "The Majestic Mount Pinatubo: A Scenic Volcanic Adventure",
    location:
      "Mount Pinatubo is located on the border of the provinces of Pampanga, Tarlac, and Zambales, in Central Luzon, Philippines.",
    description:
      "Mount Pinatubo, located in the Philippines, is a stunning active stratovolcano renowned for its dramatic eruption in 1991. The eruption was one of the largest in the 20th century and reshaped the surrounding landscape. Today, Mount Pinatubo is a popular tourist destination offering visitors the chance to hike to the crater lake, which was formed after the eruption. The breathtaking view of the turquoise waters surrounded by towering volcanic ridges is a testament to the power of nature. Visitors can also explore the nearby lahar fields and enjoy the rich biodiversity of the area.",
  },
  {
    src: "/img/photos/mountpulag.jpg",
    title: "Mount Pulag: The Sea of Clouds and Majestic Highlands",
    location:
      "Mount Pulag is located in the province of Benguet, within the Cordillera Administrative Region, Philippines. It is accessible from the towns of Kabayan and Bokod.",
    description:
      "Mount Pulag, known as the `Playground of the Gods`, is the third-highest peak in the Philippines, standing at 2,926 meters above sea level. Located in the Cordillera Mountain Range, it is famous for its breathtaking `sea of clouds` phenomenon, where the clouds hover below the summit, creating a stunning visual effect. The mountain is a favorite destination for trekkers and nature enthusiasts, offering a variety of trails that lead through diverse ecosystems, from mossy forests to grasslands. With its cool climate and diverse wildlife, including the rare Philippine eagle, Mount Pulag is a must-visit for those seeking both adventure and tranquility.",
  },
  {
    src: "/img/photos/seiramadre.jpg",
    title: "Sierra Madre Mountain Range: The Backbone of Luzon",
    location:
      "The Sierra Madre Mountain Range stretches across the eastern side of Luzon, Philippines, from Cagayan Valley in the north to Quezon Province in the south.",
    description:
      "The Sierra Madre Mountain Range is the longest mountain range in the Philippines, stretching over 540 kilometers along the eastern side of Luzon Island. Known for its lush forests, rich biodiversity, and dramatic landscapes, the Sierra Madre serves as a crucial natural barrier that protects the island from typhoons coming from the Pacific Ocean. It is home to a variety of endemic species, including the Philippine eagle and the Philippine tarsier, and offers numerous hiking trails that wind through dense rainforests, waterfalls, and rivers. The range is not only a haven for nature lovers and adventurers but also plays an essential role in preserving the ecological balance of the region.",
  },
  {
    src: "/img/photos/maligcong.jpg",
    title: "Malicong Rice Terraces: A Hidden Gem in the Cordilleras",
    location:
      "The Maligcong Rice Terraces are located in Bontoc, the capital of the Mountain Province, Philippines.",
    description:
      "The Maligcong Rice Terraces, nestled in the heart of the Cordillera Mountains, are an exceptional example of the traditional agricultural practices of the indigenous people. Carved into the steep mountain slopes, these terraces have been cultivated for centuries, demonstrating the ingenuity and resilience of local communities. Visitors can enjoy the stunning views of lush, green landscapes while learning about the rich cultural heritage of the region.",
  },
  {
    src: "/img/photos/tree.jpg",
    title: "The Lone Sentinel: A Tree at the Summit",
    location:
      "The lone tree is located at the summit of Mount Pulag, in Benguet, Philippines.",
    description:
      "Perched at the summit of Mount Pulag, the lone tree stands as a resilient sentinel against the vast skies. Its solitary presence, amidst the sea of clouds and sweeping highlands, symbolizes endurance and strength. This tree, weathered by the elements, offers a striking contrast to the surrounding mountain landscape, making it a captivating sight for adventurers and nature enthusiasts alike.",
  },

  {
    src: "/img/photos/tapiyafalls.jpg",
    title: "Tapiya Falls: A Majestic Cascade in Batad",
    location: "Tapiya Falls is located in Batad, Banaue, Ifugao, Philippines.",
    description:
      "Tapiya Falls, nestled in the picturesque village of Batad, is a stunning natural wonder that captivates visitors with its powerful waterfall and breathtaking surroundings. The falls plunge over a steep cliff, creating a beautiful cascade that flows into a tranquil pool below, surrounded by lush greenery and the iconic rice terraces of Batad. A rewarding hike leads adventurers to this hidden gem, where they can enjoy the cool mist and serene beauty of the falls in the heart of the Cordillera mountains.",
  },
  {
    src: "/img/photos/purayfalls.jpg",
    title: "Puray Falls: A Hidden Gem in the Mountains",
    location:
      "Puray Falls is located in Rodriguez (formerly Montalban), Rizal, Philippines.",
    description:
      "Puray Falls is a tranquil and lesser-known waterfall located in the lush mountains of the Philippines. Surrounded by dense forests and natural beauty, the falls cascade down into a crystal-clear pool, offering a serene retreat for those seeking peace and adventure. The refreshing waters and picturesque surroundings make it an ideal destination for nature lovers and hikers looking to explore the less-traveled paths of the region.",
  },

  {
    src: "/img/photos/fortuneisland.jpg",
    title: "Fortune Island: Sunrise Over Twilight Waters",
    location:
      "Fortune Island is located off the coast of Nasugbu, Batangas, Philippines.",
    description:
      "Fortune Island, with its pristine shores and rugged beauty, offers a spectacular view at sunrise. As the first light of day touches the horizon, the sky transforms in hues of gold, pink, and purple, casting a magical glow over the island’s dramatic cliffs and tranquil waters. The peaceful twilight hours before the sun rises create a serene and almost mystical atmosphere, perfect for those seeking a quiet escape amidst nature's awe-inspiring beauty.",
  },
  {
    src: "/img/photos/dolarog.jpg",
    title: "Dolarog Sunset: A Golden Horizon",
    location: "Dolarog Beach is located in El Nido, Palawan, Philippines.",
    description:
      "Dolarog Beach in El Nido offers a breathtaking sunset, where the sky is filled with vibrant hues of orange, pink, and gold, beautifully reflecting on the calm waters. As the sun sets over the horizon, the serene atmosphere creates the perfect backdrop for a peaceful and unforgettable experience.",
  },
  {
    src: "/img/photos/fishing.jpg",
    title: "Fishing at Low Tide: A Tranquil El Nido Experience",
    location: "El Nido, Palawan, Philippines.",
    description:
      "Fishing during low tide in El Nido offers a peaceful and unique experience. As the tide recedes, fishermen wade through shallow waters, casting their nets and reels in search of the day’s catch. The calm surroundings and clear waters provide a perfect opportunity to connect with nature and witness local fishing traditions in one of the Philippines' most picturesque destinations.",
  },
  {
    src: "/img/photos/sunset.jpg",
    title: "Sunset at Cadlao Island: A Golden Paradise",
    location: "El Nido, Palawan, Philippines.",
    description:
      "The sunset at Cadlao Island in El Nido is a truly magical experience. As the sun dips below the horizon, the sky bursts into vibrant shades of orange, pink, and purple, casting a golden glow over the island's dramatic cliffs and crystal-clear waters. The peaceful atmosphere and stunning views make it the perfect spot to unwind and witness nature's breathtaking beauty.",
  },
  {
    src: "/img/photos/twilight.jpg",
    title: "Twilight Sunset at Cadlao Island: A Magical Horizon",
    location: "El Nido, Palawan, Philippines.",
    description:
      "The sunset at Cadlao Island in El Nido is a truly magical experience. As the sun dips below the horizon, the sky bursts into vibrant shades of orange, pink, and purple, casting a golden glow over the island's dramatic cliffs and crystal-clear waters. The peaceful atmosphere and stunning views make it the perfect spot to unwind and witness nature's breathtaking beauty.",
  },
];

export { photos };
