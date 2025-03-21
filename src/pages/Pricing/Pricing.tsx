import { useState } from 'react';
import { FaCheck, FaCrown, FaRocket, FaStar } from 'react-icons/fa';
import { ServiceRequestForm } from '../../components/ServiceRequest/ServiceRequestForm';

const plans = [
  {
    name: 'الخطة الأساسية',
    description: 'مثالية للمبتدئين والمستقلين',
    icon: <FaStar className="text-yellow-400" />,
    price: '299',
    features: [
      'أدوات أساسية لإدارة الأعمال',
      'إعداد تقارير تحليلات جوجل تلقائي',
      'قوالب نماذج اتصال بسيطة',
    ],
    color: 'blue'
  },
  {
    name: 'الخطة الاحترافية',
    description: 'مخصصة لأصحاب الشركات الصغيرة',
    icon: <FaCrown className="text-amber-500" />,
    price: '599',
    features: [
      'جميع ميزات الخطة الأساسية',
      'إدارة مشاريع متقدمة مع أدوات تتبع ذكية',
      'نماذج اتصال مخصصة تتكامل مع أدوات التسويق',
      'دعم فني عبر البريد الإلكتروني',
    ],
    recommended: true,
    color: 'primary'
  },
  {
    name: 'الخطة المتقدمة',
    description: 'مناسبة للمشاريع الكبيرة والمؤسسات',
    icon: <FaRocket className="text-purple-500" />,
    price: '999',
    features: [
      'جميع ميزات الخطة الاحترافية',
      'متجر إلكتروني متطور بخصائص متقدمة',
      'دعم فوري عبر الدردشة المباشرة',
      'استشارات مخصصة لتحسين سير العمل',
    ],
    color: 'purple'
  }
];

export const Pricing = () => {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>();

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    setIsRequestFormOpen(true);
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            اختر الخطة التي تناسبك
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            خطط مرنة تناسب جميع الاحتياجات مع ضمان استعادة الأموال لمدة 14 يوماً
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                         transition-all duration-300 transform hover:-translate-y-1
                         ${plan.recommended ? 'ring-2 ring-primary-500' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 right-4 bg-primary-500 text-white px-4 py-1 rounded-full text-sm">
                  موصى به
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-block p-4 rounded-full bg-${plan.color}-50 mb-4`}>
                  {plan.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-gray-900">
                  {plan.price} <span className="text-lg font-normal text-gray-600">ريال/شهرياً</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className={`text-${plan.color}-500 mt-1 flex-shrink-0`} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-3 px-6 rounded-xl font-semibold
                           ${plan.recommended 
                             ? 'bg-primary-600 text-white hover:bg-primary-700' 
                             : 'border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600'}
                           transition-all duration-300`}
              >
                اختر هذه الخطة
              </button>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary-50 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary-600">
            <span className="text-2xl">🔒</span>
            <h3 className="text-xl font-bold">ضمان استعادة الأموال</h3>
          </div>
          <p className="text-gray-600">
            جميع الخطط تتضمن دعم فني متكامل وضمان استعادة الأموال لمدة 14 يوماً
          </p>
        </div>
      </div>

      <ServiceRequestForm 
        isOpen={isRequestFormOpen}
        onClose={() => setIsRequestFormOpen(false)}
        selectedService={selectedPlan}
        availableServices={plans.map(plan => ({
          title: plan.name,
          category: 'الخطط والأسعار'
        }))}
      />
    </div>
  );
};
