import * as React from "react"
import styled from "styled-components"
import axios from "axios"

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .mask {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .content {
    position: absolute;
    width: 500px;
    height: 300px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    overflow-y: scroll;
    .modal-title {
      font-size: 18px;
      color: #333;
      margin: 0;
      padding: 10px;
      border-bottom: 1px #ddd solid;
    }
    .modal-body {
      padding: 10px;
      .field {
        margin-bottom: 8px;
        display: flex;
        .label {
          margin-right: 10px;
        }
      }
    }
  }
`

const showDetailOptions = [
  { label: "Gender", value: "gender" },
  { label: "Height", value: "height", postfix: "cm" },
  { label: "Mass", value: "mass", postfix: "kg" },
  { label: "Birth Year", value: "birth_year" },
  { label: "Hair Color", value: "hair_color" },
  { label: "Eye Color", value: "eye_color" },
  { label: "Skin Color", value: "skin_color" },
  { label: "Films", value: "films" },
  { label: "Home World", value: "homeworld" },
  { label: "Species", value: "species" },
  { label: "Star Ships", value: "starships" },
  { label: "Vehicles", value: "vehicles" }
]

const requestOptions = [
  "films",
  "homeworld",
  "species",
  "starships",
  "vehicles"
]

export default class extends React.PureComponent<{
  visible: boolean
  data: any
  closeModal: () => void
}> {
  readonly state = {
    data: {}
  }
  getData = async () => {
    const { data } = this.props
    let PromiseArray = []
    requestOptions.forEach(r => {
      const option = data[r]
      if (Array.isArray(option)) {
        PromiseArray = PromiseArray.concat(
          Promise.all(
            option.map(
              o =>
                new Promise((resolve, reject) => {
                  try {
                    axios.get(o).then(res => {
                      resolve(res.data)
                    })
                  } catch (err) {
                    reject(err)
                  }
                })
            )
          )
        )
      } else {
        PromiseArray = PromiseArray.concat(
          new Promise((resolve, reject) => {
            try {
              axios.get(option).then(res => {
                resolve(res.data)
              })
            } catch (err) {
              reject(err)
            }
          })
        )
      }
    })
    const [films, homeworld, species, starships, vehicles] = await Promise.all(
      PromiseArray
    )
    this.setState({
      data: Object.assign({}, data, {
        films: films.map(({ title }) => title).join(", "),
        homeworld: homeworld.name,
        species: species.map(({ name }) => name).join(", "),
        starships: starships.map(({ name }) => name).join(", "),
        vehicles: vehicles.map(({ name }) => name).join(", ")
      })
    })
  }
  componentDidUpdate({ visible: prevVisible }) {
    const { visible } = this.props
    if (visible !== prevVisible) {
      if (visible) {
        this.getData()
      } else {
        this.setState({ data: {} })
      }
    }
  }
  render() {
    const { data } = this.state
    const { visible, closeModal } = this.props
    return (
      <Modal style={{ display: visible ? "block" : "none" }}>
        <div className="mask" onClick={closeModal} />
        <div className="content">
          <h2 className="modal-title">{data.name}</h2>
          <div className="modal-body">
            {showDetailOptions.map(({ label, value, postfix }) => (
              <div className="field" key={value}>
                <div className="label">{label}:</div>
                <div className="details">
                  {data[value]}
                  {postfix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    )
  }
}
