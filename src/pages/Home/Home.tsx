import { Link } from 'react-router-dom';
import { FaRobot, FaLock, FaPuzzlePiece, FaStar, FaQuestion, FaRocket, FaArrowLeft } from 'react-icons/fa';
import heroImage from './a_smiling_businessman_working_at_his_desk_in_a_well-organized_office_that_conveys_success_and_growt_fw2iyhdwca916phd6nbd_0.png';

const testimonials = [
  {
    content: "بفضل خدمات الأتمتة لديكم، تمكنا من تحسين كفاءة العمل بنسبة 40%.",
    author: "أحمد السعيد"
  },
  {
    content: "أدوات تحليل الأداء ساعدتنا في اتخاذ قرارات مبنية على بيانات دقيقة.",
    author: "نور الدين حسن"
  },
  {
    content: "إدارة المشاريع عبر منصتكم جعلت العمل أكثر تنظيمًا وكفاءة.",
    author: "فاطمة الزهراء"
  }
];

const faqs = [
  {
    question: "كيف أبدأ باستخدام المنصة؟",
    answer: "ببساطة، اختر الخدمة التي تناسبك واتصل بنا للحصول على استشارة مجانية."
  },
  {
    question: "هل توفرون خدمات مخصصة؟",
    answer: "نعم، يمكننا تصميم حلول مخصصة تناسب احتياجاتك الفريدة."
  },
  {
    question: "هل يتم تحديث الأنظمة بشكل مستمر؟",
    answer: "نعم، نحن نضمن تحديث جميع خدماتنا بشكل منتظم."
  },
  {
    question: "هل توفرون دعمًا فنيًا مستمرًا؟",
    answer: "بالتأكيد، نقدم دعمًا فنيًا على مدار الساعة لضمان استمرارية عملك دون انقطاع."
  },
  {
    question: "هل يمكنني تجربة الخدمة قبل الاشتراك؟",
    answer: "نعم، نوفر لك فترة تجريبية مجانية لتقييم خدماتنا قبل اتخاذ قرارك."
  }
];

export const Home = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Enhanced Overlay */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: `linear-gradient(135deg, 
              rgba(0, 0, 0, 0.85) 0%,
              rgba(3, 106, 161, 0.74) 50%,
              rgba(3, 106, 161, 0.59) 100%
            ), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />

        <div className="relative z-10 w-full py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-start max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                انطلق بأعمالك إلى القمة مع منصتنا الذكية!
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                نحن نقدم لك حلولًا متكاملة مصممة خصيصًا لتلبية احتياجاتك الرقمية وتحسين كفاءة عملك. خدماتنا تركز على الأتمتة، تحسين التجربة الرقمية، وتعزيز الإنتاجية. اكتشف كيف يمكنك تحويل فكرتك إلى نجاح حقيقي.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/services" 
                  className="bg-white px-8 py-4 rounded-xl text-primary-600 font-semibold
                           hover:bg-white/90 transition-all duration-300 shadow-lg
                           hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  اكتشف خدماتنا
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-xl
                           text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-2xl">🛠️</span> هل لديك عمل تريد إنجازه؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نحن نوفر لك الأدوات الذكية التي تساعدك في تنفيذ مشاريعك بكفاءة عالية. سواء كنت بحاجة لتحليل بيانات، إدارة مشاريعك، أو تحسين تواجدك الرقمي، نحن هنا لخدمتك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Automation Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4">كيف تساعدك منصتنا على أتمتة مهامك؟</h3>
              <p className="text-gray-600 leading-relaxed">
                من خلال أدواتنا المتقدمة، يمكنك أتمتة المهام المتكررة وتوفير وقتك للتركيز على القرارات الاستراتيجية المهمة.
              </p>
            </div>

            {/* Quality Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">كيف نضمن لك الجودة والنتائج؟</h3>
              <p className="text-gray-600 leading-relaxed">
                نحن نطبق أفضل معايير الجودة من خلال استخدام أحدث الأدوات التقنية، وتوفير دعم فني متواصل.
              </p>
            </div>

            {/* Solutions Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-3xl mb-4">🧩</div>
              <h3 className="text-xl font-bold mb-4">الحلول المناسبة لاحتياجاتك</h3>
              <p className="text-gray-600 leading-relaxed">
                نقدم خدمات متنوعة تناسب جميع احتياجاتك الرقمية، بدءًا من تحليل الأداء وحتى تحسين تجربة العملاء.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-2xl">🌟</span> ماذا قال عملاؤنا عنا؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <p className="font-bold text-primary-600">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-2xl">❓</span> الأسئلة الشائعة
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-2xl">🚀</span> هل أنت جاهز لتحويل فكرتك إلى واقع؟
          </h2>
          <p className="text-xl opacity-90 mb-8">
            ابدأ الآن مع خدماتنا المتكاملة وحقق أهدافك التجارية بسهولة واحترافية.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold 
                     hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            احصل على استشارة مجانية الآن
            <span className="text-2xl">📤</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
