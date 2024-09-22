'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { z } from 'zod'
import { itemSchema } from "@/lib/types"
import {useState } from "react"
import {v4 as uuidv4 } from "uuid";

const ZodItemSchema = z.object({
  id:z.string().min(1,"Id is required"),
  description: z.string().min(1, "Item Name is required"),
  unitPrice: z.string().min(1, "Unit price is required"),
  quantity: z.string().min(1, "Quantity is required"),
  taxRate: z.string().min(1, "Tax rate is required"),
});

interface ItemProps {
  setAddedItems: (React.Dispatch<React.SetStateAction<itemSchema[] | undefined>>);
}

export default function Item({ setAddedItems }: Readonly<ItemProps>) {
  const [item, setItem] = useState<itemSchema>({
    id:uuidv4(),
    description: "",
    unitPrice: "",
    quantity: "",
    taxRate: "18",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof itemSchema, string[]>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setItem((prevItem) => ({
      ...prevItem,
      taxRate: value,
    }));
  };

  const addNewItemFn = () => {
    const result = ZodItemSchema.safeParse(item);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.log("fieldErrors", fieldErrors);
      setErrors(fieldErrors as Partial<Record<keyof itemSchema, string[]>>);
      return;
    }
    setErrors({});
    setAddedItems((prevItems) => (prevItems ? [...prevItems, item] : [item]));
    setItem({
      id:uuidv4(),
      description: "",
      unitPrice: "",
      quantity: "",
      taxRate: "",
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Item Details</h3>
      <div className="space-y-4 p-4 border rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="description">Item Description</Label>
            <Input
              id="description"
              placeholder="Item Description"
              value={item.description}
              onChange={handleChange}
            />
            {errors.description && <p className="text-red-500">{errors.description}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="unitPrice">Unit Price</Label>
            <Input
              id="unitPrice"
              type="number"
              placeholder="0.00"
              value={item.unitPrice}
              onChange={handleChange}
            />
            {errors.unitPrice && <p className="text-red-500">{errors.unitPrice}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0"
              value={item.quantity}
              onChange={handleChange}
            />
            {errors.quantity && <p className="text-red-500">{errors.quantity}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="taxRate">Tax Rate (%)</Label>
            <Select value={item.taxRate} onValueChange={handleSelectChange}>
              <SelectTrigger id="taxRate">
                <SelectValue placeholder="Select tax rate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0%</SelectItem>
                <SelectItem value="5">5%</SelectItem>
                <SelectItem value="12">12%</SelectItem>
                <SelectItem value="18">18%</SelectItem>
                <SelectItem value="28">28%</SelectItem>
              </SelectContent>
            </Select>
            {errors.taxRate && <p className="text-red-500">{errors.taxRate}</p>}
          </div>
        </div>
      </div>
      <Button type="button" onClick={addNewItemFn}>Add Item</Button>
    </div>
  );
}