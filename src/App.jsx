import React, { useEffect } from "react";
import supabase from "../supaBaseClient";

const App = () => {
  const fetchData = async () => {
    const { data, error } = await supabase.from("sample table").select("*");

    console.log(data, "data are");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-red-600">
      This is my react e-commers project. We will make greate project.
    </div>
  );
};

export default App;
