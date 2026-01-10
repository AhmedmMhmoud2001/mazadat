import { FiZap, FiShield, FiAward } from "react-icons/fi";
import { Link } from "react-router-dom";
import heroimg from "../assets/bghero.png";
const About = () => {
  return (
    <div className="bg-[#F5F2EB] min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[673px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 26.763%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.6) 80%), url(${heroimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center space-y-6 z-10 max-w-4xl px-4">
          <h1 className="text-[60px] font-bold text-[#1C1C28] leading-none">
            نبني عالمك الجديد
          </h1>
          <p className="text-[24px] text-[#1C1C28] font-medium">
            نصنع لك أسلوب حياة سكني متكامل، بمعايير حديثة وخبرة ممتدة
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-20 py-10 space-y-8">
        
        {/* من نحن Section */}
        <div className="flex flex-col items-center w-full">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 w-full space-y-5">
            <h2 className="text-[32px] font-bold text-[#1C1C28] text-center">من نحن</h2>
            <p className="text-[26px] font-medium text-[#1C1C28] text-right leading-normal">
              لوريم ايبسوم دولار سيت أميت إن تيمبور يوت تيمبور ماغنيت، لومينيير أولامكو أليكا نيسيوت أيت أليكويب نويس ريبيوديامت سيد نيسي إنيم إي مينيم ماجنا إت يوت إكزيرسيتيشن نيسيوت أميت، دونك، نويس لابورام إكزيرسيتيشن أ
            </p>
          </div>
        </div>

        {/* رؤيتنا ورسالتنا */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-center">رؤيتنا</h3>
            <p className="text-[20px] font-medium text-[#1C1C28] text-right leading-normal">
              لوريم ايبسوم دولار سيت أميت يوت نيسي نيسي كونسيكوات. سيد ديتيكتورمي ميو ديكتوم دولار سيد فوليا
            </p>
          </div>

          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-center">رسالتنا</h3>
            <p className="text-[20px] font-medium text-[#1C1C28] text-right leading-normal">
              لوريم ايبسوم دولار سيت أميت سيت كومودو ديواس إياسمود ماجنا توب نيسيوت أليكوي لامبور أيوتي فولي
            </p>
          </div>
        </div>

        {/* قيمنا الأساسية */}
        <div className="py-10">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-8 h-[315px] flex flex-col justify-center">
            <h2 className="text-[32px] font-bold text-[#232323] text-right">قيمنا الأساسية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-6 text-center">
                <FiAward className="w-[100px] h-[100px] text-[#1C1C28]" />
                <p className="text-[24px] font-bold text-[#1C1C28]">منتجات أصلية</p>
              </div>

              <div className="flex flex-col items-center gap-6 text-center">
                <FiShield className="w-[100px] h-[100px] text-[#1C1C28]" />
                <p className="text-[24px] font-bold text-[#1C1C28]">آمن و موثوق</p>
              </div>

              <div className="flex flex-col items-center gap-6 text-center">
                <FiZap className="w-[100px] h-[100px] text-[#1C1C28]" />
                <p className="text-[24px] font-bold text-[#1C1C28]">تحديثات فورية و مباشرة</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 w-[270px] h-[270px] flex flex-col items-center justify-center gap-8 text-center">
              <p className="text-[60px] font-bold text-[#9E7731] leading-none">24/7</p>
              <p className="text-[22px] font-medium text-[#1C1C28] leading-none">دعم العملاء</p>
            </div>

            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 w-[270px] h-[270px] flex flex-col items-center justify-center gap-8 text-center">
              <p className="text-[60px] font-bold text-[#9E7731] leading-none">200</p>
              <p className="text-[22px] font-medium text-[#1C1C28] leading-none">مزاد شهريا</p>
            </div>

            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 w-[270px] h-[270px] flex flex-col items-center justify-center gap-8 text-center">
              <p className="text-[60px] font-bold text-[#9E7731] leading-none">95%</p>
              <p className="text-[22px] font-medium text-[#1C1C28] leading-none">نسبة الرضا</p>
            </div>

            <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 w-[270px] h-[270px] flex flex-col items-center justify-center gap-8 text-center">
              <p className="text-[60px] font-bold text-[#9E7731] leading-none">20,000</p>
              <p className="text-[22px] font-medium text-[#1C1C28] leading-none">عضو نشط</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="py-10">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-5 flex flex-col items-center">
            <h2 className="text-[32px] font-bold text-[#1C1C28] text-center">هل لديك اسئلة؟</h2>
            <Link 
              to="/help" 
              className="bg-[#9E7731] hover:bg-[#8A6629] text-white font-semibold text-[16px] px-4 py-3 rounded-lg transition-colors h-[48px] w-[180px] flex items-center justify-center"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
