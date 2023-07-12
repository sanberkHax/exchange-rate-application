import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useCallback, useState } from 'react';
import { CustomHeader } from './CustomHeader';

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
        field="CurrencyId"
        title="Currency ID"
        width={130}
        headerCell={CustomHeader}
      />
      <Column
        field="NameEn"
        title="Currency Name"
        width={130}
        headerCell={CustomHeader}
      />
      <Column
        field="MidRate"
        title="Rate"
        filterable={false}
        width={80}
        filter="numeric"
        headerCell={CustomHeader}
      />
    </Grid>
  );
};
