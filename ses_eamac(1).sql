-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 26 sep. 2024 à 18:20
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ses_eamac`
--

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE `classe` (
  `id_classe` varchar(50) NOT NULL,
  `num_classe` varchar(255) DEFAULT NULL,
  `annee` varchar(255) DEFAULT NULL,
  `id_promotion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`id_classe`, `num_classe`, `annee`, `id_promotion`) VALUES
('1eigfhrt', '1', '2024', 'iei24'),
('ina24iyigt', '1', '2024', 'ina24');

-- --------------------------------------------------------

--
-- Structure de la table `classe_stage`
--

CREATE TABLE `classe_stage` (
  `id_classe` varchar(50) NOT NULL,
  `nom_classe` varchar(255) NOT NULL,
  `anne` varchar(255) NOT NULL,
  `id_stage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `classe_stage`
--

INSERT INTO `classe_stage` (`id_classe`, `nom_classe`, `anne`, `id_stage`) VALUES
('ils1!kdsfjksrjn', 'ILS 1', '2024', 'ilsnjedejndjn');

-- --------------------------------------------------------

--
-- Structure de la table `contractuel`
--

CREATE TABLE `contractuel` (
  `id_contractuel` varchar(50) NOT NULL,
  `id_enseignant` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id_classe` varchar(50) NOT NULL,
  `id_matiere` varchar(50) NOT NULL,
  `id_enseignant` varchar(50) NOT NULL,
  `date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`id_classe`, `id_matiere`, `id_enseignant`, `date`) VALUES
('1eigfhrt', 'emishrecedre', 'bonhdscqssuhssh', '2024-09-19'),
('1eigfhrt', 'mathjdchdhv', 'aboubahjzdhvzehdvzhv', '2024-09-19');

-- --------------------------------------------------------

--
-- Structure de la table `division`
--

CREATE TABLE `division` (
  `id_division` varchar(50) NOT NULL,
  `nom_division` varchar(255) DEFAULT NULL,
  `id_chef_division` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `division`
--

INSERT INTO `division` (`id_division`, `nom_division`, `id_chef_division`) VALUES
('eihfghgdyhygb', 'EI', 'klafsefsdf'),
('gaktythgfhf', 'NA', 'gakfqsdqdsds'),
('mtofghdgw', 'MTO', 'djakfgsds');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

CREATE TABLE `eleve` (
  `id_eleve` varchar(50) NOT NULL,
  `id_classe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`id_eleve`, `id_classe`) VALUES
('balrtgzz', '1eigfhrt'),
('ganrtgzz', '1eigfhrt'),
('sabfgre', '1eigfhrt'),
('thiallskss', 'ina24iyigt'),
('tourqhshs', 'ina24iyigt');

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
--

CREATE TABLE `enseignant` (
  `id_enseignant` varchar(50) NOT NULL,
  `mdp` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `enseignant`
--

INSERT INTO `enseignant` (`id_enseignant`, `mdp`) VALUES
('aboubahjzdhvzehdvzhv', 'uyhytehthtdr'),
('arzhdscqssuhssh', 'cdcdxqcdsqddd'),
('bilghdscqssuhssh', 'cdcdxqcdsqddd'),
('bonhdscqssuhssh', 'cdcdxqcdsqddd'),
('djakghdscqssuhssh', 'cdcdxqcdsqddd'),
('gakghdscqssuhssh', 'cdcdxqcdsqddd'),
('klaghdscqssuhssh', 'cdcdxqcdsqddd'),
('marscqssuhssh', 'cdcdxqcdsqddd'),
('rabscqssuhssh', 'cdcdxqcdsqddd');

-- --------------------------------------------------------

--
-- Structure de la table `instructeur`
--

CREATE TABLE `instructeur` (
  `id_instructeur` varchar(50) NOT NULL,
  `id_enseignant` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `instructeur`
--

INSERT INTO `instructeur` (`id_instructeur`, `id_enseignant`) VALUES
('bondfrefeferezfe', 'bonhdscqssuhssh'),
('djakfgsds', 'djakghdscqssuhssh'),
('gakfqsdqdsds', 'gakghdscqssuhssh'),
('klafsefsdf', 'klaghdscqssuhssh'),
('rabsfdqssqc', 'rabscqssuhssh');

-- --------------------------------------------------------

--
-- Structure de la table `matieres`
--

CREATE TABLE `matieres` (
  `id_matiere` varchar(50) NOT NULL,
  `nom_matiere` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `matieres`
--

INSERT INTO `matieres` (`id_matiere`, `nom_matiere`) VALUES
('autdhvvh', 'Automate Figé'),
('emishrecedre', 'Emission/Reception'),
('mathjdchdhv', 'Mathematiques'),
('physdhzedhzehvdv', 'Phyiques');

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `id_promotion` varchar(50) NOT NULL,
  `nom_promo` varchar(255) DEFAULT NULL,
  `actif` int(11) DEFAULT NULL,
  `id_chef_promo` varchar(50) NOT NULL,
  `id_division` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id_promotion`, `nom_promo`, `actif`, `id_chef_promo`, `id_division`) VALUES
('iei24', 'IEAMAC/EI 24', 1, 'bondfrefeferezfe', 'eihfghgdyhygb'),
('ina24', 'IEAMAC/NA 24', 1, 'gakfqsdqdsds', 'gaktythgfhf');

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

CREATE TABLE `stage` (
  `id_stage` varchar(50) NOT NULL,
  `nom_stage` varchar(255) NOT NULL,
  `actif` varchar(11) NOT NULL,
  `id_chef_stage` varchar(50) NOT NULL,
  `id_division` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `stage`
--

INSERT INTO `stage` (`id_stage`, `nom_stage`, `actif`, `id_chef_stage`, `id_division`) VALUES
('ilsnjedejndjn', 'Instrument Landing System', '1', 'rabscqssuhssh', 'eihfghgdyhygb');

-- --------------------------------------------------------

--
-- Structure de la table `stagiaire`
--

CREATE TABLE `stagiaire` (
  `id_stagiaire` varchar(50) NOT NULL,
  `id_classe` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `stagiaire`
--

INSERT INTO `stagiaire` (`id_stagiaire`, `id_classe`) VALUES
('ibdiahejjkqsxkjbbj', 'ils1!kdsfjksrjn'),
('kassan', 'ils1!kdsfjksrjn');

-- --------------------------------------------------------

--
-- Structure de la table `unite_enseignement`
--

CREATE TABLE `unite_enseignement` (
  `id_unite` varchar(50) NOT NULL,
  `nom_unite` varchar(255) DEFAULT NULL,
  `id_division` varchar(50) NOT NULL,
  `id_instructeur` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_utilisateur` varchar(50) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `nom`, `prenom`, `telephone`, `email`, `role`, `mdp`) VALUES
('aboubahjzdhvzehdvzhv', 'MOUSSA', 'Aboubacar', '82083814', 'awballo22@gmail.com', '', 'uyhytehthtdr'),
('arzhdscqssuhssh', 'Arzika', 'ANSOUMANE', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('balrtgzz', 'BALLO', 'Abdoul Wahab', '82083814', 'awballo22@gmail.com', '', 'baldffdfdvdfvfdbfggb'),
('bilghdscqssuhssh', 'Ousmane', 'BILLO', '64600036', 'awballo22@gmail.com', '', 'bilcdcdxqcdsqddd'),
('bonhdscqssuhssh', 'Esai', 'BONOG', 'awballo22@gmail.com', 'awballo22@gmail.com', '', 'boncdcdxqcdsqddd'),
('djakghdscqssuhssh', 'Djakaridja', 'COULIBALY', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('gakghdscqssuhssh', 'Abdel Kader', 'GAKOU', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('ganrtgzz', 'GANAME', 'Aly', '82083814', 'awballo22@gmail.com', '', 'gandffdfdvdfvfdbfggb'),
('ibdiahejjkqsxkjbbj', 'DIARRA', 'Ibrahima', '78452235', 'awballo22@gmail.com', '', 'dzjnkjnjnxds'),
('kassan', 'SANOGO', 'Kassoum', '87542563', 'awballo22@gmail.com', '', 'cdshcdhscjhj'),
('klaghdscqssuhssh', 'Klamadji', 'NANYENGUEM', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('marscqssuhssh', 'Abdoulaye', 'MARANGA', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('rabscqssuhssh', 'Mahamane', 'RABIOU', '64600036', 'awballo22@gmail.com', '', 'cdcdxqcdsqddd'),
('sabfgre', 'SABONE', 'Celestin Emmanuel', '82083814', 'awballo22@gmail.com', '', 'dffdfdvdfvfdbfggb'),
('thiallskss', 'THIAM', 'Ousmane', '82083414', 'awballo22@gmail.com', '', 'hkvhvkhvv'),
('tourqhshs', 'TOURE', 'Ousmane Sambou', '82083814', 'awballo22@gmail.com', '', 'ytrtdytrgrsgr');

-- --------------------------------------------------------

--
-- Structure de la table `vacataire`
--

CREATE TABLE `vacataire` (
  `id_vacataire` varchar(50) NOT NULL,
  `id_enseignant` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `vacataire`
--

INSERT INTO `vacataire` (`id_vacataire`, `id_enseignant`) VALUES
('arzfggfxgttyfhth', 'arzhdscqssuhssh'),
('biljtdhtxdf', 'bilghdscqssuhssh'),
('maransffsg', 'marscqssuhssh');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id_classe`),
  ADD KEY `classe_ibfk_1` (`id_promotion`);

--
-- Index pour la table `classe_stage`
--
ALTER TABLE `classe_stage`
  ADD PRIMARY KEY (`id_classe`),
  ADD KEY `classe_stage_ibfk1` (`id_stage`);

--
-- Index pour la table `contractuel`
--
ALTER TABLE `contractuel`
  ADD PRIMARY KEY (`id_contractuel`),
  ADD UNIQUE KEY `id_enseignant` (`id_enseignant`);

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id_classe`,`id_matiere`,`id_enseignant`),
  ADD KEY `id_matiere` (`id_matiere`),
  ADD KEY `id_enseignant` (`id_enseignant`);

--
-- Index pour la table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`id_division`),
  ADD UNIQUE KEY `id_instructeur` (`id_chef_division`);

--
-- Index pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`id_eleve`),
  ADD KEY `id_classe` (`id_classe`);

--
-- Index pour la table `enseignant`
--
ALTER TABLE `enseignant`
  ADD PRIMARY KEY (`id_enseignant`);

--
-- Index pour la table `instructeur`
--
ALTER TABLE `instructeur`
  ADD PRIMARY KEY (`id_instructeur`),
  ADD UNIQUE KEY `id_enseignant` (`id_enseignant`);

--
-- Index pour la table `matieres`
--
ALTER TABLE `matieres`
  ADD PRIMARY KEY (`id_matiere`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id_promotion`),
  ADD KEY `promotion_ibfk_1` (`id_chef_promo`),
  ADD KEY `promotion_ibfk_2` (`id_division`);

--
-- Index pour la table `stage`
--
ALTER TABLE `stage`
  ADD PRIMARY KEY (`id_stage`),
  ADD KEY `stage_ibfk_1` (`id_chef_stage`),
  ADD KEY `stage_ibfk_2` (`id_division`);

--
-- Index pour la table `stagiaire`
--
ALTER TABLE `stagiaire`
  ADD PRIMARY KEY (`id_stagiaire`),
  ADD KEY `stagiaire_ibfk_1` (`id_classe`);

--
-- Index pour la table `unite_enseignement`
--
ALTER TABLE `unite_enseignement`
  ADD PRIMARY KEY (`id_unite`),
  ADD UNIQUE KEY `id_instructeur` (`id_instructeur`),
  ADD KEY `id_division` (`id_division`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- Index pour la table `vacataire`
--
ALTER TABLE `vacataire`
  ADD PRIMARY KEY (`id_vacataire`),
  ADD UNIQUE KEY `id_enseignant` (`id_enseignant`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `classe`
--
ALTER TABLE `classe`
  ADD CONSTRAINT `classe_ibfk_1` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id_promotion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `classe_stage`
--
ALTER TABLE `classe_stage`
  ADD CONSTRAINT `classe_stage_ibfk1` FOREIGN KEY (`id_stage`) REFERENCES `stage` (`id_stage`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `contractuel`
--
ALTER TABLE `contractuel`
  ADD CONSTRAINT `contractuel_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`id_enseignant`);

--
-- Contraintes pour la table `cours`
--
ALTER TABLE `cours`
  ADD CONSTRAINT `cours_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`),
  ADD CONSTRAINT `cours_ibfk_2` FOREIGN KEY (`id_matiere`) REFERENCES `matieres` (`id_matiere`),
  ADD CONSTRAINT `cours_ibfk_3` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`id_enseignant`);

--
-- Contraintes pour la table `division`
--
ALTER TABLE `division`
  ADD CONSTRAINT `division_ibfk_1` FOREIGN KEY (`id_chef_division`) REFERENCES `instructeur` (`id_instructeur`);

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`id_eleve`) REFERENCES `utilisateur` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `eleve_ibfk_2` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `enseignant`
--
ALTER TABLE `enseignant`
  ADD CONSTRAINT `enseignant_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `utilisateur` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `instructeur`
--
ALTER TABLE `instructeur`
  ADD CONSTRAINT `instructeur_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`id_enseignant`);

--
-- Contraintes pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `promotion_ibfk_1` FOREIGN KEY (`id_chef_promo`) REFERENCES `instructeur` (`id_instructeur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `promotion_ibfk_2` FOREIGN KEY (`id_division`) REFERENCES `division` (`id_division`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stage`
--
ALTER TABLE `stage`
  ADD CONSTRAINT `stage_ibfk_1` FOREIGN KEY (`id_chef_stage`) REFERENCES `enseignant` (`id_enseignant`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stage_ibfk_2` FOREIGN KEY (`id_division`) REFERENCES `division` (`id_division`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `stagiaire`
--
ALTER TABLE `stagiaire`
  ADD CONSTRAINT `stagiaire_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe_stage` (`id_classe`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stagiaire_ibfk_2` FOREIGN KEY (`id_stagiaire`) REFERENCES `utilisateur` (`id_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `unite_enseignement`
--
ALTER TABLE `unite_enseignement`
  ADD CONSTRAINT `unite_enseignement_ibfk_1` FOREIGN KEY (`id_division`) REFERENCES `division` (`id_division`),
  ADD CONSTRAINT `unite_enseignement_ibfk_2` FOREIGN KEY (`id_instructeur`) REFERENCES `instructeur` (`id_instructeur`);

--
-- Contraintes pour la table `vacataire`
--
ALTER TABLE `vacataire`
  ADD CONSTRAINT `vacataire_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`id_enseignant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
