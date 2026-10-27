export const pricing = {
  weddingAlbumAR: {
    name: 'Wedding Album AR',
    price: 999,
    currency: '₹',
    unit: 'per project',
    includes: ['Photo-to-video mapping', 'QR code delivery', 'WebAR experience (no app)', 'Basic support'],
    limits: { photos: 'Up to 30 photos (demo sample shows 30)', storage: 'As per project agreement', duration: 'As agreed' }
  },
  smartVisitingCard: {
    name: 'Smart Visiting Card',
    price: 499,
    currency: '₹',
    unit: 'per experience',
    includes: ['AR-enabled business card', 'Video, links, contact actions', 'QR code', 'Basic support'],
    limits: { storage: 'As per project agreement', duration: 'As agreed' }
  },
  productLabelAR: {
    name: 'Product Label AR',
    price: null,
    currency: '₹',
    unit: 'custom quotation',
    includes: ['Image tracking or fallback', 'Video/3D content', 'QR code', 'Consultation included'],
    note: 'Custom quotation based on requirements'
  },
  wedding10YearPackage: {
    name: '10-year wedding memory package',
    price: 9999,
    currency: '₹',
    unit: 'indicative package',
    includes: ['Extended project scope', 'Service arrangement as agreed', 'Documentation of limits'],
    notes: [
      'Indicative price ₹9,999, subject to storage, usage, backup and service limits',
      'GST is additional',
      '10-year service not guaranteed unless terms, backup policy and costs support it',
      'No unlimited storage claim'
    ]
  }
};
