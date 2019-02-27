import React, { Component } from "react";
import {
  List,
  ListItem,
  Button,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import ShoppingItem from "./ShoppingItem";

class App extends Component {
  state = {
    items: [
      {
        name: "Eggs",
        count: 12
      },
      {
        name: "Bread",
        count: 1
      },
      {
        name: "Milk",
        count: 2
      }
    ]
  };

  handleEdit = index => event => {
    let newValue = event.target.value;
    this.setState(prevState => {
      prevState.items[index].name = newValue;
      return { items: prevState.items };
    });
  };
  handleIncrement = index => () => {
    this.setState(prevState => {
      prevState.items[index].count++;
      return { items: prevState.items };
    });
  };
  handleDecrement = index => () => {
    this.setState(prevState => {
      prevState.items[index].count--;
      if (prevState.items[index].count < 0) prevState.items[index].count = 0;
      return { items: prevState.items };
    });
  };
  handleDelete = index => () => {
    this.setState(prevState => {
      prevState.items.splice(index, 1);
      return { items: prevState.items };
    });
  };
  handleAdd = () => {
    this.setState(prevState => {
      return { items: [...prevState.items, { name: "", count: 0 }] };
    });
  };

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", marginTop: 20 }}
      >
        <Grid item>
          <Paper
            className="App"
            style={{ width: 700, justifyContent: "center" }}
          >
            <List>
              <ListItem>
                <Typography variant="h4">Shopping List</Typography>
              </ListItem>
              {this.state.items.map((item, index) => (
                <ShoppingItem
                  key={index}
                  index={index}
                  item={item}
                  handleDelete={this.handleDelete}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  handleEdit={this.handleEdit}
                />
              ))}
              <ListItem>
                <Button
                  onClick={this.handleAdd}
                  variant="contained"
                  color="primary"
                >
                  Add item
                </Button>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
