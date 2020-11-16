import React from "react";
import CasesComponent from "./CasesComponent";
import OpenedCase from "./OpenedCase";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [
        {
          caseId: "123",
          referenceId: "347876765454543",
          FirstName: "John",
          LastName: "Peter"
        },
        {
          caseId: "444",
          referenceId: "377876765454544",
          FirstName: "Sohil",
          LastName: "Sharma"
        },
        {
          caseId: "555",
          referenceId: "347876765987654",
          FirstName: "Daniel",
          LastName: "Thomas"
        },
        {
          caseId: "666",
          referenceId: "346567890684968",
          FirstName: "Veera",
          LastName: "Sehgal"
        }
      ],
      displayCases: false,
      items: ""
    };
  }

  handleChange = () => {
    this.setState({
      displayCases: !this.state.displayCases
    });
  };
  handleClick = (row) => {
    if (row.caseId !== this.state.items.caseId) {
      this.setState({
        items: row
      });
    }
  };

  render() {
    const { displayCases, items } = this.state;
    console.log(items);
    const casecomponent = displayCases ? (
      <CasesComponent cases={this.state.cases} handleClick={this.handleClick} />
    ) : null;

    return (
      <div>
        <label>Show Open case</label>
        <input
          type="checkbox"
          checked={this.state.displayCases}
          onChange={this.handleChange}
        />
        {casecomponent}
        {displayCases && <OpenedCase items={items} />}
      </div>
    );
  }
}

export default MainComponent;
