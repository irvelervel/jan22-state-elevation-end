import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import { Component } from "react";

// in order to share a common state between multiple components
// you need to ELEVATE that state to their nearest common ancestor

class App extends Component {
  state = {
    selected: undefined,
  };

  changeSelected = (newSelected) => {
    this.setState({
      selected: newSelected,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  changeSelected={this.changeSelected}
                  selected={this.state.selected}
                />
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
