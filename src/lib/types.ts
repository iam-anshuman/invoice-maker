export type Address = {
    name: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    stateUTCode: string;
  };
  
  export type OrderDetails = {
    orderNo: string;
    orderDate: string;
  };
  
  export type InvoiceDetails = {
    invoiceNo: string;
    invoiceDetails: string;
    invoiceDate: string;
  };
  
  export type ItemDetail = {
    description: string;
    unitPrice: string;
    quantity: string;
    discount: string;
    taxRate: string;
  };
  
  export type InvoiceFormData = {
    placeOfSupply: string;
    billingDetails: Address;
    shippingDetails: Address;
    placeOfDelivery: string;
    orderDetails: OrderDetails;
    invoiceDetails: InvoiceDetails;
    reverseCharge: 'yes' | 'no';
    items: ItemDetail[];
    signatureImage: File | null;
  };

  export type itemSchema ={
    description: string;
    unitPrice: string;
    quantity: string;
    taxRate: string;
  }