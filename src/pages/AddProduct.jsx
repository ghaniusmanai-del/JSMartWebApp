import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  UploadCloud, 
  Trash2, 
  Plus, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export default function AddProduct() {
  const navigate = useNavigate();

  // Form states
  const [productName, setProductName] = useState('Soya Beans');
  const [category, setCategory] = useState('Grains & Cereals');
  const [brand, setBrand] = useState('Peak freaks');
  const [unit, setUnit] = useState('Kg');
  const [description, setDescription] = useState('Premium quality organic soya beans harvested fresh.');
  const [regularPrice, setRegularPrice] = useState('280');
  const [sellingPrice, setSellingPrice] = useState('240');
  const [stockQuantity, setStockQuantity] = useState('120');
  const [shelfLife, setShelfLife] = useState('12 Months');
  const [minOrderQty, setMinOrderQty] = useState('1');
  const [tags, setTags] = useState('Organic, fresh, Best Seller');
  const [isPhysical, setIsPhysical] = useState(true);
  const [isActiveStatus, setIsActiveStatus] = useState(true);

  // Images state
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80'
  ]);

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages(prev => [...prev, url]);
    }
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      navigate('/products');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {savedSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-[#22C55E] text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 text-sm font-semibold animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>Product saved successfully!</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/products')}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
            <span className="text-slate-300">|</span>
            <h1 className="text-2xl font-bold text-slate-800">Add New Products</h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">Fill in the details below to add a new product to your store.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/products')}
            className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium text-xs sm:text-sm transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-xl font-medium text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all hover:shadow-lg"
          >
            <span>Save Product</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Forms) */}
        <div className="lg:col-span-8 space-y-6">
          {/* 1. Product Information */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-800">Product Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Product Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Soya Beans"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option>Select Category</option>
                    <option>Grains & Cereals</option>
                    <option>Fruits & Vegetables</option>
                    <option>Dairy & Eggs</option>
                    <option>Beverages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Brand <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Peak freaks"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Unit <span className="text-rose-500">*</span>
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option>Select Unit</option>
                  <option>Kg</option>
                  <option>Dozen</option>
                  <option>Pack</option>
                  <option>Grams</option>
                  <option>Liter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Peak freaks"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* 2. Pricing and Stock */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-800">Pricing and Stock</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Regular Price (PKR) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  value={regularPrice}
                  onChange={(e) => setRegularPrice(e.target.value)}
                  placeholder="Enter Selling Price"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Selling Price <span className="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                  placeholder="Enter Selling Price"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Stock Quantity <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                placeholder="Enter Stock Quantity"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">Product Type</label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="productType"
                  checked={isPhysical}
                  onChange={() => setIsPhysical(true)}
                  className="accent-[#22C55E]"
                />
                <span className="text-xs font-medium text-slate-700">Physical Product</span>
              </label>
            </div>
          </div>

          {/* 3. Additional Information */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-800">Additional Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Shelf Life (Optional)</label>
                <input
                  type="text"
                  value={shelfLife}
                  onChange={(e) => setShelfLife(e.target.value)}
                  placeholder="Eg. 12 Months"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Minimum Order Quantity</label>
                <input
                  type="number"
                  value={minOrderQty}
                  onChange={(e) => setMinOrderQty(e.target.value)}
                  placeholder="Eg. 1"
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tags (Optional)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Eg. Organic, fresh, Best Seller"
                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Toggle Status */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-xs font-bold text-slate-800">Physical Product</p>
                <p className="text-[11px] text-slate-400">Inactive Products Will not Be visible in your Store.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActiveStatus}
                  onChange={(e) => setIsActiveStatus(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22C55E]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column (Images & Live Summary) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Product Images Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <div>
              <h2 className="text-base font-bold text-slate-800">Product Images</h2>
              <p className="text-xs text-slate-400 mt-0.5">Upload High Quality of Images of your Products</p>
            </div>

            {/* Upload Box */}
            <label className="border-2 border-dashed border-emerald-300 bg-emerald-50/20 hover:bg-emerald-50/40 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors text-center">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-slate-700">Drag & Drop to Upload</p>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5 hover:underline">Or Browse</p>
            </label>

            {/* Image Previews */}
            <div className="flex flex-wrap gap-3 pt-2">
              {images.map((img, i) => (
                <div key={i} className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group">
                  <img src={img} alt="Product preview" className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white/90 text-rose-500 flex items-center justify-center shadow hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              <label className="w-20 h-20 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 hover:bg-emerald-100/50 flex flex-col items-center justify-center cursor-pointer text-emerald-600 transition-colors">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                <Plus className="w-6 h-6" />
              </label>
            </div>
          </div>

          {/* Product Summary */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-800">Product Summary</h2>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Product Name</span>
                <span className="font-semibold text-slate-800">{productName || '-'}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Category</span>
                <span className="font-semibold text-slate-800">{category || '-'}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Selling Price</span>
                <span className="font-semibold text-slate-800">{sellingPrice ? `PKR ${sellingPrice}` : '-'}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Stock Quantity</span>
                <span className="font-semibold text-slate-800">{stockQuantity || '-'}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Status</span>
                <span className="font-semibold text-emerald-600">{isActiveStatus ? 'Active' : 'Inactive'}</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-500">Product type</span>
                <span className="font-semibold text-slate-800">{isPhysical ? 'Physical Product' : '-'}</span>
              </div>
            </div>

            {/* Important Note Callout */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <div className="text-[11px] text-slate-600">
                <span className="font-semibold text-emerald-700">Important Note:</span> Make sure All required Fields are filled before saving the product.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
