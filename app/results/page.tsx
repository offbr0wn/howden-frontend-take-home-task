// Table page
// If user has data in local store
// Then display the data
// If not then show a message saying "No data found"
// Then redirect user to form page
// If user tries to access form page with no data then redirect to form page
// If there is data show "Remove data"/Amend button to reset local store and redirect to form page
"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { DataCarStore } from "../page";

export default function Results() {
  const [carOwner, setCarOwner] = React.useState<DataCarStore>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("carOwner");
      if (storedData) {
        setCarOwner(JSON.parse(storedData));
        return;
      } else {
        router.push("/");
      }
    }
  }, [router]);
  const clearStorage = () => {
    localStorage.removeItem("carOwner");
    router.push("/");
  };

  if (!carOwner) {
    return (
      <div className="flex justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-5xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Table className=" w-full">
          <TableHeader className="text-2xl">
            <TableRow>
              <TableHead className="w-full">Car Owner</TableHead>

              <TableHead>
                {carOwner?.carOwner === "Yes" ? "Number Plate" : "Car Make"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-2xl">
            <TableRow>
              <TableCell className="font-medium">
                {carOwner?.carOwner}
              </TableCell>

              <TableCell>
                {carOwner?.carOwner === "Yes"
                  ? carOwner?.numberPlate
                  : carOwner?.wantedCarMake}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          className="mt-4 w-full cursor-pointer bg-white text-black"
          onClick={clearStorage}
        >
          Amend/Remove data
        </Button>
      </main>
    </div>
  );
}
