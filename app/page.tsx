import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import localFont from 'next/font/local'
import Link from 'next/link';
const IranSans = localFont({ src: '../assets/fonts/IRANSansXFaNum-Regular.ttf' })

export default function Home() {

  return (
    <main className={`${IranSans.className} flex flex-row p-6 w-10/12 gap-11 mx-auto mt-12`}>
    <Link className='mx-auto' href={'/flight/search?departure=thr,1&arrival=ist'}>
    <PrimaryButton label='مشاهده  نتایج جستجو' />
    </Link>
    </main>
  );
}
