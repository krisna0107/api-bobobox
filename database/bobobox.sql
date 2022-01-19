-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2022 pada 16.37
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bobobox`
--
CREATE DATABASE IF NOT EXISTS `bobobox` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bobobox`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_promo`
--

CREATE TABLE `history_promo` (
  `id` int(11) NOT NULL,
  `promo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `history_promo`
--

INSERT INTO `history_promo` (`id`, `promo_id`, `user_id`, `date`) VALUES
(45, 1, 4, '2022-01-17'),
(50, 1, 3, '2022-01-18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hotel`
--

CREATE TABLE `hotel` (
  `id` int(11) NOT NULL,
  `hotel_name` varchar(50) NOT NULL,
  `address` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hotel`
--

INSERT INTO `hotel` (`id`, `hotel_name`, `address`) VALUES
(1, 'Bobobox Bekasi', 'Bekasi, Jawa Barat');

-- --------------------------------------------------------

--
-- Struktur dari tabel `price`
--

CREATE TABLE `price` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `room_type_id` int(11) NOT NULL,
  `price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `price`
--

INSERT INTO `price` (`id`, `date`, `room_type_id`, `price`) VALUES
(1, '2022-01-16', 1, 200000),
(2, '2022-01-16', 2, 150000),
(3, '2022-01-16', 3, 100000),
(4, '2022-01-17', 1, 250000),
(5, '2022-01-17', 2, 150000),
(6, '2022-01-17', 3, 100000),
(7, '2022-01-18', 1, 250000),
(8, '2022-01-18', 2, 150000),
(9, '2022-01-18', 3, 100000),
(10, '2022-01-19', 1, 250000),
(11, '2022-01-19', 2, 150000),
(12, '2022-01-19', 3, 100000),
(13, '2022-01-20', 1, 250000),
(14, '2022-01-20', 2, 150000),
(15, '2022-01-20', 3, 100000),
(16, '2022-01-21', 1, 250000),
(17, '2022-01-21', 2, 150000),
(18, '2022-01-21', 3, 100000),
(19, '2022-01-22', 1, 250000),
(20, '2022-01-22', 2, 150000),
(21, '2022-01-22', 3, 100000),
(22, '2022-01-23', 1, 250000),
(23, '2022-01-23', 2, 150000),
(24, '2022-01-23', 3, 100000),
(25, '2022-01-24', 1, 250000),
(26, '2022-01-24', 2, 150000),
(27, '2022-01-24', 3, 100000),
(28, '2022-01-25', 1, 250000),
(29, '2022-01-25', 2, 150000),
(30, '2022-01-25', 3, 100000),
(31, '2022-01-26', 1, 250000),
(32, '2022-01-26', 2, 150000),
(33, '2022-01-26', 3, 100000),
(34, '2022-01-27', 1, 250000),
(35, '2022-01-27', 2, 150000),
(36, '2022-01-27', 3, 100000),
(37, '2022-01-28', 1, 250000),
(38, '2022-01-28', 2, 150000),
(39, '2022-01-28', 3, 100000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo`
--

CREATE TABLE `promo` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` longtext NOT NULL,
  `voucher` varchar(50) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `limit_day` int(11) DEFAULT NULL,
  `quota` int(11) NOT NULL,
  `room_type_id` int(11) DEFAULT NULL,
  `type` enum('percentage','currency') NOT NULL,
  `reward` int(11) NOT NULL,
  `minimum_room` int(11) DEFAULT NULL,
  `minimum_night` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promo`
--

INSERT INTO `promo` (`id`, `title`, `description`, `voucher`, `date_start`, `date_end`, `limit_day`, `quota`, `room_type_id`, `type`, `reward`, `minimum_room`, `minimum_night`) VALUES
(1, 'Januari Staycation', 'Discount 20%', 'JANSTAY', '2022-01-18 16:17:17', '2022-01-21 22:17:18', 10, 20, 1, 'percentage', 20, 1, NULL),
(2, 'Januari Staycation 15K', 'Potongan 15K', 'JANSTAY15K', '2022-01-18 16:17:17', '2022-01-21 22:17:18', 10, 20, 1, 'currency', 15000, 1, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `customer_name` varchar(50) NOT NULL,
  `booked_room_count` int(11) NOT NULL,
  `checkin_date` date NOT NULL,
  `checkout_date` date NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `promo_id` int(11) DEFAULT NULL,
  `status` enum('pending','success') NOT NULL DEFAULT 'pending',
  `room_type_id` int(11) DEFAULT NULL,
  `total_price` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `reservation`
--

INSERT INTO `reservation` (`id`, `order_id`, `user_id`, `customer_name`, `booked_room_count`, `checkin_date`, `checkout_date`, `hotel_id`, `promo_id`, `status`, `room_type_id`, `total_price`) VALUES
(1, 1, 1, 'Yohanes Krisna', 1, '2022-01-18', '2022-01-19', 1, 1, 'pending', 1, 200000),
(6, 2, 2, 'Yohanes Krisna', 1, '2022-01-18', '2022-01-19', 1, 1, 'pending', 1, 200000),
(7, 3, 3, 'Yohanes Krisna', 1, '2022-01-18', '2022-01-19', 1, 1, 'pending', 1, 200000),
(8, 4, 4, 'Yohanes Krisna', 1, '2022-01-18', '2022-01-19', 1, 1, 'pending', 1, 200000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `room_type_id` int(11) NOT NULL,
  `room_number` char(3) NOT NULL,
  `room_status` enum('available','out of service') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`id`, `hotel_id`, `room_type_id`, `room_number`, `room_status`) VALUES
(1, 1, 1, '301', 'available'),
(2, 1, 2, '201', 'available'),
(3, 1, 3, '101', 'available'),
(4, 1, 2, '202', 'available'),
(5, 1, 2, '203', 'available'),
(6, 1, 2, '204', 'available'),
(7, 1, 2, '205', 'available'),
(8, 1, 3, '102', 'available'),
(9, 1, 3, '103', 'available'),
(10, 1, 3, '104', 'available'),
(11, 1, 3, '105', 'available'),
(12, 1, 1, '302', 'available'),
(13, 1, 1, '303', 'available'),
(14, 1, 1, '304', 'available'),
(15, 1, 1, '305', 'available');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room_type`
--

CREATE TABLE `room_type` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `room_type`
--

INSERT INTO `room_type` (`id`, `name`) VALUES
(1, 'Luxury'),
(2, 'Deluxe'),
(3, 'Standard');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stay`
--

CREATE TABLE `stay` (
  `id` int(11) NOT NULL,
  `reservation_id` int(11) NOT NULL,
  `guest_name` varchar(50) NOT NULL,
  `room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `stay_room`
--

CREATE TABLE `stay_room` (
  `id` int(11) NOT NULL,
  `stay_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `history_promo`
--
ALTER TABLE `history_promo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `promo_id` (`promo_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- Indeks untuk tabel `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `voucher` (`voucher`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- Indeks untuk tabel `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `promo_id` (`promo_id`),
  ADD KEY `room_type_id` (`room_type_id`);

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_type_id` (`room_type_id`),
  ADD KEY `hotel_id` (`hotel_id`);

--
-- Indeks untuk tabel `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `stay`
--
ALTER TABLE `stay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservation_id` (`reservation_id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indeks untuk tabel `stay_room`
--
ALTER TABLE `stay_room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stay_id` (`stay_id`),
  ADD KEY `room_id` (`room_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `history_promo`
--
ALTER TABLE `history_promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `hotel`
--
ALTER TABLE `hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `price`
--
ALTER TABLE `price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT untuk tabel `promo`
--
ALTER TABLE `promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `room_type`
--
ALTER TABLE `room_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `stay`
--
ALTER TABLE `stay`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `stay_room`
--
ALTER TABLE `stay_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `price`
--
ALTER TABLE `price`
  ADD CONSTRAINT `price_ibfk_1` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`id`);

--
-- Ketidakleluasaan untuk tabel `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`);

--
-- Ketidakleluasaan untuk tabel `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`),
  ADD CONSTRAINT `room_ibfk_2` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`id`),
  ADD CONSTRAINT `room_ibfk_3` FOREIGN KEY (`room_type_id`) REFERENCES `room_type` (`id`);

--
-- Ketidakleluasaan untuk tabel `stay`
--
ALTER TABLE `stay`
  ADD CONSTRAINT `stay_ibfk_1` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`id`),
  ADD CONSTRAINT `stay_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);

--
-- Ketidakleluasaan untuk tabel `stay_room`
--
ALTER TABLE `stay_room`
  ADD CONSTRAINT `stay_room_ibfk_1` FOREIGN KEY (`stay_id`) REFERENCES `stay` (`id`),
  ADD CONSTRAINT `stay_room_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
