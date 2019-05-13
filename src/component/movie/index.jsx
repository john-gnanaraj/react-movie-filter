import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function Movie(props) {
  return (
    <BootstrapTable keyField='id'
      data={ props.data }
      columns={ props.columns }
      filter={ filterFactory() }
      pagination={ paginationFactory(props.paginationOption) }
    />
  )
}
