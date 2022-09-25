import { useState, useEffect } from "react";

function useFetchData(url: string) {
  const [data, dataSet] = useState(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
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
  return (
    <div>

    </div>
  )
}

export default CustomHookComponent;