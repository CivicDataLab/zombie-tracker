import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
	  constructor(props) {
		      super(props);
		      this.state = {
			            data: [],
			            loaded: false,
			            placeholder: "Loading"
			          };
		    }

	  componentDidMount() {
		      fetch("../main/data_66a_cases")
		        .then(response => {
				        if (response.status > 400) {
						          return this.setState(() => {
								              return { placeholder: "Something went wrong!" };
								            });
						        }
				        return response.json();
				      })
		        .then(data => {
				        this.setState(() => {
						          return {
								              data,
								              loaded: true
								            };
						        });
				      });
		    }

	  render() {
		      return (
			            <ul>
			              {this.state.data.map(cases => {
					                return (
								            <li key={cases.cino}>
								              {cases.state_name} - {cases.district_name}
								            </li>
								          );
					              })}
			            </ul>
			          );
		    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
