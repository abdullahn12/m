import { useState } from 'react';
import { FaChartLine, FaTasks, FaStore, FaComments, FaCheck, FaShieldAlt, FaMailchimp, FaCreditCard, FaCalendarAlt, FaEdit, FaUsers, FaSearch } from 'react-icons/fa';
import { ServiceRequestForm } from '../../components/ServiceRequest/ServiceRequestForm';

const serviceCategories = [
  {
    id: 'marketing',
    title: 'خدمات التسويق والتحليلات',
    icon: <FaChartLine className="text-xl" />,
    services: [
      {
        icon: <FaChartLine />,
        title: "تحليلات متقدمة",
        description: "إعداد تلقائي لتحليلات جوجل مع تقارير فورية",
        features: [
          "تحليل حركة الزوار والتفاعلات",
          "تقارير أداء الصفحات والحملات",
          "تتبع معدلات التحويل",
          "تحليل سلوك المستخدم"
        ]
      },
      {
        icon: <FaMailchimp />,
        title: "إدارة حملات البريد الإلكتروني",
        description: "تخصيص رسائل البريد الإلكتروني وفقاً للأحداث المهمة",
        features: [
          "قوالب بريد إلكتروني مخصصة",
          "أتمتة الحملات البريدية",
          "تقسيم وتصنيف القوائم البريدية",
          "تحليل نتائج الحملات"
        ]
      }
    ]
  },
  {
    id: 'business',
    title: 'خدمات إدارة الأعمال والمشاريع',
    icon: <FaTasks className="text-xl" />,
    services: [
      {
        icon: <FaTasks />,
        title: "إدارة مشاريع ومهام مبسطة",
        description: "تنظيم المهام وتتبع التقدم بسهولة",
        features: [
          "لوحة تحكم مركزية للمشاريع",
          "جدولة وتتبع المهام",
          "إدارة الموارد والميزانيات",
          "تقارير تقدم المشاريع"
        ]
      },
      {
        icon: <FaUsers />,
        title: "نظام متابعة العملاء (CRM)",
        description: "تعزيز تجربة العملاء وتحسين المبيعات",
        features: [
          "إدارة علاقات العملاء",
          "تتبع فرص المبيعات",
          "توحيد بيانات العملاء",
          "تقارير وتحليلات العملاء"
        ]
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'خدمات المتاجر الإلكترونية',
    icon: <FaStore className="text-xl" />,
    services: [
      {
        icon: <FaStore />,
        title: "متجر إلكتروني متكامل",
        description: "إدارة المنتجات، المخزون، والأسعار تلقائياً",
        features: [
          "إدارة المنتجات والمخزون",
          "نظام تسعير ديناميكي",
          "سلة مشتريات متطورة",
          "تقارير المبيعات والمخزون"
        ]
      },
      {
        icon: <FaCreditCard />,
        title: "أتمتة عمليات الدفع والفواتير",
        description: "تتبع المدفوعات وإنشاء فواتير تلقائية",
        features: [
          "إنشاء فواتير تلقائية",
          "متابعة المدفوعات",
          "تكامل مع بوابات الدفع",
          "تقارير مالية تفصيلية"
        ]
      }
    ]
  },
  {
    id: 'customer',
    title: 'خدمات تحسين تجربة العملاء',
    icon: <FaComments className="text-xl" />,
    services: [
      {
        icon: <FaComments />,
        title: "دعم فوري عبر الدردشة المباشرة",
        description: "تعزيز تفاعل العملاء من خلال الردود السريعة",
        features: [
          "دردشة مباشرة 24/7",
          "روبوت دردشة ذكي",
          "إدارة استفسارات العملاء",
          "تحليلات رضا العملاء"
        ]
      },
      {
        icon: <FaCalendarAlt />,
        title: "نظام حجز المواعيد",
        description: "أداة فعالة لإدارة المواعيد مع إشعارات تلقائية",
        features: [
          "جدولة المواعيد أونلاين",
          "إشعارات تلقائية للعملاء",
          "إدارة التقويم والمواعيد",
          "تذكيرات آلية"
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'خدمات الأمان والتحسين التقني',
    icon: <FaShieldAlt className="text-xl" />,
    services: [
      {
        icon: <FaShieldAlt />,
        title: "تحسين أمان الموقع",
        description: "ميزات أمان متقدمة وحماية من الهجمات",
        features: [
          "جدران حماية متقدمة",
          "حماية من هجمات DDoS",
          "نسخ احتياطية تلقائية",
          "مراقبة أمنية مستمرة"
        ]
      },
      {
        icon: <FaSearch />,
        title: "تحسين أداء الموقع (SEO)",
        description: "أدوات لتحسين ترتيب الموقع في محركات البحث",
        features: [
          "تحسين محركات البحث",
          "تحليل الكلمات المفتاحية",
          "تحسين سرعة الموقع",
          "تقارير تحسين SEO"
        ]
      }
    ]
  }
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  // تجميع كل الخدمات المتاحة للاختيار
  const allAvailableServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      title: service.title,
      category: category.title
    }))
  );

  const handleServiceRequest = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsRequestFormOpen(true);
  };

  // تجميع كل الخدمات في مصفوفة واحدة
  const allServices = serviceCategories.flatMap(category => category.services);

  // تحديث منطق التصفية
  const getContent = () => {
    if (activeCategory === 'all') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <div key={index} 
                 className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg 
                          transition-all duration-300 hover:border-primary-100 
                          bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <FaCheck className="text-primary-600 mt-1 flex-shrink-0 transform 
                                     group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full mt-6 py-3 px-6 rounded-xl font-semibold text-sm
                           border-2 border-primary-600 text-primary-600 
                           hover:bg-primary-600 hover:text-white 
                           transition-all duration-300 transform hover:scale-105"
                onClick={() => handleServiceRequest(service.title)}
              >
                اطلب الخدمة الآن
              </button>
            </div>
          ))}
        </div>
      );
    }

    // عرض الخدمات حسب التصنيف
    return (
      <div className="space-y-12">
        {serviceCategories
          .filter(cat => cat.id === activeCategory)
          .map((category) => (
            <div key={category.id} 
                 className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="text-2xl text-primary-600">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, index) => (
                  <div key={index} 
                       className="group border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-100 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mt-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <FaCheck className="text-primary-600 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      className="w-full mt-6 py-3 px-6 rounded-xl font-semibold text-sm
                                 border-2 border-primary-600 text-primary-600 
                                 hover:bg-primary-600 hover:text-white 
                                 transition-all duration-300 transform hover:scale-105"
                      onClick={() => handleServiceRequest(service.title)}
                    >
                      اطلب الخدمة الآن
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            خدماتنا المتكاملة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            حلول شاملة لتطوير وتحسين أعمالك مع أحدث التقنيات وأفضل الممارسات
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12 px-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105
                ${activeCategory === 'all' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
            >
              عرض الكل
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105
                  ${activeCategory === category.id 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        {getContent()}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 shadow-inner">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            هل تحتاج إلى مساعدة في اختيار الخدمة المناسبة؟
          </h3>
          <p className="text-gray-600 mb-8">
            فريقنا جاهز لمساعدتك في اختيار الحل الأمثل لأعمالك
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-xl 
                           hover:bg-primary-700 transition-all duration-300 
                           transform hover:scale-105 shadow-lg">
            تواصل معنا للاستشارة المجانية
          </button>
        </div>
      </div>

      <ServiceRequestForm 
        isOpen={isRequestFormOpen}
        onClose={() => setIsRequestFormOpen(false)}
        selectedService={selectedService}
        availableServices={allAvailableServices}
      />
    </div>
  );
};
