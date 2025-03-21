import { FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "أحمد محمد",
    position: "مدير تنفيذي",
    company: "شركة التقنية المتقدمة",
    content: "ساعدنا النظام في تحسين كفاءة العمل بنسبة 40% وزيادة المبيعات",
    rating: 5
  },
  {
    name: "سارة أحمد",
    position: "مديرة التسويق",
    company: "منصة التجارة الإلكترونية",
    content: "أفضل نظام متكامل جربته. سهل الاستخدام وفعال في إدارة المشاريع",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">آراء العملاء</h2>
          <p className="text-lg text-gray-600">ماذا يقول عملاؤنا عن خدماتنا</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <FaQuoteRight className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="border-t pt-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
                <p className="text-blue-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
