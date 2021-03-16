import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

// import { api } from './services/api';

import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface propsState {
  value : string, 
  setValue : string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar value={selectedGenreId} setValue={setSelectedGenreId}/>
      <Content value={selectedGenreId} setValue={setSelectedGenreId}/>
    </div>
  )
}