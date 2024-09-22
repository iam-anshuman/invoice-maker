import { z } from 'zod';

export const invoiceSchema = z.object({
  sellerName: z.string().min(1, "Seller name is required"),
  sellerAddress: z.string().min(1, "Seller address is required"),
  sellerCity: z.string().min(1, "Seller city is required"),
  sellerState: z.string().min(1, "Seller state is required"),
  sellerPincode: z.string().min(1, "Pincode is required"),
  sellerPAN: z.string().min(1, "PAN is required"),
  sellerGST: z.string().min(1, "GST is required"),
  placeOfSupply: z.string().min(1, "Place of supply is required"),
  billingName: z.string().min(1, "Billing name is required"),
  billingAddress: z.string().min(1, "Billing address is required"),
  billingCity: z.string().min(1, "Billing city is required"),
  billingState: z.string().min(1, "Billing state is required"),
  billingPincode: z.string().min(1, "Billing pincode is required"),
  billingStateCode: z.string().min(1, "State/UT Code is required"),
  shippingName: z.string().min(1, "Shipping name is required"),
  shippingAddress: z.string().min(1, "Shipping address is required"),
  shippingCity: z.string().min(1, "Shipping city is required"),
  shippingState: z.string().min(1, "Shipping state is required"),
  shippingPincode: z.string().min(1, "Shipping pincode is required"),
  shippingStateCode: z.string().min(1, "Shipping state/UT Code is required"),
  placeOfDelivery: z.string().min(1, "Place of delivery is required"),
  orderNo: z.string().min(1, "Order number is required"),
  orderDate: z.string().min(1, "Order date is required"),
  invoiceNo: z.string().min(1, "Invoice number is required"),
  invoiceDate: z.string().min(1, "Invoice date is required"),
  invoiceDetails: z.string().min(1, "Invoice details is required"),
  items: z.array(
    z.object({
      description: z.string().min(1, "Item Name is required"),
      quantity: z.string().min(1, "Quantity is required"),
      unitPrice: z.string().min(1, "Unit Price is required"),
      taxRate: z.string().min(1, "Tax Rate is required"),
    })
  ),
  signatureImage: z.instanceof(File),
});