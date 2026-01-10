import heroimg from "../assets/bghero.png";
const Services = () => {
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
        
        {/* Services Grid - Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-5 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">شحن وتوصيل نحن</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              تجهيز أوراق التسليم وخيارات الشحن للسلع الفائزة.
            </p>
          </div>

          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-5 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">تقييم الأصول</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              خبراء لتقييم السيارات، العقارات، والمقتنيات قبل الطرح.
            </p>
          </div>
        </div>

        {/* Services Grid - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">مزادات مباشرة</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              تجربة تفاعلية مع عدّاد حيّ وسجلّ عطاءات لحظي.
            </p>
          </div>

          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">مزادات مجدولة</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              حدد وقت البدء والنهاية مع إشعارات تلقائية للمزايدين.
            </p>
          </div>
        </div>

        {/* Services Grid - Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">حلول دفع آمنة</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              دفع بالبطاقات وApple Pay وتحويلات بنكية مع 3D Secure.
            </p>
          </div>

          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-4 h-[207px] flex flex-col">
            <h3 className="text-[32px] font-bold text-[#1C1C28] text-right">إدارة البائعين</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-normal">
              لوحة تحكم للبائع لمتابعة المزادات والمستندات والمدفوعات.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-10 text-center">
              <div className="bg-[#1C1C28] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <p className="text-[36px] font-bold text-[#F5F2EB]">1</p>
              </div>
              <div className="space-y-8">
                <h3 className="text-[32px] font-bold text-[#9E7731]">تقييم الأصل</h3>
                <p className="text-[22px] font-medium text-black">فريق خبراء يقيم قيمة الأصل بدقة</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 text-center">
              <div className="bg-[#1C1C28] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <p className="text-[36px] font-bold text-[#F5F2EB]">2</p>
              </div>
              <div className="space-y-8">
                <h3 className="text-[32px] font-bold text-[#9E7731]">التحضير والتوثيق</h3>
                <p className="text-[22px] font-medium text-black">إعداد الوثائق والصور المطلوبة</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 text-center">
              <div className="bg-[#1C1C28] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <p className="text-[36px] font-bold text-[#F5F2EB]">3</p>
              </div>
              <div className="space-y-8">
                <h3 className="text-[32px] font-bold text-[#9E7731]">إطلاق المزاد</h3>
                <p className="text-[22px] font-medium text-black">نشر المزاد وبدء عملية المزايدة</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-10 text-center">
              <div className="bg-[#1C1C28] w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <p className="text-[36px] font-bold text-[#F5F2EB]">4</p>
              </div>
              <div className="space-y-8">
                <h3 className="text-[32px] font-bold text-[#9E7731]">بيع وتسليم آمن</h3>
                <p className="text-[22px] font-medium text-black">إتمام البيع وتسليم آمن للمشتري</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-8 h-[270px] flex flex-col justify-center">
            <h3 className="text-[30px] font-bold text-[#9E7731] text-right leading-none">أمان و موثوقية</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-[1.33]">
              نضمن حماية كاملة لجميع المعاملات مع تشفير متقدم وحماية البيانات الشخصية
            </p>
          </div>

          <div className="bg-[#F5F2EB] rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] p-10 space-y-8 h-[270px] flex flex-col justify-center">
            <h3 className="text-[30px] font-bold text-[#9E7731] text-right leading-none">دعم متخصص</h3>
            <p className="text-[22px] font-medium text-[#1C1C28] text-right leading-[1.33]">
              فريق خبراء متاح 24/7 لمساعدتك في جميع مراحل عملية البيع والشراء
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
