import * as React from "react"
import styled from "styled-components"

const Pagination = styled.div`
  span,
  button {
    margin-right: 8px;
  }
  button {
    border: 0;
    cursor: pointer;
    background-color: rgb(66, 133, 244);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    outline: none;
  }
  button[disabled] {
    opacity: 0.5;
  }
`

export default ({
  page,
  count = 0,
  next,
  previous,
  goNextPage,
  goPrevPage
}) => (
  <Pagination>
    <span>Page: {page}</span>
    <button disabled={previous === null} onClick={goPrevPage}>
      Previous
    </button>
    <button disabled={next === null} onClick={goNextPage}>
      Next
    </button>
    <span>Total: {count}</span>
  </Pagination>
)
