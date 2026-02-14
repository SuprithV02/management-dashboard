"use client";

import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/dashboard?year=2020");
      const data = await res.json();
      console.log(data);
    }

    fetchData();
  }, []);

  return <div>Check console</div>;
}
