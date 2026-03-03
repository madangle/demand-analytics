import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';

const summaryCards = [
  { label: 'Revenue', value: '$412,900', delta: '+7.8%' },
  { label: 'Orders', value: '8,421', delta: '+5.2%' },
  { label: 'Forecast Accuracy', value: '93.4%', delta: '+1.1%' },
  { label: 'Stockout Risk', value: '12 SKUs', delta: '-3.4%' },
];

const demandByRegion = [
  { region: 'North America', demand: 88 },
  { region: 'Europe', demand: 72 },
  { region: 'APAC', demand: 94 },
  { region: 'LATAM', demand: 61 },
];

const card = (label, value, delta) =>
  React.createElement(
    'article',
    { key: label, className: 'metric-card' },
    React.createElement('p', { className: 'metric-label' }, label),
    React.createElement('p', { className: 'metric-value' }, value),
    React.createElement('p', { className: 'metric-delta' }, `${delta} vs last month`),
  );

const App = () =>
  React.createElement(
    'main',
    { className: 'dashboard' },
    React.createElement(
      'header',
      { className: 'dashboard__header' },
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'eyebrow' }, 'Demand Analytics'),
        React.createElement('h1', null, 'Operations Dashboard'),
        React.createElement(
          'p',
          { className: 'subtitle' },
          'React-based dashboard for demand trends, performance, and regional planning.',
        ),
      ),
      React.createElement('button', { type: 'button', className: 'primary-btn' }, 'Export Report'),
    ),
    React.createElement(
      'section',
      { className: 'summary-grid', 'aria-label': 'Summary metrics' },
      summaryCards.map((entry) => card(entry.label, entry.value, entry.delta)),
    ),
    React.createElement(
      'section',
      { className: 'content-grid' },
      React.createElement(
        'article',
        { className: 'panel' },
        React.createElement('h2', null, 'Weekly Demand Trend'),
        React.createElement(
          'div',
          { className: 'mock-chart', role: 'img', 'aria-label': 'Line chart placeholder' },
          [52, 64, 58, 72, 67, 81, 74].map((height, i) =>
            React.createElement('span', { key: i, style: { height: `${height}%` } }),
          ),
        ),
      ),
      React.createElement(
        'article',
        { className: 'panel' },
        React.createElement('h2', null, 'Regional Demand Index'),
        React.createElement(
          'ul',
          { className: 'region-list' },
          demandByRegion.map((entry) =>
            React.createElement(
              'li',
              { key: entry.region },
              React.createElement(
                'div',
                null,
                React.createElement('p', null, entry.region),
                React.createElement('small', null, `${entry.demand}/100 index`),
              ),
              React.createElement('progress', { max: 100, value: entry.demand }),
            ),
          ),
        ),
      ),
    ),
  );

createRoot(document.getElementById('root')).render(React.createElement(App));
