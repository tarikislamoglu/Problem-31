import Image from 'next/image'
import { createContext, useContext } from 'react'

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



export default function App() {
  return <Hero />
}

function Hero() {
  const value = useContext(SaleContext)

  return (
    <div className='relative bg-gray-900'>
      <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
        <Image
          src='/hero-full-width.jpg'
          alt='Office Supplies'
          className='h-full w-full object-cover object-center'
          width={500}
          height={500}
        />
      </div>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0'>
        <h1 className='text-5xl font-bold tracking-tight text-white'>
          Her şey X indirimli olsun
        </h1>
        <p className='mt-4 text-xl text-white'>
          Yaz sürümümüzden seçenekler hala varken, en son gelişmelere göz atın
        </p>
        <a
          href='#'
          className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'
        >
          Yeni Gelenleri Satın Alın
        </a>
      </div>
    </div>
  )
}
