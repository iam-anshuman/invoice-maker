'use client'

import { useState } from 'react'
import { useForm,Controller} from 'react-hook-form';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { invoiceSchema } from '@/lib/InvoiceSchema';
import { itemSchema } from '@/lib/types';
import { Moon, Sun, Trash2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Item from '@/components/Item';
import { Textarea } from "@/components/ui/textarea"
import DownloadInvoice from './DownloadInvoice';


export default function InvoiceForm() {



  const { theme, setTheme } = useTheme()

  const [addedItems, setAddedItems] = useState<itemSchema[]>();

  const {control,register,handleSubmit,formState:{errors}} = useForm<z.infer<typeof invoiceSchema>>({
    resolver: zodResolver(invoiceSchema),
  })

  function onSubmit(data: z.infer<typeof invoiceSchema>) {
      return <DownloadInvoice invoiceData={data}/>
  }

  function handleRemoveItem(index: number){
    const updatedItems = addedItems?.filter((_, i) => i !== index);
    setAddedItems(updatedItems);
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-center">Invoice Generator</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Seller Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sellerName">Name</Label>
                  <Input id="sellerName" placeholder="Name" {...register('sellerName')}/>
                  {errors.sellerName && <p className="text-red-500">{errors.sellerName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerAddress">Address</Label>
                  <Input id="sellerAddress" placeholder="Address" {...register('sellerAddress')}/>
                  {errors.sellerAddress && <p className="text-red-500">{errors.sellerAddress.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerCity">City</Label>
                  <Input id="sellerCity" placeholder="City" {...register('sellerCity')}/>
                  {errors.sellerCity && <p className="text-red-500">{errors.sellerCity.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerState">State</Label>
                  <Input id="sellerState" placeholder="State" {...register('sellerState')}/>
                  {errors.sellerState && <p className="text-red-500">{errors.sellerState.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerPincode">Pincode</Label>
                  <Input id="sellerPincode" placeholder="Pincode" {...register('sellerPincode')}/>
                  {errors.sellerPincode && <p className="text-red-500">{errors.sellerPincode.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerPAN">PAN No.</Label>
                  <Input id="sellerPAN" placeholder="PAN No." {...register('sellerPAN')}/>
                  {errors.sellerPAN && <p className="text-red-500">{errors.sellerPAN.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sellerGST">GST Registration No.</Label>
                  <Input id="sellerGST" placeholder="GST Registration No." {...register('sellerGST')}/>
                  {errors.sellerGST && <p className="text-red-500">{errors.sellerGST.message}</p>}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Place of Supply</h3>
              <div className="space-y-2">
                <Label htmlFor="placeOfSupply">Place of Supply</Label>
                <Input id="placeOfSupply" placeholder="Place of Supply" {...register('placeOfSupply')}/>
                {errors.placeOfSupply && <p className="text-red-500">{errors.placeOfSupply.message}</p>}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Billing Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingName">Name</Label>
                  <Input id="billingName" placeholder="Billing Name" {...register('billingName')}/>
                  {errors.billingName && <p className="text-red-500">{errors.billingName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingAddress">Address</Label>
                  <Input id="billingAddress" placeholder="Billing Address" {...register('billingAddress')}/>
                  {errors.billingAddress && <p className="text-red-500">{errors.billingAddress.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City</Label>
                  <Input id="billingCity" placeholder="City" {...register('billingCity')}/>
                  {errors.billingCity && <p className="text-red-500">{errors.billingCity.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingState">State</Label>
                  <Input id="billingState" placeholder="State" {...register('billingState')}/>
                  {errors.billingState && <p className="text-red-500">{errors.billingState.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingPincode">Pincode</Label>
                  <Input id="billingPincode" placeholder="Pincode" {...register('billingPincode')}/>
                  {errors.billingPincode && <p className="text-red-500">{errors.billingPincode.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingStateCode">State/UT Code</Label>
                  <Input id="billingStateCode" placeholder="State/UT Code" {...register('billingStateCode')}/>
                  {errors.billingStateCode && <p className="text-red-500">{errors.billingStateCode.message}</p>}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shipping Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="shippingName">Name</Label>
                  <Input id="shippingName" placeholder="Shipping Name" {...register('shippingName')}/>
                  {errors.shippingName && <p className="text-red-500">{errors.shippingName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingAddress">Address</Label>
                  <Input id="shippingAddress" placeholder="Shipping Address" {...register('shippingAddress')}/>
                  {errors.shippingAddress && <p className="text-red-500">{errors.shippingAddress.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingCity">City</Label>
                  <Input id="shippingCity" placeholder="City" {...register('shippingCity')}/>
                  {errors.shippingCity && <p className="text-red-500">{errors.shippingCity.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingState">State</Label>
                  <Input id="shippingState" placeholder="State" {...register('shippingState')}/>
                  {errors.shippingState && <p className="text-red-500">{errors.shippingState.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingPincode">Pincode</Label>
                  <Input id="shippingPincode" placeholder="Pincode" {...register('shippingPincode')}/>
                  {errors.shippingPincode && <p className="text-red-500">{errors.shippingPincode.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shippingStateCode">State/UT Code</Label>
                  <Input id="shippingStateCode" placeholder="State/UT Code" {...register('shippingStateCode')}/>
                  {errors.shippingStateCode && <p className="text-red-500">{errors.shippingStateCode.message}</p>}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Place of  & Delivery</h3>
                <div className="space-y-2">
                  <Label htmlFor="placeOfDelivery">Place of Delivery</Label>
                  <Input id="placeOfDelivery" placeholder="Place of Delivery" {...register('placeOfDelivery')}/>
                  {errors.placeOfDelivery && <p className="text-red-500">{errors.placeOfDelivery.message}</p>}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orderNo">Order No.</Label>
                  <Input id="orderNo" placeholder="Order No." {...register('orderNo')}/>
                  {errors.orderNo && <p className="text-red-500">{errors.orderNo.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orderDate">Order Date</Label>
                  <Input id="orderDate" type="date" {...register('orderDate')}/>
                  {errors.orderDate && <p className="text-red-500">{errors.orderDate.message}</p>}
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Invoice Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="invoiceNo">Invoice No.</Label>
                  <Input id="invoiceNo" placeholder="Invoice No." {...register('invoiceNo')}/>
                  {errors.invoiceNo && <p className="text-red-500">{errors.invoiceNo.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invoiceDate">Invoice Date</Label>
                  <Input id="invoiceDate" type="date" {...register('invoiceDate')}/>
                  {errors.invoiceDate && <p className="text-red-500">{errors.invoiceDate.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoiceDetails">Invoice Details</Label>
                <Textarea id="invoiceDetails" placeholder="Invoice Details" {...register('invoiceDetails')}/>
                {errors.invoiceDetails && <p className="text-red-500">{errors.invoiceDetails.message}</p>}
              </div>
            </div>

            <Separator />

              <div className="space-y-4">

            {addedItems &&
            <div className='flex flex-col max-h-52 overflow-y-auto'>
              <div className="grid grid-cols-6 border divide-x-2">
                <div className="bg-zinc-900 p-2">Name</div>
                <div className="bg-zinc-900 p-2">Unit Price</div>
                <div className="bg-zinc-900 p-2">Quantity</div>
                <div className="bg-zinc-900 p-2">Discount</div>
                <div className="bg-zinc-900 p-2">Tax Rate</div>
                <div className='bg-zinc-900 p-2'>Remove Item</div>
              </div>
                    {addedItems.map((item, index) => (
                      <div key={`item-${item.id}`}>
                        <div className="grid grid-cols-6 border">
                        <div className='bg-zinc-800 p-2'>{item.description}</div>
                        <div className='bg-zinc-800 p-2'>{item.quantity}</div>
                        <div className='bg-zinc-800 p-2'>{item.taxRate}</div>
                        <div className='bg-zinc-800 p-2'>{item.unitPrice}</div>
                        <div className='bg-zinc-800 p-2' onClick={()=>handleRemoveItem(index)}><Trash2/></div>
                      </div>
                    </div> 
                    )
                  )}
            </div>
            }
               <Item setAddedItems={setAddedItems}/>
              
              </div>
            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Signature</h3>
              <div className="space-y-2">
              <Label htmlFor="signature">Signature Image</Label>
              <Controller
                name="signatureImage"
                control={control}
                render={({ field }) => (
                <Input
                  id="signature"
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                />
                )}
              />
              {errors.signatureImage && <p className="text-red-500">{errors.signatureImage.message}</p>}
              </div>
            </div>

            <Button type="submit" className="w-full cursor-pointer text-center">Generate Invoice</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}