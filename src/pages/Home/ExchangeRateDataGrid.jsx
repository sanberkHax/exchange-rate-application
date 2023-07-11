import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useCallback, useState } from 'react';

export const ExchangeRateDataGrid = ({ exchangeRates }) => {
  const [dataState, setDataState] = useState({});
  const [resultState, setResultState] = useState(process(exchangeRates, {}));

  const onDataStateChange = useCallback(
    e => {
      setDataState(e.dataState);
      setResultState(process(exchangeRates, e.dataState));
    },
    [exchangeRates],
  );

  const customHeader = props => {
    return (
      <a className="k-link" onClick={props.onClick}>
        <b>{props.title}</b>
        {props.children}
      </a>
    );
  };
  return (
    <Grid
      data={{ data: resultState.data }}
      filterable={true}
      onDataStateChange={onDataStateChange}
      {...dataState}
      sortable={true}
      scrollable="none"
      total={3}
    >
      <Column
        field="currencyId"
        title="Currency ID"
        width={130}
        headerCell={customHeader}
      />
      <Column
        field="nameEn"
        title="Currency Name"
        width={130}
        headerCell={customHeader}
      />
      <Column
        field="midRate"
        title="Rate"
        filterable={false}
        width={80}
        filter="numeric"
        headerCell={customHeader}
      />
    </Grid>
  );
};
