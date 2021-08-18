# WaveMusic App

## About
WaveMusic App is a Spotify clone application that uses the Spotify Developers API. This application was built during the Generasi GIGIH 2021 program held by Gojek's non-profit organization, Yayasan Anak Bangsa Bisa.

### Features
  - Login with Spotify account
  - User profile
  - Change theme
  - Search tracks
  - List user's playlists
  - Create new playlist
  - Playlist detail
  - List all tracks in a playlist
  - Track detail

### Stacks
  - Create-react-app, React, Typescript
  - Styling: CSS
  - State management: Redux
  - Testing: Jest, Testing-Library, MSW
  - Linter: ESLint
  - Deployment: Vercel

### Production
>https://wavemusic.vercel.app/

<br>

## How to use this repo
1. Clone the repo
```
git clone https://github.com/bagustambunan/generasi-gigih-homework.git
```
2. Open the dir on your terminal
```
cd generasi-gigih-homework
```
3. Fetch dependencies
```
yarn
```
4. Set up Spotify Developers API:
>https://bagustambunan.medium.com/project-menggunakan-spotify-api-di-react-js-19dbc5765a05
5. Start server:
```
yarn start
```

<br>

## Testing
Run test
```
yarn test
```

<br>

## How to use this app
WaveMusic App bisa berjalan di desktop maupun mobile browser. Aplikasi akan menyesuaikan ukuran layar yang digunakan. Untuk menggunakan WaveMusic App, Anda harus memiliki akun Spotify.
<br>
Anda bisa mengakses WaveMusic App di link https://wavemusic.vercel.app/

### Masuk ke aplikasi
1. Klik "LOG IN WITH SPOTIFY"
<br>
<img src="shots/shot-1a.png" width="180px">

2. Halaman autentikasi akan tampil. Silahkan baca halaman tersebut, kemudian klik "AGREE"
<br>
<img src="shots/shot-1b.png" width="180px">

3. Setelah autentikasi sukses, akan tampil halaman utama WaveMusic App. Anda bisa melihat profil Anda di halaman tersebut.
<br>
<img src="shots/shot-1c.png" width="180px">

### Mencari lagu
1. Klik menu pencarian (icon kaca pembesar) di menu bawah.
2. Ketik kata pencarian di kotak pencarian (contoh: "System"), kemudian tekan Enter di keyboard dan hasil pencarian akan ditampilkan.
<br>
<img src="shots/shot-2a.png" width="180px">

### Menampikan list playlist Anda
1. Klik menu playlist (icon headphone) di menu bawah.
2. Halaman akan menampilkan semua playlist Anda di Spotify.
<br>
<img src="shots/shot-3a.png" width="180px">

### Membuat playlist baru
1. Di halaman playlist, klik tombol + (berada di pojok kanan bawah)
<br>
<img src="shots/shot-4a.png" width="180px">
2. Halaman untuk membuat playlist baru akan tampil. Isi judul (minimal 10 karakter) dan deskripsi (minimal 20 karakter). Kemudian klik "CREATE"
<br>
<table>
  <tr>
    <td>
      <img src="shots/shot-4b.png" width="180px">
    </td>
    <td>
      <img src="shots/shot-4c.png" width="180px">
    </td>
  </tr>
</table>

3. Buka halaman playlist, dan akan tampil playlist yang baru dibuat
<br>
<img src="shots/shot-4d.png" width="180px">
4. Klik playlist tersebut, dan terlihat isinya masih kosong. Kita akan menambahkan beberapa lagu di langkah berikutnya
<br>
<img src="shots/shot-4e.png" width="180px">

### Menambahkan beberapa lagu ke suatu playlist
1. Cari lagu yang kamu inginkan di halaman pencarian
<br>
<img src="shots/shot-5a.png" width="180px">
2. Klik "Select tracks" dan 
<br>
<img src="shots/shot-5b.png" width="180px">
3. Klik lagu-lagu yang ingin Anda pilih
<br>
<img src="shots/shot-5c.png" width="180px">
4. Klik "Add to playlist" kemudian pilih playlist. Klik "Add" untuk menambahkan lagu-lagu yang telah Anda pilih ke dalam playlist
<br>
<table>
  <tr>
    <td>
      <img src="shots/shot-5d.png" width="180px">
    </td>
    <td>
      <img src="shots/shot-5e.png" width="180px">
    </td>
  </tr>
</table>
5. Buka halaman playlist dan lihat bahwa lagu-lagu berhasil ditambahkan ke dalam playlist
<br>
<table>
  <tr>
    <td>
      <img src="shots/shot-5f.png" width="180px">
    </td>
    <td>
      <img src="shots/shot-5g.png" width="180px">
    </td>
  </tr>
</table>

### Menampilkan detail lagu
The

### Menambahkan suatu lagu ke suatu playlist
The

### Mengganti tema
The

