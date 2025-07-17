import { GdyniaShop } from "./gdynia-shop";
import { GdanskShop } from "./gdansk-shop";

const MarketGdynia = new GdyniaShop(true, 'Franciszek Mostkowiak');
const MarketGdansk = new GdanskShop(true, 'Karolina Grabowska');

MarketGdynia.addAddress('Limbowa 4, Gdynia');
MarketGdynia.addOwner('Kamila Baranowska');

MarketGdansk.addAddress('Wierzbowa 11, Gdansk');
MarketGdansk.addAddress('Jan Kowalski');