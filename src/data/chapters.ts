export interface Chapter {
  id: string;
  name: string;
  city: string;
  region: Record<'en' | 'fr' | 'es', string>;
  lat: number;
  lng: number;
  email: string;
  website?: string;
}

export const chapters: Chapter[] = [
  // British Columbia & Yukon
  { id: 'vancouver', name: 'Mensa Vancouver', city: 'Vancouver', region: { en: 'British Columbia & Yukon', fr: 'Colombie-Britannique et Yukon', es: 'Columbia Británica y Yukón' }, lat: 49.2827, lng: -123.1207, email: 'sight-bc@mensa.ca', website: 'https://vancouver.mensa.ca/' },
  { id: 'victoria', name: 'Mensa BC Islands', city: 'Victoria', region: { en: 'British Columbia & Yukon', fr: 'Colombie-Britannique et Yukon', es: 'Columbia Británica y Yukón' }, lat: 48.4284, lng: -123.3656, email: 'sight-bc@mensa.ca', website: 'https://bci.mensa.ca/' },
  { id: 'kelowna', name: 'Mensa BC Mountain', city: 'Kelowna', region: { en: 'British Columbia & Yukon', fr: 'Colombie-Britannique et Yukon', es: 'Columbia Británica y Yukón' }, lat: 49.888, lng: -119.496, email: 'sight-bc@mensa.ca' },
  // Alberta
  { id: 'calgary', name: 'Mensa Calgary', city: 'Calgary', region: { en: 'Alberta', fr: 'Alberta', es: 'Alberta' }, lat: 51.0447, lng: -114.0719, email: 'sight-prairies@mensa.ca', website: 'https://calgary.mensa.ca/' },
  { id: 'edmonton', name: 'Mensa Edmonton', city: 'Edmonton', region: { en: 'Alberta', fr: 'Alberta', es: 'Alberta' }, lat: 53.5461, lng: -113.4938, email: 'sight-prairies@mensa.ca', website: 'https://edmonton.mensa.ca/' },
  // Saskatchewan
  { id: 'saskatoon', name: 'Mensa Saskatchewan', city: 'Saskatoon', region: { en: 'Saskatchewan', fr: 'Saskatchewan', es: 'Saskatchewan' }, lat: 52.1332, lng: -106.6700, email: 'sight-prairies@mensa.ca', website: 'https://saskatchewan.mensa.ca/' },
  // Manitoba
  { id: 'winnipeg', name: 'Mensa Manitoba', city: 'Winnipeg', region: { en: 'Manitoba', fr: 'Manitoba', es: 'Manitoba' }, lat: 49.8951, lng: -97.1384, email: 'sight-prairies@mensa.ca', website: 'https://manitoba.mensa.ca/' },
  // Ontario
  { id: 'toronto', name: 'Mensa Toronto', city: 'Toronto', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 43.6532, lng: -79.3832, email: 'sight-ontario@mensa.ca', website: 'https://toronto.mensa.ca/' },
  { id: 'ottawa', name: 'Mensa Ottawa', city: 'Ottawa', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 45.4215, lng: -75.6972, email: 'sight-ontario@mensa.ca' },
  { id: 'london', name: 'Mensa London', city: 'London', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 42.9849, lng: -81.2453, email: 'sight-ontario@mensa.ca' },
  { id: 'sw-ontario', name: 'Mensa Southwestern Ontario', city: 'Kitchener', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 43.4516, lng: -80.4925, email: 'sight-ontario@mensa.ca' },
  { id: 'n-ontario', name: 'Mensa Northern Ontario', city: 'Sudbury', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 46.4917, lng: -80.9930, email: 'sight-ontario@mensa.ca' },
  { id: 'windsor', name: 'Mensa Windsor', city: 'Windsor', region: { en: 'Ontario', fr: 'Ontario', es: 'Ontario' }, lat: 42.3149, lng: -83.0364, email: 'sight-ontario@mensa.ca' },
  // Quebec
  { id: 'montreal', name: 'Mensa Montreal', city: 'Montréal', region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' }, lat: 45.5017, lng: -73.5673, email: 'sight-quebec@mensa.ca', website: 'https://montreal.mensa.ca/' },
  { id: 'quebec-city', name: 'Mensa Quebec', city: 'Québec', region: { en: 'Quebec', fr: 'Québec', es: 'Quebec' }, lat: 46.8139, lng: -71.208, email: 'sight-quebec@mensa.ca', website: 'https://quebec.mensa.ca/' },
  // Atlantic
  { id: 'halifax', name: 'Mensa Atlantic', city: 'Halifax', region: { en: 'Atlantic Canada', fr: 'Canada atlantique', es: 'Canadá atlántico' }, lat: 44.6488, lng: -63.5752, email: 'sight-atlantic@mensa.ca', website: 'http://atlanticmensa.org/' },
];
