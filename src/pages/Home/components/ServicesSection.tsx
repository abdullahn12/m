import { FaChartLine, FaTasks, FaWpforms, FaStore, FaComments } from 'react-icons/fa';

const services = [
  {
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "تحليلات متقدمة",
    description: "نظامنا يُعد تحليلات جوجل تلقائيًا ويوفر تقارير أداء مباشرة"
  },
  {
    icon: <FaTasks className="text-4xl text-blue-600" />,
    title: "إدارة المشاريع",
    description: "وفر 30% من وقتك بإدارة المشاريع بفعالية"
  },
  {
    icon: <FaWpforms className="text-4xl text-blue-600" />,
    title: "نماذج تواصل",
    description: "صمم نماذج تفاعلية بسهولة مع تكامل مباشر"
  },
  {
    icon: <FaStore className="text-4xl text-blue-600" />,
    title: "متجر متكامل",
    description: "عزّز مبيعاتك باستخدام أدوات إدارة المنتجات المتقدمة"
  },
  {
    icon: <FaComments className="text-4xl text-blue-600" />,
    title: "دعم فوري",
    description: "استمتع بميزة الدردشة الحية لتوفير خدمة عملاء متميزة"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا</h2>
          <p className="text-lg text-gray-600">حلول متكاملة لتطوير أعمالك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
