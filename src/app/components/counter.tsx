import { useClient, useQuery } from "@based/react";
import { useState } from "react";

export const Counter = () => {
  const [name, setName] = useState("");
  // const [filter, setFilter] = useState("");

  // const { data: rootProps } = useQuery("filter");

  const client = useClient();

  const { data, loading, error } = useQuery("counter", {
    // filter: rootProps?.filter || "",
  });

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
          // value={rootProps?.filter}
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
        <button
          onClick={() => {
            client.setAuthState({ token: "🔑" });
          }}
        >
          Login
        </button>
      </div>
      {error
        ? "errr " + error.message
        : loading
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
