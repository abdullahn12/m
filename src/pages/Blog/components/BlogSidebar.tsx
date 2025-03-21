import { FaSearch } from 'react-icons/fa';

const categories = [
  { name: 'تطوير الويب', count: 12 },
  { name: 'التسويق الرقمي', count: 8 },
  { name: 'تحسين محركات البحث', count: 6 },
  { name: 'أتمتة الأعمال', count: 4 },
];

export const BlogSidebar = () => {
  return (
    <aside className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">بحث</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث في المدونة..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">التصنيفات</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.name} className="flex justify-between items-center">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                {category.name}
              </a>
              <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
