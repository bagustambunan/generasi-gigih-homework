import React, { useState, useEffect } from 'react';
import Layout from './Home/Layout';

import { TrackProvider } from '../../contexts/TrackContext';
import { AuthProvider } from '../../contexts/AuthContext';

function SpotifyPage() {

  return (
    <AuthProvider>
      <TrackProvider>

        <Layout/>

      </TrackProvider>
    </AuthProvider>
  );
}

export default SpotifyPage;