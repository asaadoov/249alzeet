import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col' dir="rtl">
      <nav className='flex justify-center items-center w-full my-3 py-3'>
        <img src={logo} alt='sumz_logo' className='w-50 object-contain' />
      </nav>

      <h1 className='head_text  text-right'>
        تلخيص المقالات وترجمتها مع <br className='max-md:hidden' />
        <span className='blue_gradient'>الذكاء الاصطناعي</span>
      </h1>
      <h2 className='desc text-right font-satoshi'>
        القراية بقت ساهلة خلاص .. ما محتاج ساعة عشان تقرأ مقالة، لا وكمان ترجمناها ليكم .. اقروا ياخ قُر ينفخكم
      </h2>
    </header>
  );
};

export default Hero;
