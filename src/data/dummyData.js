export const initialDashboardStats = [
  {
    title: 'Total sales',
    value: 'PKR 200,000',
    change: '+12%',
    period: 'Last Week',
    isPositive: true,
    color: 'emerald'
  },
  {
    title: 'Platform Commisison',
    value: '546',
    change: '4.7%',
    period: 'Last week',
    isPositive: true,
    color: 'amber'
  },
  {
    title: 'Low Stocks',
    value: '12',
    change: '4.7%',
    period: 'Last week',
    isPositive: false,
    color: 'rose'
  },
  {
    title: 'Total Orders',
    value: '234',
    change: '7.8%',
    period: 'Last Month',
    isPositive: true,
    color: 'sky'
  }
];

export const salesAnalyticsData = {
  Daily: [
    { label: '09:00', value: 3200 },
    { label: '11:00', value: 4500 },
    { label: '13:00', value: 4100 },
    { label: '15:00', value: 5300 },
    { label: '17:00', value: 4800 },
    { label: '19:00', value: 6000 },
    { label: '21:00', value: 5700 },
  ],
  Weekly: [
    { label: 'Mon', value: 4200 },
    { label: 'Tue', value: 4800 },
    { label: 'Wed', value: 3900 },
    { label: 'Thu', value: 5100 },
    { label: 'Fri', value: 4700 },
    { label: 'Sat', value: 24000, highlight: 'Saturday PKR 24,000' },
    { label: 'Sun', value: 3800 },
  ],
  Monthly: [
    { label: 'Week 1', value: 28000 },
    { label: 'Week 2', value: 34000 },
    { label: 'Week 3', value: 41000 },
    { label: 'Week 4', value: 39500 },
  ]
};

export const recentGroceryOrders = [
  {
    id: 1,
    name: 'Veggie Essentials',
    price: '$6.3',
    oldPrice: '$10.5',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 2,
    name: 'Fresh Fruits Basket',
    price: '$8.5',
    oldPrice: '$12.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&auto=format&fit=crop&q=80',
    category: 'Fruits'
  },
  {
    id: 3,
    name: 'Organic Greens',
    price: '$5.4',
    oldPrice: '$9.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 4,
    name: 'Fresh Tomatoes',
    price: '$4.2',
    oldPrice: '$6.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 5,
    name: 'Fresh Bell Peppers',
    price: '$7.1',
    oldPrice: '$11.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 6,
    name: 'Citrus Oranges Pack',
    price: '$6.3',
    oldPrice: '$10.5',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=200&auto=format&fit=crop&q=80',
    category: 'Fruits'
  },
  {
    id: 7,
    name: 'Crisp Red Apples',
    price: '$9.2',
    oldPrice: '$13.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=80',
    category: 'Fruits'
  },
  {
    id: 8,
    name: 'Farm Carrots Bunch',
    price: '$3.8',
    oldPrice: '$5.5',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 9,
    name: 'Fresh Broccoli',
    price: '$5.9',
    oldPrice: '$8.2',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=200&auto=format&fit=crop&q=80',
    category: 'Vegetables'
  },
  {
    id: 10,
    name: 'Fresh Strawberries',
    price: '$11.0',
    oldPrice: '$15.0',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&auto=format&fit=crop&q=80',
    category: 'Fruits'
  }
];

export const productsListData = [
  {
    id: '3456789',
    name: 'Banana (1 Dozen)',
    category: 'Fruits',
    price: 120.8,
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456790',
    name: 'Milk (1 Kg)',
    category: 'Fruits',
    price: 120.8,
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456791',
    name: 'Eggs (Dozen)',
    category: 'Fruits',
    price: 120.8,
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456792',
    name: 'Drinks & Juices',
    category: 'Fruits',
    price: 120.8,
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456793',
    name: 'Banana (1 Dozen)',
    category: 'Fruits',
    price: 120.8,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456794',
    name: 'Drinks Cold Pack',
    category: 'Fruits',
    price: 120.8,
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456795',
    name: 'Organic Soya Beans',
    category: 'Grains',
    price: 240.0,
    stock: 45,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3456796',
    name: 'Fresh Golden Honey',
    category: 'Pantry',
    price: 490.0,
    stock: 8,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&auto=format&fit=crop&q=80'
  }
];

export const inventoryListData = [
  {
    id: 1,
    name: 'Banana',
    sku: 'BAN-001',
    category: 'Fruits',
    unit: 'Dozen',
    quantity: 120,
    status: 'In Stock',
    lastUpdated: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Banana Cavendish',
    sku: 'BAN-001',
    category: 'Fruits',
    unit: 'Dozen',
    quantity: 0,
    status: 'Out of Stock',
    lastUpdated: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Banana Plantain',
    sku: 'BAN-001',
    category: 'Fruits',
    unit: 'Dozen',
    quantity: 120,
    status: 'In Stock',
    lastUpdated: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Banana Premium',
    sku: 'BAN-001',
    category: 'Fruits',
    unit: 'Dozen',
    quantity: 14,
    status: 'Low Stock',
    lastUpdated: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Banana Organic',
    sku: 'BAN-001',
    category: 'Fruits',
    unit: 'Dozen',
    quantity: 120,
    status: 'In Stock',
    lastUpdated: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Farm Fresh Milk',
    sku: 'MLK-002',
    category: 'Dairy',
    unit: '1 Kg',
    quantity: 85,
    status: 'In Stock',
    lastUpdated: 'May 21, 2026',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Brown Farm Eggs',
    sku: 'EGG-003',
    category: 'Dairy',
    unit: '12 pcs',
    quantity: 6,
    status: 'Low Stock',
    lastUpdated: 'May 21, 2026',
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=120&auto=format&fit=crop&q=80'
  }
];

export const ordersCardsData = [
  {
    id: '#ORD-1111',
    customer: 'Muhammad Ali',
    avatar: 'MA',
    time: '11:34 pm',
    itemsCount: 8,
    paymentMethod: 'Cash On Delivery',
    distance: '4.2 KM',
    eta: '35 Min',
    amount: 'RS 1289',
    isNew: true,
    status: 'New'
  },
  {
    id: '#ORD-1112',
    customer: 'Ahmed Khan',
    avatar: 'AK',
    time: '11:34 pm',
    itemsCount: 8,
    paymentMethod: 'Cash On Delivery',
    distance: '2.8 KM',
    eta: '25 Min',
    amount: 'RS 2850',
    isNew: true,
    status: 'New'
  },
  {
    id: '#ORD-1113',
    customer: 'Sana Fatima',
    avatar: 'SF',
    time: '11:20 pm',
    itemsCount: 5,
    paymentMethod: 'EasyPaisa',
    distance: '3.1 KM',
    eta: '30 Min',
    amount: 'RS 1840',
    isNew: false,
    status: 'Processing'
  },
  {
    id: '#ORD-1114',
    customer: 'Zubair Sheikh',
    avatar: 'ZS',
    time: '10:55 pm',
    itemsCount: 12,
    paymentMethod: 'JazzCash',
    distance: '5.0 KM',
    eta: '40 Min',
    amount: 'RS 3420',
    isNew: false,
    status: 'Processing'
  }
];

export const orderDetailsData = {
  id: '#ORD-1111',
  status: 'New Order',
  timeRemainingMinutes: 15,
  customer: {
    name: 'Ahmed Khan',
    phone: '+92 300 1234567',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80'
  },
  delivery: {
    distance: '2.8 KM',
    address: 'Apartment 4B, Green Avenue, Gulberg, Lahore'
  },
  paymentMethod: 'Cash on Delivery',
  items: [
    {
      id: 1,
      sku: '3456789',
      name: 'Banana (1 Dozen)',
      quantity: 2,
      unitPrice: 120,
      total: 240,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 2,
      sku: '3456789',
      name: 'Milk (1 Kg)',
      quantity: 2,
      unitPrice: 120,
      total: 240,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 3,
      sku: '3456790',
      name: 'Eggs (12 pieces)',
      quantity: 1,
      unitPrice: 60,
      total: 60,
      image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 4,
      sku: '3456791',
      name: 'Bread (1 Loaf)',
      quantity: 3,
      unitPrice: 40,
      total: 120,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 5,
      sku: '3456792',
      name: 'Rice (2 Kg)',
      quantity: 1,
      unitPrice: 150,
      total: 150,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 6,
      sku: '3456793',
      name: 'Butter (200g)',
      quantity: 2,
      unitPrice: 90,
      total: 180,
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 7,
      sku: '3456794',
      name: 'Apples (1 Kg)',
      quantity: 1,
      unitPrice: 130,
      total: 130,
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    },
    {
      id: 8,
      sku: '3456795',
      name: 'Orange Juice (1L)',
      quantity: 2,
      unitPrice: 110,
      total: 220,
      image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&auto=format&fit=crop&q=80',
      outOfStock: false
    }
  ],
  pricing: {
    subtotal: 3000,
    deliveryFee: 120,
    tax: 60,
    discount: 330,
    total: 2850
  }
};

export const financeSettlementHistory = [
  {
    id: '#ID1234567890',
    orderDate: '18, May 2026',
    settlementDate: '19, May 2026',
    orderAmount: 'RS 1308.',
    commission: 'RS 308.',
    status: 'Settled'
  },
  {
    id: '#ID1234567891',
    orderDate: '18, May 2026',
    settlementDate: '19, May 2026',
    orderAmount: 'RS 1308.',
    commission: 'RS 308.',
    status: 'Settled'
  },
  {
    id: '#ID1234567892',
    orderDate: '18, May 2026',
    settlementDate: '19, May 2026',
    orderAmount: 'RS 1308.',
    commission: 'RS 308.',
    status: 'Settled'
  },
  {
    id: '#ID1234567893',
    orderDate: '18, May 2026',
    settlementDate: '19, May 2026',
    orderAmount: 'RS 1308.',
    commission: 'RS 308.',
    status: 'Settled'
  }
];

export const walletTransactions = [
  {
    id: '#ID1234567890',
    date: '18, May 2026',
    type: 'Credit',
    description: 'Order Settlement',
    amount: 'RS 1308.',
    status: 'Completed'
  },
  {
    id: '#ID1234567891',
    date: '18, May 2026',
    type: 'Credit',
    description: 'Order Settlement',
    amount: 'RS 1308.',
    status: 'Completed'
  },
  {
    id: '#ID1234567892',
    date: '18, May 2026',
    type: 'Credit',
    description: 'Order Settlement',
    amount: 'RS 1308.',
    status: 'Completed'
  },
  {
    id: '#ID1234567893',
    date: '18, May 2026',
    type: 'Credit',
    description: 'Order Settlement',
    amount: 'RS 1308.',
    status: 'Completed'
  },
  {
    id: '#ID1234567894',
    date: '18, May 2026',
    type: 'Credit',
    description: 'Order Settlement',
    amount: 'RS 1308.',
    status: 'Completed'
  }
];

export const initialStoreSettings = {
  information: {
    storeName: 'Soya Beans Mart',
    storeOwner: 'Syed Muhammad Bilal',
    email: 'syedmubilal1.2@gmail.com',
    secondaryEmail: 'admin@grocerymart.com',
    phone: '+92 300 9876543',
    ntnNumber: '7654321-9',
    city: 'Lahore',
    state: 'Punjab',
    postalCode: '54000',
    country: 'Pakistan',
    description: 'Peak freaks & organic natural fresh groceries delivered promptly.'
  },
  status: {
    current: 'Active',
    memberSince: 'May 10, 2024',
    lastUpdated: 'May 20, 2024 10:34 PM'
  },
  businessHours: [
    { days: 'Monday to Friday', hours: '08:00 AM - 12:00 PM' },
    { days: 'Saturday', hours: '08:00 AM - 12:00 PM' },
    { days: 'Sunday', hours: '08:00 AM - 12:00 PM' }
  ],
  statistics: {
    totalProducts: 234,
    totalOrders: 1245,
    totalCustomers: 892,
    activeUsers: 7
  },
  general: {
    currency: '(PKR) Pakistani Rupees',
    timezone: '(GMT+5:00) Asia/Karachi',
    dateFormat: 'May 20, 2026 (MM/DD/YYYY)',
    timings: '12 Hours (AM/PM)',
    language: 'English',
    storeAnalytics: true,
    weekStartDay: 'Monday',
    businessDay: 'Mon - Sun',
    holidays: '12 Days'
  },
  gateways: [
    { id: 'jazzcash', name: 'Jazz Cash', provider: 'Jazz Cash', status: true, logo: 'JC' },
    { id: 'easypaisa', name: 'EasyPaisa', provider: 'EasyPaisa', status: true, logo: 'EP' },
    { id: 'hbl', name: 'HBL Bank Transfer', provider: 'HBL Bank', status: true, logo: 'HBL' },
    { id: 'meezan', name: 'Mezan Bank Transfer', provider: 'Mezan Bank', status: true, logo: 'MZN' },
    { id: 'alfalah', name: 'Bank Alfalah Transfer', provider: 'Bank Alfalah', status: true, logo: 'BA' }
  ],
  notifications: {
    globalEnabled: true,
    defaultLevel: 'Critical Only', // Critical Only | Important | All
    preferences: [
      {
        type: 'Product Inventory Alert',
        description: 'Get Notified about low stock items',
        threshold: 'Below 100%',
        email: true,
        popup: true
      },
      {
        type: 'Customer Messages',
        description: 'Get Notified About new Customer Message',
        threshold: null,
        email: true,
        popup: true
      },
      {
        type: 'System Status Updates',
        description: 'Get Notified About system updates.',
        threshold: null,
        email: false,
        popup: true
      }
    ],
    emails: {
      mainAdmin: 'Admin@grocerymart.com',
      fulfillment: 'Admin@FulfillmentTeam.com',
      inventory: 'Admin@InventoryManager.com',
      customerService: 'Admin@CustomerService.com'
    }
  }
};
