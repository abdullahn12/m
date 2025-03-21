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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative overflow-hidden">
        <div className="bg-primary-600 text-white py-6 px-8">
          <h2 className="text-2xl font-bold text-center">
            نموذج طلب الخدمة
          </h2>
          <button 
            onClick={onClose}
            className="absolute left-4 top-6 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  className="input-primary"
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
                  className="input-primary"
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
                className="input-primary"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@domain.com"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-4 font-medium">اختر الخدمات المطلوبة</label>
              <div className="grid md:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg">
                {allServices.map((service) => (
                  <label key={service} 
                         className="flex items-center gap-2 p-3 rounded-lg cursor-pointer
                                  hover:bg-white transition-colors duration-200
                                  border border-transparent hover:border-primary-100">
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

            <div>
              <label className="block text-gray-700 mb-2 font-medium">تفاصيل إضافية</label>
              <textarea
                rows={4}
                className="input-primary"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="اكتب تفاصيل طلبك هنا..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 
                         transition-all duration-300 flex items-center justify-center gap-2
                         font-medium text-lg shadow-lg hover:shadow-xl"
              >
                <FaPaperPlane />
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
