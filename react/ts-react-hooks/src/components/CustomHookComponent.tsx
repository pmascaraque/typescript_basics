import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData(url: string): {
  data: Beverage[] | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Beverage[] | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data: Beverage[]) => {
        dataSet(data);
        doneSet(true);
      })
  }, [url]);

  return {
    data,
    done,
  }
}

function CustomHookComponent() {
  const { data, done} = useFetchData("/hv-taplist.json")
  const portlandTaps = useMemo(() => 
  (data || []).filter(bev => bev.producerLocation.includes("Portland")),
  [data]
  )
  return ( 
    <div>
      {done && (
        <img src={portlandTaps![1].logo} alt="Beverage Logo"/> //data guaranteed to not be null given done being true
      )}
    </div>
  )
}

export default CustomHookComponent;