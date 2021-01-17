import React from "react";

import ReviewForm from "./ReviewForm"

export default function Review(props) {

  const WRITE = "WRITE";

  return <section classname="review" data-testid="review">
    <ReviewForm />
  </section>
};