import * as React from "react"
import axios from "axios"
import Pagination from "./Pagination"
import Modal from "./Modal"
import styled from "styled-components"

const Table = styled.table`
  border-spacing: 0;
  margin-bottom: 10px;
  thead {
    background: #666;
    color: #fff;
  }
  td {
    padding: 10px;
  }
  tbody {
    tr:hover {
      background: #ddd;
    }
    td {
      border-bottom: 1px #666 solid;
      button {
        cursor: pointer;
        border: 0;
        padding: 8px;
        background: #ffa500;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        color: #fff;
      }
    }
  }
`

interface IState {
  isLoading: boolean
  page: number
  data: {
    results: Array<any>
  }
  modal: { visible: boolean; data: any }
}

const showHeaders = [
  { label: "Name", value: "name" },
  { label: "Gender", value: "gender" },
  { label: "Birth Year", value: "birth_year" }
]

class List extends React.PureComponent<{}, IState> {
  readonly state = {
    isLoading: true,
    page: 1,
    data: { results: [] },
    modal: { visible: false, data: {} }
  }
  getData = async () => {
    const { page } = this.state
    const { data }: any = await axios.get("https://swapi.co/api/people", {
      params: { page },
      timeout: 120000
    })
    this.setState({ data, isLoading: false })
  }

  componentDidMount() {
    this.getData()
  }
  componentDidUpdate({}, { page: prevPage }) {
    const { page } = this.state
    if (page !== prevPage) {
      this.setState({ isLoading: true })
      this.getData()
    }
  }
  showModal = data => {
    this.setState({ modal: { visible: true, data } })
  }
  closeModal = () => {
    this.setState({ modal: { visible: false, data: {} } })
  }
  nextPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }))
  }
  prevPage = () => {
    this.setState(({ page }) => ({ page: page - 1 }))
  }
  render() {
    const {
      modal,
      page,
      isLoading,
      data: { results, count, next, previous }
    } = this.state

    return (
      <>
        {isLoading ? (
          "Loading"
        ) : (
          <Table>
            <thead>
              <tr>
                {showHeaders.map(({ label }) => <td key={label}>{label}</td>)}
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              {results.map((l, i) => (
                <tr key={i}>
                  {showHeaders.map(({ value }) => (
                    <td key={value}>{l[value]}</td>
                  ))}
                  <td>
                    <button onClick={this.showModal.bind(null, l)}>Show</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Pagination
          page={page}
          count={count}
          next={next}
          previous={previous}
          goNextPage={this.nextPage}
          goPrevPage={this.prevPage}
        />
        <Modal {...modal} closeModal={this.closeModal} />
      </>
    )
  }
}

export default List
