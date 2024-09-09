import localFont from 'next/font/local'
const IranSans = localFont({ src: '../assets/fonts/IRANSansXFaNum-Regular.ttf' })

export default function Home() {

  return (
    <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
    
    </main>
  );
}
