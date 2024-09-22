import {z} from 'zod'
import { invoiceSchema } from "@/lib/InvoiceSchema"

export default function DownloadInvoice({invoiceData}: Readonly<{invoiceData: z.infer<typeof invoiceSchema>}>){
    return(
        <div>
            <h1 className="text-2xl font-semibold">Invoice</h1>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-lg font-semibold">Seller Details</h2>
                    <p>{invoiceData.sellerName}</p>
                    <p>{invoiceData.sellerAddress}</p>
                    <p>{invoiceData.sellerCity}</p>
                    <p>{invoiceData.sellerState}</p>
                    <p>{invoiceData.sellerPincode}</p>
                    <p>{invoiceData.sellerPAN}</p>
                    <p>{invoiceData.sellerGST}</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Billing Details</h2>
                    <p>{invoiceData.billingName}</p>
                    <p>{invoiceData.billingAddress}</p>
                    <p>{invoiceData.billingCity}</p>
                    <p>{invoiceData.billingState}</p>
                    <p>{invoiceData.billingPincode}</p>
                    <p>{invoiceData.billingStateCode}</p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Shipping Details</h2>
                    <p>{invoiceData.shippingName}</p>
                    <p>{invoiceData.shippingAddress}</p>
                    <p>{invoiceData.shippingCity}</p>
                    <p>{invoiceData.shippingState}</p>
                    <p>{invoiceData.shippingPincode}</p>
                    <p>{invoiceData.shippingStateCode}</p>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Order Details</h2>
                <p>Order No: {invoiceData.orderNo}</p>
                <p>Order Date: {invoiceData.orderDate}</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Invoice Details</h2>
                <p>Invoice No: {invoiceData.invoiceNo}</p>
                <p>Invoice Date: {invoiceData.invoiceDate}</p>
                <p>Invoice Details: {invoiceData.invoiceDetails}</p>
            </div>
            <div>
                <h2 className="text-lg font-semibold">Items</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.description}</td>
                                <td>{item.quantity}</td>
                                <td>{item.rate}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}