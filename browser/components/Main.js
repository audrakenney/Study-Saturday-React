import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/student')
    this.setState({students: data})
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {
              this.state.students.map(student => <tr key={student.id}><td>{student.fullName}</td></tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
