import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useCallback, useState } from 'react';

export const ExchangeRateDataGrid = ({ exchangeRates }) => {
  const [dataState, setDataState] = useState();
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
      total={exchangeRates?.length}
    >
      <Column field="currencyId" title="Currency ID" width={130} />
      <Column field="nameEn" title="Currency Name" width={130} />
      <Column
        field="midRate"
        title="Rate"
        filterable={false}
        width={80}
        filter="numeric"
        format="{0:c}"
      />
    </Grid>
  );
};
