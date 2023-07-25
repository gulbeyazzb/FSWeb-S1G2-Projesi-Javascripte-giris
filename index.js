/* Görev 1: Isınalım Biraz :) */

const { arrayBuffer } = require("node:stream/consumers");
const { isNumberObject } = require("util/types");

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.*/
let surucuYasi = 27;

/* 2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.*/
if (surucuYasi > 18) {
  console.log(true);
} else console.log(false);
/* İPUCU: fonksiyon oluşturmaya gerek yok*/

/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
 2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
 3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın
   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger = 25;
let ikinciDeger = 25;
if (birinciDeger === ikinciDeger) {
  birinciDeger = "Yaz";
  console.log(birinciDeger);
} else {
  console.log(birinciDeger);
}
/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let deger1 = "1999";
let sayi = Number(deger1);
console.log(sayi);
console.log(typeof sayi);

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/
function carpma(a, b) {
  let sonuc = a * b;
  return sonuc;
}

console.log(carpma(7, 4));

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(yıl) {
  return console.log(
    "Köpeğin yaşı, insanın 2 yılına göre: " + yıl * 7 + " ' dür"
  );
}
kopeginYasi(2);

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/
function bilgisayarinSecimi() {
  let a = Math.floor(Math.random() * 3);
  if (a == 0) {
    return (a = "Taş");
  }
  if (a == 1) {
    return (a = "Kağıt");
  }
  if (a == 2) {
    return (a = "Makas");
  }
}

function oyun(oyuncu, bilgisayar) {
  if (oyuncu === "Taş" && bilgisayar === "Kağıt") {
    return console.log("Kazanamadın!");
  } else if (oyuncu === "Taş" && bilgisayar === "Taş") {
    return console.log("Berabere!");
  } else if (oyuncu === "Taş" && bilgisayar === "Makas") {
    return console.log("Kazandın!");
  } else if (oyuncu === "Kağıt" && bilgisayar === "Taş") {
    return console.log("Kazandın!");
  } else if (oyuncu === "Kağıt" && bilgisayar === "Kağıt") {
    return console.log("Berabere!");
  } else if (oyuncu === "Kağıt" && bilgisayar === "Makas") {
    return console.log("Kaybettin!");
  } else if (oyuncu === "Makas" && bilgisayar === "Taş") {
    return console.log("Kaybettin!");
  } else if (oyuncu === "Makas" && bilgisayar === "Kağıt") {
    return console.log("Kazandın!");
  } else {
    return console.log("Berabere!");
  }
}
console.log(bilgisayarinSecimi());
oyun("Taş", bilgisayarinSecimi());
// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/

/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km) {
  // 1 km=0, 621 mil;
  let mil;
  return console.log((mil = km * 0.621));
}
milDonusturucu(10);
//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(cm) {
  let feet;
  return console.log((feet = cm * 0.032808399) + " feet");
}
feetDonusturucu(100);

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.5
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

function cocukSarkisi(sayi) {
  return console.log(
    sayi +
      " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"
  );
}
for (let i = 5; i > 0; i--) {
  cocukSarkisi(i);
}

/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(not) {
  if (not <= 100 && not >= 90) {
    return console.log(not + " notu ile A aldın");
  } else if (not < 90 && not >= 80) {
    return console.log(not + " notu ile B aldın");
  } else if (not < 80 && not >= 70) {
    return console.log(not + " notu ile C aldın");
  } else if (not < 70 && not >= 60) {
    return console.log(not + " notu ile D aldın");
  } else {
    return console.log(not + " notu ile F aldın");
  }
}
notHesapla(85);

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(kelime) {
  let sayac = 0;
  const sesli_harf = [
    "a",
    "e",
    "ı",
    "i",
    "o",
    "ö",
    "u",
    "ü",
    "A",
    "E",
    "I",
    "İ",
    "O",
    "Ö",
    "U",
    "Ü",
  ];
  for (let harf of kelime) {
    if (sesli_harf.includes(harf)) {
      sayac++;
    }
  }
  return console.log(sayac);
}
sesliHarfSayaci("GÜlbeyaz BAYRAM");

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
