"use client";
// Form page
// If user has data set in local store
// Then redirect to table pages
// If not then allow user to enter into form
// Submit form and save data into local store
// If user tries to access form page with data in local store then redirect to table page

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
export type DataCarStore = {
  carOwner: string | undefined;
  numberPlate?: string;
  wantedCarMake?: string;
};
const wantedCarMake = [
  "Volkswagen",
  "Ford",
  "Toyota",
  "BMW",
  "Mercedes",
  "Honda",
  "Chevrolet",
  "Nissan",
  "Kia",
  "Jaguar",
  "Fiat",
  "Volvo",
  "Mazda",
  "Hyundai",
] as const;
export default function Home() {
  const router = useRouter();

  // Checks to see if user has data in local store, if there is redirects to results page
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("carOwner");
      if (savedData) {
        router.push("/results");
      }
    }
  }, [router]);

  //  Validation schema for the form

  const formSchema = z
    .object({
      carOwner: z.enum(["Yes", "No"]),
      numberPlate: z
        .string()
        .length(6, "Number plate must be 6 characters long")
        .optional(),
      wantedCarMake: z.enum(wantedCarMake).optional(),
    })
    .superRefine((data, ctx) => {
      if (data.carOwner === "No" && !data.wantedCarMake) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["wantedCarMake"],
        });
      }

      if (data.carOwner === "Yes" && !data.numberPlate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["numberPlate"],
        });
      }
    });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const carOwner = form?.watch("carOwner");
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    let dataCarStore;

    if (data?.carOwner === "No") {
      dataCarStore = {
        carOwner: data?.carOwner,
        wantedCarMake: data?.wantedCarMake,
      };
    }

    if (data?.carOwner === "Yes") {
      dataCarStore = {
        carOwner: data?.carOwner,
        numberPlate: data?.numberPlate,
      };
    }
    //  Depending on what value selects from fields wil be assigned to the variable and stored in local storage
    // Then redirects user to results page
    localStorage?.setItem("carOwner", JSON.stringify(dataCarStore));
    router.push("/results");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Dropdown for car owner */}
            <FormField
              control={form.control}
              name="carOwner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you own a car?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-[200px] ">
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black ">
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Dropdown for wanted car make */}
            {carOwner === "No" && (
              <FormField
                control={form.control}
                name="wantedCarMake"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What car make would you like to own?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-[200px] ">
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-black ">
                        {wantedCarMake.map((make: string, index: number) => (
                          <SelectItem key={index} value={make}>
                            {make}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            )}
            {/* Input field for number plate */}
            {carOwner === "Yes" && (
              <FormField
                control={form.control}
                name="numberPlate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your car number plate?</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your car number plate"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            )}
            <Button type="submit" className="bg-white text-black">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </div>
  );
}
