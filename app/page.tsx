import localFont from 'next/font/local'
import Link from 'next/link';
import { Button } from 'primereact/button';
const IranSans = localFont({ src: '../assets/fonts/IRANSansXFaNum-Regular.ttf' })

export default function Home() {

  return (
    <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
    <Link className='mx-auto' href={'/flight/search'}>
    <Button className='bg-[#ff7913]'>
      مشاهده  نتایج جستجو
    </Button>
    </Link>
    </main>
  );
}
