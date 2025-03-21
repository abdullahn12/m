import { FaUsers, FaLightbulb, FaHandshake, FaRobot, FaClock, FaUserTie, FaChartLine } from 'react-icons/fa';

const values = [
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: "فريق متخصص",
    description: "نمتلك فريقاً من الخبراء في مجال التقنية والتطوير"
  },
  {
    icon: <FaLightbulb className="text-4xl text-blue-600" />,
    title: "حلول مبتكرة",
    description: "نقدم حلولاً إبداعية تناسب احتياجات عملائنا"
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-600" />,
    title: "دعم مستمر",
    description: "نلتزم بتقديم الدعم المستمر لضمان نجاح عملائنا"
  }
];

const sections = [
  {
    id: 'vision',
    title: 'رؤيتنا',
    icon: <FaRobot className="text-4xl text-primary-600" />,
    content: 'نؤمن بأن الأتمتة والذكاء الاصطناعي هما مفتاح النجاح لأي عمل في العصر الرقمي، ونعمل على تقديم حلول مبتكرة تساعد عملاءنا على تحقيق أقصى استفادة من أدواتهم الرقمية.'
  },
  {
    id: 'mission',
    title: 'رسالتنا',
    icon: <FaClock className="text-4xl text-primary-600" />,
    content: 'مساعدتك على توفير الوقت والجهد من خلال منصتنا الذكية التي تجمع بين السهولة والمرونة لتلبية احتياجاتك التجارية.'
  },
  {
    id: 'team',
    title: 'فريق العمل',
    icon: <FaUserTie className="text-4xl text-primary-600" />,
    content: 'فريقنا يضم خبراء متخصصين في تطوير المنصات الرقمية، تحليل البيانات، وتصميم التجربة الرقمية لضمان تقديم حلول متقدمة وعملية.'
  }
];

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              شركة رائدة في مجال تطوير المواقع والحلول التقنية، نسعى لتقديم أفضل الخدمات لعملائنا
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Vision, Mission, Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {sections.map((section) => (
            <div key={section.id} 
                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                          transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-full bg-primary-50 mb-6">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-primary-50 rounded-2xl p-12 mb-24">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'سنوات خبرة' },
              { number: '500+', label: 'مشروع منجز' },
              { number: '100+', label: 'عميل سعيد' },
              { number: '24/7', label: 'دعم فني' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-primary-600 mb-2 
                              group-hover:scale-110 transform transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            هل تريد معرفة المزيد عن خدماتنا؟
          </h3>
          <p className="mb-8 opacity-90">
            تواصل معنا اليوم لمناقشة كيف يمكننا مساعدة عملك على النمو
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-xl 
                           hover:bg-gray-100 transition-colors duration-300 
                           font-semibold shadow-lg">
            تواصل معنا
          </button>
        </div>
      </div>
    </div>
  );
};
