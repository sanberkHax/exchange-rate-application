import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { useCallback, useState } from 'react';
import { EXCHANGE_RATES } from '@/constants/DummyResponse';

export const ExchangeRateDataGrid = () => {
  const [dataState, setDataState] = useState();
  const [resultState, setResultState] = useState(process(EXCHANGE_RATES, {}));

  const onDataStateChange = useCallback(e => {
    setDataState(e.dataState);
    setResultState(process(EXCHANGE_RATES, e.dataState));
  }, []);

  return (
    <Grid
      data={{ data: resultState.data }}
      filterable={true}
      onDataStateChange={onDataStateChange}
      {...dataState}
      sortable={true}
      total={EXCHANGE_RATES.length}
    >
      <Column
        field="currencyId"
        title="Currency ID"
        filterable={false}
        width="100px"
      />
      <Column field="nameEn" title="Currency Name" width="240px" />
      <Column
        field="midRate"
        title="Rate"
        filterable={false}
        width="180px"
        filter="numeric"
        format="{0:c}"
      />
    </Grid>
  );
};
