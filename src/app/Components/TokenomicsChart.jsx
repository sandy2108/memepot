import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TokenomicsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Liquidity', 'Team', 'Marketing'],
      datasets: [{
        label: 'My First Dataset',
        data: [85, 10, 5],
        backgroundColor: [
          '#379237', 
          '#FFFFFF', 
          '#F0FF42', 
        ],
        hoverOffset: 4,
      }],
    };
    const image = new Image();
    image.src = 'https://firebasestorage.googleapis.com/v0/b/wizard-4fa3a.appspot.com/o/me.png?alt=media&token=41482e3f-ad0c-4678-8ee1-8171641643ec';

    const plugin = {
      id: 'customCanvasBackgroundImage',
      beforeDraw: (chart) => {
        if (image.complete) {
          const ctx = chart.ctx;
          const {top, left, width, height} = chart.chartArea;
          const x = left + width / 2 - image.width / 2;
          const y = top + height / 2 - image.height / 2;
          ctx.drawImage(image, x, y);
        } else {
          image.onload = () => chart.draw();
        }
      }
    };


    const config = {
      type: 'doughnut',
      data: data,
      plugins: [plugin],
      options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    }
                }
            }
        }
      }
    };

    // Check if the chartRef already has a Chart instance, and destroy it if it does
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    chartRef.current = new Chart(ctx, config);

    // Clean up: Destroy the Chart instance before unmounting the component
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas id="myDoughnutChart" width="200" height="100" />
  );
};

export default TokenomicsChart;