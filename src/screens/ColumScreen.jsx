import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class ColumScreen extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://clinic.adachikeiyu.com/column' }} style={{ marginTop: 20 }} />;
  }
}