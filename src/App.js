import Image from "next/image";
import { createContext, useContext, useState } from "react";

const SaleContext = createContext();

export default function App() {
  const [discount, setDiscount] = useState("%50");
  return (
    <SaleContext.Provider value={{ discount: discount || "%20", setDiscount }}>
      <Hero />
    </SaleContext.Provider>
  );
}

function Hero() {
  const { discount, setDiscount } = useContext(SaleContext);

  return (
    <div className="relative bg-gray-900  lg:p-0 md:p-10 sm:p-20 p-40">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-full-width.jpg"
          alt="Office Supplies"
          className="h-full w-full object-cover object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-lg" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
        <h1
          className={`text-5xl font-bold tracking-tight text-white bg-gradient-to-r  rounded-md p-1 ${
            parseFloat(discount.slice(1)) > 50
              ? "from-yellow-400 to-red-700"
              : "from-blue-400 to-green-500"
          }`}
        >
          Her şey {discount} indirimli olsun
        </h1>
        <button
          className="bg-white p-1 rounded-md mt-4 hover:scale-105 active:scale-95"
          onClick={() => setDiscount(`%${Math.floor(Math.random() * 100)}`)}
        >
          Change Discount Rate
        </button>
        <p className="mt-4 text-xl text-white">
          Yaz sürümümüzden seçenekler hala varken, en son gelişmelere göz atın
        </p>
        <a
          href="#"
          className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 hover:scale-105 active:scale-95"
        >
          Yeni Gelenleri Satın Alın
        </a>
      </div>
    </div>
  );
}

// Aşağıdaki Hero bileşeni, promosyon mesajı içeren tam ekran bir kahraman bölümü oluşturmaktadır.
// Ancak şu anda useContext ile veri çekmeye çalışıyor ama ilgili Context henüz tanımlı değil.
// Amacınız Context API kullanarak bileşeni işlevsel hale getirmek ve Tailwind CSS ile daha gelişmiş tasarımlar eklemektir.

// ✅ createContext kullanarak SaleContext adında bir bağlam (context) oluşturun ve Hero bileşenine uygun veriyi sağlayın.
// ✅ SaleContext.Provider ile Hero bileşeninin ihtiyacı olan indirim bilgisini sağlayın.
// ✅ Hero bileşeninde `Her şey X indirimli olsun` yazısını, SaleContext içindeki dinamik bir değerle değiştirin.
// ✅ useContext kullanarak Context verisini okuyun ve indirim oranını metin içinde dinamik olarak gösterin (örn: "Her şey %50 indirimli olsun").
// ✅ Eğer Context değeri yoksa, varsayılan olarak `%20 indirim` gösterilsin.
// ✅ Context değerini global olarak yönetebilmek için App bileşeninde bir state ile kontrol edin ve indirim oranını değiştirebilecek bir buton ekleyin.

// Bonus:
// ✨ Hero bileşeninin arka planına bulanık bir backdrop-filter efekti ekleyerek görselin daha okunaklı olmasını sağlayın (backdrop-blur-lg).
// ✨ Hero başlığının (h1) yazı tipini text-transparent bg-clip-text özelliğiyle degrade bir renkle değiştirin (örn: bg-gradient-to-r from-yellow-400 to-red-500).
// ✨ hover: kullanarak butonun üzerine gelindiğinde hafifçe büyümesini sağlayın (scale-105 transition-transform).
// ✨ Butona tıklandığında ufak bir "click" efekti oluşturun (active:scale-95).
// ✨ Ekran genişliğine göre Hero bileşeninin padding ve margin ayarlarını değiştiren class'lar kullanın (sm:py-64 lg:px-0 gibi).
// ✨ Eğer SaleContext içinde indirim oranı %50 veya daha büyükse, arka plan rengini otomatik olarak kırmızıya (bg-red-700) çevirin.
