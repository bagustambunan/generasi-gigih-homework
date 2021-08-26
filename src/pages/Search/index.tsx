import { useState } from 'react';
import SearchForm from './SearchForm';
import TrackDetail from '../Track/TrackDetail';

function SearchPage() {
  const [view, setView] = useState('searchform');

  return (
    <>
      {view === 'searchform' && <SearchForm setView={setView} />}
      {view === 'trackdetail' && <TrackDetail />}
    </>
  );
}

export default SearchPage;
