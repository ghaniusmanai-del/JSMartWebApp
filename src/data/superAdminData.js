export const superAdminStats = [
  {
    title: 'Total Stores',
    value: '240',
    change: '+12%',
    period: 'Last Month',
    isPositive: true,
    color: 'emerald',
    subtext: '220 Active • 20 Inactive'
  },
  {
    title: 'Total Riders',
    value: '150',
    change: '+8%',
    period: 'Last Month',
    isPositive: true,
    color: 'amber',
    subtext: '120 Active • 30 Inactive'
  },
  {
    title: 'Total Customers',
    value: '14,250',
    change: '+18%',
    period: 'Last Month',
    isPositive: true,
    color: 'rose',
    subtext: '9,840 Active this week'
  },
  {
    title: 'Platform Revenue',
    value: 'RS 1,245,800',
    change: '+24%',
    period: 'Last Month',
    isPositive: true,
    color: 'sky',
    subtext: 'Net Commission & Fees'
  }
];

export const superAdminSalesTrend = [
  { day: 'Mon', value: 145000 },
  { day: 'Tue', value: 180000 },
  { day: 'Wed', value: 165000 },
  { day: 'Thu', value: 210000 },
  { day: 'Fri', value: 235000 },
  { day: 'Sat', value: 310250, highlight: 'Saturday, 25 May 2026: RS 310,250' },
  { day: 'Sun', value: 195000 },
];

export const superAdminOrdersOverview = [
  { label: 'Delivered', percentage: 65, color: '#22C55E' },
  { label: 'Processing', percentage: 20, color: '#F59E0B' },
  { label: 'Cancelled', percentage: 15, color: '#EF4444' },
];

export const superAdminRevenueBreakdown = [
  { label: 'Commission', percentage: 60, color: '#22C55E' },
  { label: 'Service Fee', percentage: 25, color: '#3B82F6' },
  { label: 'Delivery Fee', percentage: 15, color: '#F59E0B' },
];

export const superAdminTopStores = [
  {
    id: 'STR-001',
    name: 'Al-Madina Super Mart',
    category: 'Groceries & Daily Essentials',
    orders: 4520,
    revenue: 'RS 420,500',
    growth: '+14.2%',
    rating: 4.9,
    status: 'Active',
    owner: 'Muhammad Tariq',
    phone: '+92 300 1234567',
    zone: 'Gulshan-e-Iqbal',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-002',
    name: 'Imtiaz Mega Store',
    category: 'Hypermarket & Foods',
    orders: 3890,
    revenue: 'RS 385,200',
    growth: '+11.8%',
    rating: 4.8,
    status: 'Active',
    owner: 'Syed Hamza',
    phone: '+92 321 9876543',
    zone: 'Clifton Block 2',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-003',
    name: 'Chase Up Shopping',
    category: 'General Mart & Fresh',
    orders: 3120,
    revenue: 'RS 298,400',
    growth: '+9.4%',
    rating: 4.7,
    status: 'Active',
    owner: 'Rashid Khan',
    phone: '+92 333 4567890',
    zone: 'North Nazimabad',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-004',
    name: 'Metro Cash & Carry',
    category: 'Wholesale & Retail',
    orders: 2840,
    revenue: 'RS 265,100',
    growth: '+8.1%',
    rating: 4.8,
    status: 'Active',
    owner: 'Kamran Siddiqui',
    phone: '+92 312 6543210',
    zone: 'University Road',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-005',
    name: 'Bin Hashim Super Market',
    category: 'Fresh Grocery & Dairy',
    orders: 2410,
    revenue: 'RS 224,900',
    growth: '+6.5%',
    rating: 4.6,
    status: 'Active',
    owner: 'Farooq Hashim',
    phone: '+92 301 7891234',
    zone: 'Safoora Chowk',
    image: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-006',
    name: 'Green Valley Premium',
    category: 'Organic & Imported Produce',
    orders: 1950,
    revenue: 'RS 198,600',
    growth: '+15.3%',
    rating: 4.9,
    status: 'Active',
    owner: 'Nabeel Ahmed',
    phone: '+92 345 3216549',
    zone: 'DHA Phase 6',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=100&auto=format&fit=crop&q=80'
  }
];

export const superAdminAllStores = [
  ...superAdminTopStores,
  {
    id: 'STR-007',
    name: 'Spar Express Mart',
    category: 'Convenience & Snacks',
    orders: 1420,
    revenue: 'RS 145,300',
    growth: '+4.2%',
    rating: 4.5,
    status: 'Active',
    owner: 'Waleed Raza',
    phone: '+92 302 4561238',
    zone: 'Bahadurabad',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-008',
    name: 'Fresh Basket Karachi',
    category: 'Fruits & Vegetables',
    orders: 1280,
    revenue: 'RS 118,500',
    growth: '+3.8%',
    rating: 4.4,
    status: 'Active',
    owner: 'Zubair Mallick',
    phone: '+92 313 7894561',
    zone: 'Gulberg Town',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-009',
    name: 'Bismillah General Store',
    category: 'Spices & Staples',
    orders: 980,
    revenue: 'RS 86,400',
    growth: '-1.5%',
    rating: 4.2,
    status: 'Inactive',
    owner: 'Abdul Qadir',
    phone: '+92 322 1472583',
    zone: 'Korangi Crossing',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=100&auto=format&fit=crop&q=80'
  },
  {
    id: 'STR-010',
    name: 'Prime Dairy & Bakery',
    category: 'Dairy, Bakery & Milk',
    orders: 1840,
    revenue: 'RS 174,000',
    growth: '+7.9%',
    rating: 4.7,
    status: 'Active',
    owner: 'Omer Farooq',
    phone: '+92 334 9638521',
    zone: 'Federal B Area',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=100&auto=format&fit=crop&q=80'
  }
];

export const initialStoreApprovals = [
  {
    id: 'APP-101',
    storeName: 'Royal Mart Saddar',
    ownerName: 'Muhammad Salman',
    phone: '+92 300 8821945',
    email: 'salman@royalmart.pk',
    category: 'Groceries & Dry Fruits',
    zone: 'Saddar Downtown',
    submissionDate: '24 May 2026, 11:30 AM',
    docStatus: 'Verified',
    status: 'Pending',
    address: 'Shop 14, Regal Trade Centre, Saddar, Karachi'
  },
  {
    id: 'APP-102',
    storeName: 'Khyber Fresh Meats',
    ownerName: 'Khan Zada',
    phone: '+92 321 4455667',
    email: 'khanzada@khybermeat.pk',
    category: 'Meat, Poultry & Fish',
    zone: 'Sohrab Goth',
    submissionDate: '23 May 2026, 04:15 PM',
    docStatus: 'Verified',
    status: 'Pending',
    address: 'Plot 45, Main Super Highway Market, Karachi'
  },
  {
    id: 'APP-103',
    storeName: 'Subhan Bakery & Sweets',
    ownerName: 'Subhan Ali',
    phone: '+92 333 1122334',
    email: 'subhan@sweets.pk',
    category: 'Bakery & Sweets',
    zone: 'Tariq Road',
    submissionDate: '23 May 2026, 01:20 PM',
    docStatus: 'Under Review',
    status: 'Pending',
    address: 'Shop 2, PECHS Block 2, Tariq Road, Karachi'
  },
  {
    id: 'APP-104',
    storeName: 'Zam Zam Super Market',
    ownerName: 'Sheikh Waqas',
    phone: '+92 312 9988776',
    email: 'waqas@zamzam.pk',
    category: 'Supermarket & FMCG',
    zone: 'Malir Cantt',
    submissionDate: '22 May 2026, 10:00 AM',
    docStatus: 'Verified',
    status: 'Pending',
    address: 'Near Falcon Complex, Malir Cantt, Karachi'
  },
  {
    id: 'APP-105',
    storeName: 'Karachi Organic Farm Fresh',
    ownerName: 'Dr. Asad Rizvi',
    phone: '+92 345 6677889',
    email: 'drasad@organicfarms.pk',
    category: 'Organic Fruits & Veggies',
    zone: 'DHA Phase 8',
    submissionDate: '21 May 2026, 06:45 PM',
    docStatus: 'Verified',
    status: 'Approved',
    address: 'Creek Lane 5, DHA Phase 8, Karachi'
  },
  {
    id: 'APP-106',
    storeName: 'City Convenience Mart',
    ownerName: 'Irfan Sheikh',
    phone: '+92 301 2233445',
    email: 'irfan@citymart.pk',
    category: 'Snacks & Beverages',
    zone: 'Nazimabad 3',
    submissionDate: '20 May 2026, 02:10 PM',
    docStatus: 'Invalid License',
    status: 'Rejected',
    address: 'Block 3, Nazimabad Commercial Area, Karachi'
  }
];

export const superAdminRidersData = {
  stats: [
    { title: 'Total Deliveries', value: '42,500', change: '+15%', period: 'Last Month', isPositive: true, color: 'emerald' },
    { title: 'Total Rider Earnings', value: 'RS 850,200', change: '+12%', period: 'Last Month', isPositive: true, color: 'amber' },
    { title: 'Avg Delivery Time', value: '24 mins', change: '-4 mins', period: 'Faster', isPositive: true, color: 'sky' },
    { title: 'Success Rate', value: '98.4%', change: '+0.8%', period: 'High accuracy', isPositive: true, color: 'rose' }
  ],
  trend: [
    { day: 'Mon', deliveries: 5400, earnings: 108000 },
    { day: 'Tue', deliveries: 6100, earnings: 122000 },
    { day: 'Wed', deliveries: 5800, earnings: 116000 },
    { day: 'Thu', deliveries: 6700, earnings: 134000 },
    { day: 'Fri', deliveries: 7900, earnings: 158000 },
    { day: 'Sat', deliveries: 9400, earnings: 188000 },
    { day: 'Sun', deliveries: 8200, earnings: 164000 }
  ],
  topPerformers: [
    { id: 'RDR-001', name: 'Tariq Mehmood', zone: 'Gulshan / Gulberg', deliveries: 342, rating: 4.95, earnings: 'RS 42,800', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
    { id: 'RDR-002', name: 'Hamza Khan', zone: 'DHA / Clifton', deliveries: 318, rating: 4.92, earnings: 'RS 39,400', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
    { id: 'RDR-003', name: 'Bilal Ahmed', zone: 'PECHS / Saddar', deliveries: 295, rating: 4.88, earnings: 'RS 36,900', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' }
  ],
  ridersList: [
    { id: 'RDR-001', name: 'Tariq Mehmood', phone: '+92 300 7891234', zone: 'Gulshan / Gulberg', deliveries: 342, rating: 4.95, earnings: 'RS 42,800', status: 'Active', bikeNumber: 'KHI-8921' },
    { id: 'RDR-002', name: 'Hamza Khan', phone: '+92 321 6549870', zone: 'DHA / Clifton', deliveries: 318, rating: 4.92, earnings: 'RS 39,400', status: 'Active', bikeNumber: 'KHI-4412' },
    { id: 'RDR-003', name: 'Bilal Ahmed', phone: '+92 333 1234567', zone: 'PECHS / Saddar', deliveries: 295, rating: 4.88, earnings: 'RS 36,900', status: 'Active', bikeNumber: 'KHI-6098' },
    { id: 'RDR-004', name: 'Zeeshan Ali', phone: '+92 312 9871234', zone: 'North Nazimabad', deliveries: 264, rating: 4.81, earnings: 'RS 32,500', status: 'On Break', bikeNumber: 'KHI-3211' },
    { id: 'RDR-005', name: 'Usman Farooqi', phone: '+92 345 8765432', zone: 'Malir & Airport', deliveries: 241, rating: 4.79, earnings: 'RS 29,800', status: 'Active', bikeNumber: 'KHI-7765' },
    { id: 'RDR-006', name: 'Kashif Raza', phone: '+92 301 3456789', zone: 'Korangi / Landhi', deliveries: 210, rating: 4.74, earnings: 'RS 25,200', status: 'Offline', bikeNumber: 'KHI-9988' }
  ]
};

export const superAdminCustomersData = {
  stats: [
    { title: 'Total Customers', value: '14,250', change: '+14%', period: 'Last Month', isPositive: true, color: 'emerald' },
    { title: 'Total Orders Placed', value: '68,400', change: '+22%', period: 'Last Month', isPositive: true, color: 'amber' },
    { title: 'Avg Order Value', value: 'RS 1,450', change: '+8%', period: 'Per transaction', isPositive: true, color: 'sky' },
    { title: 'Repeat Customer Rate', value: '72.4%', change: '+5.1%', period: 'Customer retention', isPositive: true, color: 'rose' }
  ],
  trend: [
    { month: 'Jan', orders: 8400, revenue: 12180000 },
    { month: 'Feb', orders: 9800, revenue: 14210000 },
    { month: 'Mar', orders: 11200, revenue: 16240000 },
    { month: 'Apr', orders: 12600, revenue: 18270000 },
    { month: 'May', orders: 14500, revenue: 21025000 },
    { month: 'Jun', orders: 15900, revenue: 23055000 },
  ],
  categoryDonut: [
    { label: 'Fresh Grocery', percentage: 45, color: '#22C55E' },
    { label: 'Dairy & Eggs', percentage: 25, color: '#3B82F6' },
    { label: 'Bakery & Snacks', percentage: 15, color: '#F59E0B' },
    { label: 'Beverages', percentage: 15, color: '#EC4899' },
  ],
  topCustomers: [
    { id: 'CUST-801', name: 'Ayesha Siddiqua', email: 'ayesha.s@gmail.com', phone: '+92 300 9988771', totalOrders: 54, totalSpend: 'RS 86,400', lastOrder: '24 May 2026', status: 'VIP Member' },
    { id: 'CUST-802', name: 'Omer Khawaja', email: 'omer.khawaja@yahoo.com', phone: '+92 321 7766554', totalOrders: 48, totalSpend: 'RS 74,200', lastOrder: '24 May 2026', status: 'VIP Member' },
    { id: 'CUST-803', name: 'Sana Zehra', email: 'sana.zehra@outlook.com', phone: '+92 333 5544332', totalOrders: 42, totalSpend: 'RS 62,800', lastOrder: '23 May 2026', status: 'Regular' },
    { id: 'CUST-804', name: 'Fahad Mustafa', email: 'fahad.m@gmail.com', phone: '+92 312 3322114', totalOrders: 39, totalSpend: 'RS 57,600', lastOrder: '23 May 2026', status: 'Regular' },
    { id: 'CUST-805', name: 'Mariam Baig', email: 'mariam.baig@gmail.com', phone: '+92 345 1199887', totalOrders: 36, totalSpend: 'RS 51,900', lastOrder: '22 May 2026', status: 'Regular' },
    { id: 'CUST-806', name: 'Noman Chughtai', email: 'noman.c@hotmail.com', phone: '+92 302 4433221', totalOrders: 31, totalSpend: 'RS 44,100', lastOrder: '21 May 2026', status: 'Regular' },
  ]
};

export const superAdminProductsData = {
  stats: [
    { title: 'Total Products', value: '12,800', change: '+9%', period: 'Catalog size', isPositive: true, color: 'emerald' },
    { title: 'Active Listings', value: '11,400', change: '89%', period: 'In-stock rate', isPositive: true, color: 'sky' },
    { title: 'Low Stock Alerts', value: '750', change: '-3%', period: 'Needs restock', isPositive: false, color: 'amber' },
    { title: 'Out of Stock', value: '650', change: '5.1%', period: 'Critical', isPositive: false, color: 'rose' }
  ],
  productsList: [
    { code: 'PRD-901', name: 'Olper\'s Full Cream Milk 1L', category: 'Dairy & Breakfast', store: 'Al-Madina Mart', price: 'RS 280', stock: 450, weeklySales: 1240, status: 'In Stock', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-902', name: 'Farm Fresh Farm Eggs (Dozen)', category: 'Dairy & Breakfast', store: 'Imtiaz Mega Store', price: 'RS 360', stock: 120, weeklySales: 980, status: 'In Stock', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-903', name: 'Dawn Plain Bread (Large)', category: 'Bakery & Bread', store: 'Chase Up Shopping', price: 'RS 160', stock: 24, weeklySales: 640, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-904', name: 'Fresh Sindhri Mangoes (1 KG)', category: 'Fresh Fruits', store: 'Green Valley Premium', price: 'RS 450', stock: 85, weeklySales: 890, status: 'In Stock', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-905', name: 'Nestle Pure Life 1.5L (6 Pack)', category: 'Beverages', store: 'Metro Cash & Carry', price: 'RS 540', stock: 0, weeklySales: 510, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-906', name: 'National Himalayan Salt 800g', category: 'Cooking Essentials', store: 'Bin Hashim Super Market', price: 'RS 95', stock: 18, weeklySales: 320, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&auto=format&fit=crop&q=80' },
    { code: 'PRD-907', name: 'Shan Biryani Masala 50g', category: 'Spices & Recipe Mix', store: 'Al-Madina Mart', price: 'RS 120', stock: 340, weeklySales: 1100, status: 'In Stock', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&auto=format&fit=crop&q=80' },
  ]
};

export const superAdminOrdersData = [
  { orderId: '#ORD-2098', storeName: 'Al-Madina Super Mart', customerName: 'Muhammad Ali', items: 6, amount: 'RS 3,450', status: 'Processing', date: '25 May 2026, 12:45 PM', zone: 'Gulshan-e-Iqbal', rider: 'Tariq Mehmood' },
  { orderId: '#ORD-2097', storeName: 'Imtiaz Mega Store', customerName: 'Zainab Fatima', items: 4, amount: 'RS 2,180', status: 'Out for Delivery', date: '25 May 2026, 12:30 PM', zone: 'Clifton Block 2', rider: 'Hamza Khan' },
  { orderId: '#ORD-2096', storeName: 'Chase Up Shopping', customerName: 'Bilal Hassan', items: 9, amount: 'RS 5,820', status: 'Out for Delivery', date: '25 May 2026, 12:15 PM', zone: 'North Nazimabad', rider: 'Zeeshan Ali' },
  { orderId: '#ORD-2095', storeName: 'Green Valley Premium', customerName: 'Farhan Sheikh', items: 3, amount: 'RS 1,940', status: 'Delivered', date: '25 May 2026, 11:50 AM', zone: 'DHA Phase 6', rider: 'Bilal Ahmed' },
  { orderId: '#ORD-2094', storeName: 'Metro Cash & Carry', customerName: 'Hina Tariq', items: 12, amount: 'RS 8,900', status: 'Delivered', date: '25 May 2026, 11:35 AM', zone: 'University Road', rider: 'Usman Farooqi' },
  { orderId: '#ORD-2093', storeName: 'Bin Hashim Super Market', customerName: 'Saad Ur Rehman', items: 2, amount: 'RS 950', status: 'Cancelled', date: '25 May 2026, 11:10 AM', zone: 'Safoora Chowk', rider: 'Unassigned' },
  { orderId: '#ORD-2092', storeName: 'Al-Madina Super Mart', customerName: 'Kashif Munir', items: 5, amount: 'RS 3,100', status: 'Delivered', date: '25 May 2026, 10:45 AM', zone: 'Gulshan-e-Iqbal', rider: 'Tariq Mehmood' },
  { orderId: '#ORD-2091', storeName: 'Prime Dairy & Bakery', customerName: 'Nida Jamil', items: 7, amount: 'RS 2,750', status: 'Processing', date: '25 May 2026, 10:20 AM', zone: 'Federal B Area', rider: 'Pending Assignment' },
];

export const superAdminInventoryData = {
  stats: [
    { title: 'Total SKUs Managed', value: '14,200', change: '+6%', period: 'Across all stores', isPositive: true, color: 'emerald' },
    { title: 'Healthy Stock Level', value: '85.2%', change: '+2.1%', period: 'Optimal levels', isPositive: true, color: 'sky' },
    { title: 'Low Stock Warnings', value: '1,240', change: '8.7%', period: 'Stores alerted', isPositive: false, color: 'amber' },
    { title: 'Stock-out Rate', value: '4.8%', change: '-1.2%', period: 'Improved turnover', isPositive: true, color: 'rose' }
  ],
  trend: [
    { label: 'Jan', inStock: 12500, lowStock: 1100, outStock: 600 },
    { label: 'Feb', inStock: 12800, lowStock: 1150, outStock: 550 },
    { label: 'Mar', inStock: 13100, lowStock: 1050, outStock: 500 },
    { label: 'Apr', inStock: 13600, lowStock: 1200, outStock: 480 },
    { label: 'May', inStock: 14200, lowStock: 1240, outStock: 420 },
  ],
  statusDonut: [
    { label: 'In Stock', percentage: 85, color: '#22C55E' },
    { label: 'Low Stock', percentage: 10, color: '#F59E0B' },
    { label: 'Out of Stock', percentage: 5, color: '#EF4444' }
  ],
  alerts: [
    { product: 'Dawn Plain Bread (Large)', sku: 'SKU-00921', store: 'Chase Up Shopping', currentStock: 24, reorderLevel: 50, urgency: 'Critical', supplierPhone: '+92 300 2233441' },
    { product: 'National Himalayan Salt 800g', sku: 'SKU-00412', store: 'Bin Hashim Super Market', currentStock: 18, reorderLevel: 40, urgency: 'Warning', supplierPhone: '+92 321 8899001' },
    { product: 'Nestle Pure Life 1.5L', sku: 'SKU-00832', store: 'Metro Cash & Carry', currentStock: 0, reorderLevel: 60, urgency: 'Critical', supplierPhone: '+92 333 4455662' },
    { product: 'Farm Fresh Organic Eggs', sku: 'SKU-00109', store: 'Al-Madina Super Mart', currentStock: 15, reorderLevel: 45, urgency: 'Warning', supplierPhone: '+92 312 9988773' },
    { product: 'Shan Chaat Masala 100g', sku: 'SKU-00624', store: 'Green Valley Premium', currentStock: 12, reorderLevel: 30, urgency: 'Warning', supplierPhone: '+92 345 5566774' },
  ]
};

export const superAdminFinanceData = {
  stats: [
    { title: 'Gross Platform GMV', value: 'RS 14,850,000', change: '+22%', period: 'Total GMV Transacted', isPositive: true, color: 'emerald' },
    { title: 'Platform Net Earnings', value: 'RS 2,227,500', change: '+24%', period: '15% Avg Take Rate', isPositive: true, color: 'sky' },
    { title: 'Total Vendor Payouts', value: 'RS 11,880,000', change: '+20%', period: '80% Disbursed', isPositive: true, color: 'amber' },
    { title: 'Total Rider Payouts', value: 'RS 742,500', change: '+18%', period: '5% Delivery Share', isPositive: true, color: 'rose' }
  ],
  revenueBySource: [
    { label: 'Store Commission', percentage: 68, color: '#22C55E' },
    { label: 'Delivery Fees', percentage: 18, color: '#3B82F6' },
    { label: 'Platform Service Fee', percentage: 10, color: '#F59E0B' },
    { label: 'Sponsored Ads', percentage: 4, color: '#8B5CF6' }
  ],
  storePayouts: [
    { storeName: 'Al-Madina Super Mart', gmv: 'RS 2,850,000', commission: 'RS 427,500', riderFee: 'RS 142,500', netPayout: 'RS 2,280,000', status: 'Paid', date: '20 May 2026' },
    { storeName: 'Imtiaz Mega Store', gmv: 'RS 2,420,000', commission: 'RS 363,000', riderFee: 'RS 121,000', netPayout: 'RS 1,936,000', status: 'Paid', date: '20 May 2026' },
    { storeName: 'Chase Up Shopping', gmv: 'RS 1,940,000', commission: 'RS 291,000', riderFee: 'RS 97,000', netPayout: 'RS 1,552,000', status: 'Processing', date: '25 May 2026' },
    { storeName: 'Metro Cash & Carry', gmv: 'RS 1,680,000', commission: 'RS 252,000', riderFee: 'RS 84,000', netPayout: 'RS 1,344,000', status: 'Processing', date: '25 May 2026' },
    { storeName: 'Bin Hashim Super Market', gmv: 'RS 1,450,000', commission: 'RS 217,500', riderFee: 'RS 72,500', netPayout: 'RS 1,160,000', status: 'Due', date: '28 May 2026' },
    { storeName: 'Green Valley Premium', gmv: 'RS 1,220,000', commission: 'RS 183,000', riderFee: 'RS 61,000', netPayout: 'RS 976,000', status: 'Paid', date: '20 May 2026' },
  ]
};

export const superAdminReportsData = [
  { id: 'REP-01', name: 'Daily Platform Sales Reconciliation', category: 'Finance', frequency: 'Daily', generatedDate: '25 May 2026, 06:00 AM', format: 'PDF', size: '2.4 MB', status: 'Ready' },
  { id: 'REP-02', name: 'Weekly Vendor Settlement Statement', category: 'Settlements', frequency: 'Weekly', generatedDate: '24 May 2026, 11:59 PM', format: 'PDF', size: '4.8 MB', status: 'Ready' },
  { id: 'REP-03', name: 'Rider Payout & Performance Ledger', category: 'Operations', frequency: 'Weekly', generatedDate: '24 May 2026, 10:30 PM', format: 'XLSX', size: '1.9 MB', status: 'Ready' },
  { id: 'REP-04', name: 'Monthly Tax & GST Compliance Report', category: 'Legal & Tax', frequency: 'Monthly', generatedDate: '01 May 2026, 09:00 AM', format: 'PDF', size: '3.6 MB', status: 'Ready' },
  { id: 'REP-05', name: 'Platform Inventory Stock & Wastage Audit', category: 'Inventory', frequency: 'Bi-Weekly', generatedDate: '15 May 2026, 05:00 PM', format: 'PDF', size: '5.2 MB', status: 'Ready' },
  { id: 'REP-06', name: 'Customer Cohort Retention & Churn Analysis', category: 'Analytics', frequency: 'Monthly', generatedDate: '01 May 2026, 12:00 PM', format: 'XLSX', size: '6.1 MB', status: 'Ready' },
];

export const superAdminNotificationsData = [
  { id: 'NTF-01', title: 'New Store Application Submitted', message: 'Royal Mart Saddar submitted merchant onboarding documents for verification.', type: 'Store Alert', time: '10 mins ago', unread: true, priority: 'High' },
  { id: 'NTF-02', title: 'Payout Request Initiated', message: 'Chase Up Shopping initiated a weekly settlement withdrawal of RS 1,552,000.', type: 'Finance', time: '45 mins ago', unread: true, priority: 'Urgent' },
  { id: 'NTF-03', title: 'High Order Volume Spike', message: 'Gulshan-e-Iqbal zone orders increased by 42% over the last 2 hours.', type: 'Operations', time: '2 hours ago', unread: true, priority: 'Normal' },
  { id: 'NTF-04', title: 'Rider Shift Coverage Alert', message: 'DHA Phase 6 has 4 idle riders with 18 unassigned active orders.', type: 'Rider Alert', time: '3 hours ago', unread: false, priority: 'High' },
  { id: 'NTF-05', title: 'System Security Audit Completed', message: 'Weekly automated security scan completed with 0 vulnerabilities detected.', type: 'System', time: '1 day ago', unread: false, priority: 'Low' },
  { id: 'NTF-06', title: 'Scheduled Database Backup', message: 'Nightly cloud database snapshot saved successfully to AWS S3 eu-central-1.', type: 'System', time: '1 day ago', unread: false, priority: 'Low' },
];
