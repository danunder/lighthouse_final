export default function ReviewForm(props) {

  return ( <section classname="card">
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </section>)
}

// inspo code

// import React, { useState } from "react";
// import Button from "../Button";

// export default function ReviewForm(props) {
//   console.log(props)

//   const [name, setName] = useState(props.name || "");
//   const [interviewer, setInterviewer] = useState(props.interviewer || null);
//   const [error, setError] = useState("");

//   const cancel = () => {
//     props.onCancel();
//     reset();
//   };

//   // Should add in case of empty rating of property review
//   // function validate() {
//   //   if (!name) {
//   //     setError("Student name cannot be blank");
//   //     return;
//   //   };
//   //   setError("");
//   //   props.onSave(name, interviewer, props.isNew);
//   // };

//   return (
//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form
//         autoComplete="off"
//         onSubmit={event => event.preventDefault()}
//         >
//           <input
//             className="appointment__create-input text--semi-bold"
//             name="name"
//             type="text"
//             placeholder="Enter Student Name"
//             value={name}
//             onChange={event => {
//               setName(event.target.value);
//             }}
//             data-testid="student-name-input"
//           />
//         </form>
//           <section className="appointment__validation">{error}</section>
//         <InterviewerList interviewers={props.interviewers} value={interviewer} setInterviewer={setInterviewer} />
//       </section>
//       <section className="appointment__card-right">
//         <section className="appointment__actions">
//           <Button danger onClick={cancel}>Cancel</Button>
//           <Button confirm onClick={validate}>Save</Button>
//         </section>
//       </section>
//     </main>
//   );
// };