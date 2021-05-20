-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 20, 2021 at 10:01 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kuliah_nastha`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_nilai`
--

CREATE TABLE `data_nilai` (
  `nim` int(11) NOT NULL,
  `id_mata_kuliah` int(11) NOT NULL,
  `id_dosen` int(11) NOT NULL,
  `nilai` int(11) NOT NULL,
  `keterangan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_nilai`
--

INSERT INTO `data_nilai` (`nim`, `id_mata_kuliah`, `id_dosen`, `nilai`, `keterangan`) VALUES
(20203, 9, 2, 90, 'good job'),
(20204, 9, 3, 99, 'lulus'),
(20201, 8, 3, 67, 'lulus'),
(20202, 5, 3, 78, 'lulus'),
(20202, 6, 3, 90, 'lulus'),
(20202, 8, 3, 65, 'lulus'),
(20202, 9, 3, 69, 'lulus'),
(20203, 5, 3, 69, 'lulus'),
(20203, 6, 3, 53, 'tidak lulus'),
(20203, 8, 3, 33, 'tidak lulus'),
(20204, 5, 3, 45, 'tidak lulus'),
(20204, 5, 3, 77, 'lulus'),
(20204, 6, 3, 77, 'lulus'),
(20204, 8, 3, 77, 'lulus'),
(20204, 8, 3, 77, 'lulus'),
(20201, 6, 1, 77, 'lulus'),
(20201, 6, 1, 77, 'lulus'),
(20201, 6, 1, 77, 'lulus'),
(20201, 6, 1, 77, 'lulus');

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`id`, `nama`) VALUES
(1, 'Setiawan Kusuma'),
(2, 'Anwar Burhan'),
(3, 'Joko Pambudi');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `jurusan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim`, `nama`, `alamat`, `tanggal_lahir`, `jurusan`) VALUES
(20201, 'Andra Kusuma', 'Kampung Baru', '1997-04-06', 'Teknik Kimia'),
(20202, 'Budi Setiawan', 'Purnama', '1995-05-12', 'Teknik Elektro'),
(20203, 'Rizqon Maulana', 'Seputaran', '1997-05-10', 'Teknik Mesin'),
(20204, 'Ridho Anwar', 'Hambalang', '2012-05-13', 'Teknik Elektro');

-- --------------------------------------------------------

--
-- Table structure for table `mata_kuliah`
--

CREATE TABLE `mata_kuliah` (
  `id` int(11) NOT NULL,
  `nama_mata_kuliah` varchar(255) NOT NULL,
  `nim` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mata_kuliah`
--

INSERT INTO `mata_kuliah` (`id`, `nama_mata_kuliah`, `nim`) VALUES
(5, 'Teknik Pengelasan', 20201),
(6, 'Mekanika Fluida', 20201),
(8, 'Matematika Teknik', 20202),
(9, 'Jaringan Komputer', 20204);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('mahasiswa','dosen') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'rizqonmaulana5@gmail.com', '$2b$10$2bCmvNXet5tT2UsG26KNAOaVnUSwMpI5OVUiocri5iM6Ws.Bsdqfe', 'dosen'),
(2, 'rizqonmaulan@gmail.com', '$2b$10$rjyzU7xd9QFXYLkMiyrS8eHeO8vHTvdNoFw3WH20fyi3r4DZw5TuS', 'mahasiswa'),
(3, 'rizqonmaula@gmail.com', '$2b$10$pSEVzlUrkw9.gVxJ6G56Ne4sUfjfYkBbkNEgrIf29U2H156TgVQV6', 'dosen'),
(4, 'rizqon@gmail.com', '$2b$10$jewJoKBvJ5l1zmhjZYgJ.uqYBIHLgv4F575m43Cxb24fgms5C6K5W', 'dosen'),
(5, 'maulana@gmail.com', '$2b$10$e07elycgfkgv7sd3v1gx2us8WqTVs6iTbdJZeMKTlv8tzEN38S3ci', 'dosen'),
(6, 'mlana@gmail.com', '$2b$10$H7X3LjVaCwcFWdZup1nm0eJ7t2.KOu6i0FOve7OV2Xs8hupdFb9Q.', 'dosen');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD KEY `nim` (`nim`),
  ADD KEY `id_mata_kuliah` (`id_mata_kuliah`),
  ADD KEY `id_dosen` (`id_dosen`);

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dosen`
--
ALTER TABLE `dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD CONSTRAINT `data_nilai_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `data_nilai_ibfk_2` FOREIGN KEY (`id_mata_kuliah`) REFERENCES `mata_kuliah` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `data_nilai_ibfk_3` FOREIGN KEY (`id_dosen`) REFERENCES `dosen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mata_kuliah`
--
ALTER TABLE `mata_kuliah`
  ADD CONSTRAINT `mata_kuliah_ibfk_1` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
