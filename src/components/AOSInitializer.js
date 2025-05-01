"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return null; // no UI, just side effect
}
