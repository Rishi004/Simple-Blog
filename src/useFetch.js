import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setdata] = useState(null);
    const [error, seterror] = useState(null);
    const [isPending, setisPending] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error(
                            "Could not fetch the data from that resource"
                        );
                    }
                    return res.json();
                })
                .then((data) => {
                    setisPending(false);
                    setdata(data);

                    seterror(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setisPending(false);
                        seterror(err.message);
                    }
                });
        }, 850);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
