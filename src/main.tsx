import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from '@pages/Landing/Landing';
import config from '@config';
import UseNotificationHandler from '@sp-components/notification-handler/UseNotificationHandler';
import axios from 'axios';

import { Provider } from 'react-redux';
import { store } from '@store';
import { ConfigProvider } from 'antd';
import { App } from 'antd';

axios.defaults.baseURL = config.apiUrl;
document.title = config.name;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: config.colors.primary,
          colorInfo: config.colors.primary,
          colorSuccess: config.colors.confirm,
          colorError: config.colors.error,
          colorTextBase: config.colors.text,
          colorBgBase: config.colors.background,
          colorBorder: config.colors.primary,
        },

        components: {
          Notification: {
            colorBgElevated: config.colors.secondary,
          },
          Anchor: {
            colorText: config.colors.text,
          },
          Select: {
            lineWidth: 2,
          },
        },
      }}
    >
      <App>
        <Provider store={store}>
          <UseNotificationHandler>
            <Landing></Landing>
          </UseNotificationHandler>
        </Provider>
      </App>
    </ConfigProvider>
  </React.StrictMode>
);
