import React, { Component } from "react";
import {
  ListItem,
  Typography,
  IconButton,
  Fab,
  Grid,
  TextField
} from "@material-ui/core";
import { Add, Remove, Delete } from "@material-ui/icons";

class ShoppingItem extends Component {
  render() {
    return (
      <ListItem>
        <Grid container spacing={8} direction="row">
          <Grid item xs={1} />
          <Grid item xs={4}>
            <TextField
              value={this.props.item.name}
              onChange={this.props.handleEdit(this.props.index)}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size="small"
              color="secondary"
              onClick={this.props.handleDecrement(this.props.index)}
            >
              <Remove />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h6" style={{ padding: 8 }}>
              {this.props.item.count}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size="small"
              color="primary"
              onClick={this.props.handleIncrement(this.props.index)}
            >
              <Add />
            </IconButton>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={1}>
            <Fab
              size="small"
              color="secondary"
              onClick={this.props.handleDelete(this.props.index)}
            >
              <Delete />
            </Fab>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
}

export default ShoppingItem;
