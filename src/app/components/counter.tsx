import { useClient, useQuery } from "@based/react";
import { useState } from "react";

export const Counter = () => {
  const [name, setName] = useState("");
  // const [filter, setFilter] = useState("");

  const { data: rootProps } = useQuery("filter");

  const client = useClient();

  const { data, loading } = useQuery("counter", {
    filter: rootProps?.filter || "",
  });

  const background: string =
    "linear-gradient(112.33deg,#ff1f85 -11.53%,#4b41ff 93.86%)";

  console.log(name);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div>
        <input
          value={rootProps?.filter}
          onChange={(e) =>
            client.call("add-filter", { filter: e.target.value })
          }
        />
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button
          onClick={() => {
            client.call("make-user", { name: name || "NEW USER" });
          }}
        >
          Add user
        </button>
      </div>
      {loading
        ? "..."
        : data.map((v: any) => {
            return (
              <div key={v.id} style={{ padding: 20 }}>
                <h2>{v.name}</h2>
                <div>{v.id}</div>
                <div>{v.bio}</div>
              </div>
            );
          })}
    </div>
  );
};
