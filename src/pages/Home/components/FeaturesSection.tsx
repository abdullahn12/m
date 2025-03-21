import { FaRocket, FaClock, FaChartBar } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-4xl text-blue-600" />,
    title: "أداء متميز",
    description: "نظام سريع وفعال يضمن تجربة مستخدم سلسة"
  },
  {
    icon: <FaClock className="text-4xl text-blue-600" />,
    title: "توفير الوقت",
    description: "أتمتة العمليات لتوفير وقتك وجهدك"
  },
  {
    icon: <FaChartBar className="text-4xl text-blue-600" />,
    title: "تحليلات متقدمة",
    description: "رؤى تحليلية عميقة لتحسين أداء موقعك"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا تختار نظامنا؟</h2>
          <p className="text-lg text-gray-600">مميزات تساعدك على النجاح</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
