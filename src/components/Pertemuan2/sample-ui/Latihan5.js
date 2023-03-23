import React, { Component } from "react";
import Layout from "./Layout";
import { Form } from "react-bootstrap";

export default class Latihan5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Pem Web Lanjut Apps",
    };
  }
  render() {
    return (
      <div className="container p-5" style={{ backgroundColor: "darkblue" }}>
        <Layout title={this.state.title}>
          <Form method="post" autoComplete="off" className="form p-5">
            <div className="text-center mb-5 mx-5">
              <h1 className="text-dark mb-3">Widget One</h1>
              <div className="fw-bold" style={{ color: "GrayText" }}>
                Please fill up this form with correctly
              </div>
            </div>

            <div className="fv-row mb-10 fv-plugins-icon-container">
              <label className="form-label fs-6 fw-bolder text-dark">
                Type the title of this web
              </label>
              <input
                type="text"
                name="title"
                className="form-control "
                defaultValue={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100 mb-5 mt-4"
              >
                Submit
              </button>
            </div>
          </Form>
        </Layout>
      </div>
    );
  }
}

// export default function Latihan5() {
//   const [title, setTitle] = useState("My Apps");
//   return (
//     <Layout title={title}>
//       <form method="post" autoComplete="off" className="form w-100">
//         <div className="text-center mb-10">
//           <h1 className="text-dark mb-3">Widget One</h1>
//           <div className="text-gray-400 fw-bold fs-5">
//             Please fill up this form with correctly
//           </div>
//         </div>

//         <div className="fv-row mb-10 fv-plugins-icon-container">
//           <label className="form-label fs-6 fw-bolder text-dark">
//             Type the title of this web
//           </label>
//           <input
//             type="text"
//             name="title"
//             className="form-control form-control-lg form-control-solid"
//             defaultValue={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <div className="text-center">
//           <button type="button" className="btn btn-lg btn-primary w-100 mb-5">
//             Submit
//           </button>
//         </div>
//       </form>
//     </Layout>
//   );
// }
