import React from "react";
import PropTypes from "prop-types";
import Material from "material-table";

class Table extends React.Component {
  constructor() {
    super(...arguments);
    this.tableRef = React.createRef();
  }

  /**
   * Copy to clipboard Function
   */
  copyToClipboard() {}

  render() {
    const { props, state } = this;
    const { columnsTable, dataTable, copyToClipboard, titleTable } = props;
    let actions = props.actionsTable;
    if (copyToClipboard)
      actions = [
        ...actions,
        {
          icon: "file_copy",
          tooltip: "Copy to Clipboard",
          isFreeAction: true,
          onClick: () => this.copyToClipboard()
        }
      ];
    return (
      <Material
        ref={this.tableRef}
        columns={columnsTable}
        data={dataTable}
        actions={actions}
        title={titleTable}
      />
    );
  }
}
//Default value
Table.defaultProps = {
  copyToClipboard: true
};
//Optional attributes
Table.propTypes = {
  //Title table
  titleTable: PropTypes.string.isRequired,
  //Columns table
  columnsTable: PropTypes.array.isRequired,
  //Data table
  dataTable: PropTypes.array,
  //Actions table
  actionsTable: PropTypes.array,
  //Button table
  copyToClipboard: PropTypes.bool
};
export default Table;
