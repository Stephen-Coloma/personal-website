'use client'  

import { getCalApi } from "@calcom/embed-react";
import { Phone, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export default function CalcomEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#18181b"},"dark":{"cal-brand":"#f4f4f5"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <Button 
      variant="default" className="hidden md:inline-flex w-full justify-start cursor-pointer relative"
      data-cal-namespace="15min"
      data-cal-link="stephen-coloma/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      <Phone className="mr-2" />
      <span>Book a call</span>
      <ArrowRight className="absolute right-2" />
    </Button>
  )
};