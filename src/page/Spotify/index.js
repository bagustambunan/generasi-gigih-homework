import React, { useState, useEffect } from 'react';
import Layout from './Home/Layout';

import { TrackProvider } from '../../contexts/TrackContext';
import { AuthProvider } from '../../contexts/AuthContext';
import { UserProvider } from '../../contexts/UserContext';

function SpotifyPage() {

  return (
    <AuthProvider>
      <TrackProvider>
        <UserProvider>
          <Layout/>
        </UserProvider>
      </TrackProvider>
    </AuthProvider>
  );
}

export default SpotifyPage;