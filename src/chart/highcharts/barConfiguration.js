import cloneDeep from 'lodash/cloneDeep';

import { MAX_POINT_WIDTH } from './commonConfiguration';

const BAR_TEMPLATE = {
    chart: {
        type: 'bar'
    },
    plotOptions: {
        bar: {
            maxPointWidth: MAX_POINT_WIDTH,
            dataLabels: {
                enabled: true,
                padding: 2
            }
        },
        series: {
            states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    yAxis: {
        stackLabels: {
            enabled: false
        }
    }
};

export function getBarConfiguration() {
    return cloneDeep(BAR_TEMPLATE);
}
