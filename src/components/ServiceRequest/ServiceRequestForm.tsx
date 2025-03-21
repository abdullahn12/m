import { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

interface ServiceRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
  availableServices: Array<{
    title: string;
    category: string;
  }>;
}

export const ServiceRequestForm = ({ isOpen, onClose, selectedService, availableServices }: ServiceRequestFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedServices: selectedService ? [selectedService] : [] as string[],
    details: ''
  });

  const handleServicesChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  // تجميع كل الخدمات في مصفوفة واحدة
  const allServices = availableServices.map(service => service.title);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" dir="rtl">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative overflow-hidden animate-fade-scale">
        {/* Header */}
        <div className="bg-gradient-to-l from-primary-600 to-primary-700 text-white py-6 px-8">
          <h2 className="text-2xl font-bold text-center">
            نموذج طلب الخدمة
          </h2>
          <button 
            onClick={onClose}
            className="absolute left-4 top-6 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info Section */}
            <div className="bg-gray-50 p-6 rounded-xl space-y-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">المعلومات الشخصية</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    className="input-primary focus:ring-2 focus:ring-primary-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    className="input-primary focus:ring-2 focus:ring-primary-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">البريد الإلكتروني</label>
                <input
                  type="email"
                  required
                  className="input-primary focus:ring-2 focus:ring-primary-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@domain.com"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">الخدمات المطلوبة</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {allServices.map((service) => (
                  <label key={service} 
                         className="flex items-center gap-2 p-3 rounded-lg cursor-pointer
                                  bg-white hover:bg-primary-50 transition-colors duration-200
                                  border border-gray-200 hover:border-primary-200">
                    <input
                      type="checkbox"
                      checked={formData.selectedServices.includes(service)}
                      onChange={() => handleServicesChange(service)}
                      className="w-4 h-4 text-primary-600 rounded border-gray-300 
                               focus:ring-primary-500"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-gray-700 mb-2 font-medium">تفاصيل إضافية</label>
              <textarea
                rows={4}
                className="input-primary focus:ring-2 focus:ring-primary-500"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="اكتب تفاصيل طلبك هنا..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-xl 
                         hover:bg-primary-700 transition-all duration-300 
                         flex items-center justify-center gap-2
                         text-lg font-semibold shadow-lg hover:shadow-xl
                         transform hover:-translate-y-0.5"
              >
                <FaPaperPlane className="text-white/90" />
                <span>إرسال الطلب</span>
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                سنقوم بالتواصل معك خلال 24 ساعة عمل
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
