import '@/styles/globals.css';
import Header from '@/components/Header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bookmarks from '@/reducers/bookmarks';

const store = configureStore({
  reducer: { bookmarks },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
