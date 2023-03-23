import React, { useState } from "react";
import FormMulti from "./latihan/FomMulti";
// import StickyNotes from "./latihan/StickyNotes";
import Layout from "./Layout";
// import Widget1 from "./Widget1";
// import Widget from "./Widget";
import Latihan5 from "./Latihan5";

export default function Dashboard() {
  const [title, setTitle] = useState();

  return (
    <Layout title={title}>
      <div className="row">
        <div className="col-lg-12">
          <Latihan5 title={title} setTitle={setTitle} />
        </div>
        <div className="col-lg-12">
          <FormMulti title={title} setTitle={setTitle} />
        </div>
      </div>
    </Layout>
  );
}
