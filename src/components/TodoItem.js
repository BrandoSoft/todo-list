import React, { Component } from 'react';


export default class TodoItem extends Component {
    render() {
        return (
          <li className="list-group-item text-capitalize d-flex
          justify-content-betwen my-2">
              <h6>Title</h6>
                <div className="todo-icon">
                <span className="mx-2 text-success"></span>

                </div>
          </li>
        )
    }
}
