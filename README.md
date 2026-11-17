# Rītausma — Baltkrievija 2020

Gatavs statisks laikraksta speciālizdevums latviešu valodā. Alternatīvās vēstures mācību situācija; Lukašenko atkāpšanās 2020. gada 14. augustā nenotika.

## Atvēršana

Atveriet `index.html` ar dubultklikšķi pārlūkā. Instalācija un serveris nav nepieciešams. Saglabājiet `assets`, `style.css` un `app.js` blakus HTML failam. Lapa un visi attēli darbojas arī bez interneta; ārējiem avotiem nepieciešams internets.

Ja vēlaties HTTP priekšskatījumu, šajā mapē palaidiet `python -m http.server 8000 --bind 127.0.0.1` un atveriet `http://127.0.0.1:8000`. Apturēšana: Ctrl+C.

## Lietošana

Sadaļas atver augšējā navigācija. Attēls atveras palielinājumā; aizverams ar pogu vai Escape. Q&A atveras ar klikšķi vai ar Tab un Enter/Space. Drukāšanas poga atver pārlūka drukas dialogu; atbildes drukāšanai tiek izvērstas automātiski. Ieteicams A4, 100% mērogs, bez pārlūka galvenēm un kājenēm.

## Pārbaude

`python verify.py` pārbauda vietējos attēlus, enkuru saites, UTF-8 un 16 Q&A. `node verify-js.cjs` pārbauda attēlu dialoga, Q&A un drukas stāvokļa loģiku ar DOM aizvietotājiem. `node --check app.js` pārbauda sintaksi.

Pārlūka vizuālā un faktiskās tastatūras mijiedarbības pārbaude datorā, telefonā un drukā šajā vidē netika pabeigta: pārlūka hosta savienojums nebija pieejams, bet Windows pārlūka logu vadība atgrieza minimizēta loga kļūdu. CSS ietver telefona izkārtojumu un A4 drukas stilus; tie vēl jāpārbauda vizuāli.

## Attēli un avoti

Visi attēli glabājas lokālajā `assets` mapē. `archive.jpeg` ir no dotā preses komplekta izņemts Maksima Šikuņeca 16.08.2020. foto melnbaltais pārveidojums, CC BY-SA 4.0. Autors, datums, oriģināls un licence norādīti lapā. Seši `image-0.png` līdz `image-5.png` ir ar iebūvēto OpenAI imagegen rīku radītas, skaidri marķētas ilustrācijas; uzdevumi saglabāti `image-prompts.txt`. Tās neattēlo autentiski dokumentētus notikumus.

Lapas identitāte, karte un shēmas ir oriģināla redakcionāla grafika. Pilnās avotu saites ir lapas beigās. Kontaktinformācija ir mācību paraugs. Publiska izvietošana nav veikta.

`build.py` ir satura sagatavošanas palīgskripts, kam nepieciešams sākotnējais PDF un PyMuPDF. Gatavās mājaslapas lietošanai tas nav vajadzīgs.
